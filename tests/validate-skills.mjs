import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const dirs = (rel) => fs.readdirSync(path.join(root, rel), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

const requiredFiles = [
  'README.md', '.gitignore', 'AGENTS.md', 'AGENT.md', 'STATE.md', 'THIRD_PARTY.md',
  'scripts/setup-perf-tools.sh', 'research/top-video-skills-github.md',
  'roteiros/01-bate-texto-sozinho.md', '.agents/skills/catalog.json',
  '.agents/skills/reels-tiktok-hub-do-ator/references/hooks-atores.md',
];
for (const rel of requiredFiles) {
  assert.ok(fs.existsSync(path.join(root, rel)) && fs.statSync(path.join(root, rel)).size > 0, `Missing/empty: ${rel}`);
}

const frontmatter = (text, where) => {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(m, `Invalid frontmatter in ${where}`);
  return m[1];
};

// Skills: frontmatter name must match folder.
const skills = dirs('.agents/skills');
for (const s of skills) {
  const fm = frontmatter(read(`.agents/skills/${s}/SKILL.md`), `${s}/SKILL.md`);
  assert.match(fm, new RegExp(`^name:\\s*${s}\\s*$`, 'm'), `name != folder in ${s}`);
  assert.match(fm, /^description:\s*\S/m, `Missing description in ${s}`);
}

// Catalog must match the skills on disk.
const catalog = JSON.parse(read('.agents/skills/catalog.json'));
assert.deepEqual(catalog.skills.map((s) => s.name).sort(), [...skills].sort(), 'catalog.json != .agents/skills/');
for (const s of catalog.skills.filter((x) => x.license)) {
  assert.ok(read('THIRD_PARTY.md').includes(s.name), `${s.name} missing in THIRD_PARTY.md`);
}

// Agents: valid skills, unique, every skill owned, and routed in AGENT.md.
const agents = fs.readdirSync(path.join(root, '.agents/agents')).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
const owned = new Set();
const agentDoc = read('AGENT.md');
for (const a of agents) {
  const fm = frontmatter(read(`.agents/agents/${a}.md`), `agents/${a}.md`);
  assert.match(fm, new RegExp(`^name:\\s*${a}\\s*$`, 'm'), `name != file in agent ${a}`);
  assert.match(fm, /^description:\s*\S/m, `Missing description in agent ${a}`);
  const list = fm.match(/^skills:\s*\[(.*)\]\s*$/m);
  assert.ok(list, `Missing skills list in agent ${a}`);
  for (const s of list[1].split(',').map((x) => x.trim()).filter(Boolean)) {
    assert.ok(skills.includes(s), `Agent ${a} references unknown skill ${s}`);
    owned.add(s);
  }
  assert.ok(agentDoc.includes(`\`${a}\``), `Agent ${a} not routed in AGENT.md`);
}
for (const s of skills) assert.ok(owned.has(s), `Skill ${s} has no owner agent`);

console.log(`PASS: ${requiredFiles.length} files, ${skills.length} skills, ${agents.length} agents validated.`);
