import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'README.md',
  '.gitignore',
  'AGENTS.md',
  'STATE.md',
  'scripts/setup-perf-tools.sh',
  'research/top-video-skills-github.md',
  'roteiros/01-bate-texto-sozinho.md',
  '.agents/skills/perf-stack/SKILL.md',
  '.agents/skills/reels-tiktok-hub-do-ator/SKILL.md',
  '.agents/skills/reels-tiktok-hub-do-ator/references/hooks-atores.md',
];

for (const rel of requiredFiles) {
  const full = path.join(root, rel);
  assert.ok(fs.existsSync(full), `Missing required file: ${rel}`);
  assert.ok(fs.statSync(full).size > 0, `Empty required file: ${rel}`);
}

const skillsDir = path.join(root, '.agents', 'skills');
const skillFolders = fs
  .readdirSync(skillsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

assert.ok(skillFolders.length >= 2, 'Expected at least 2 skills in .agents/skills/');

for (const folder of skillFolders) {
  const skillPath = path.join(skillsDir, folder, 'SKILL.md');
  const content = fs.readFileSync(skillPath, 'utf8');
  assert.match(content, /^---\n[\s\S]*?\n---/, `Invalid YAML frontmatter in ${folder}/SKILL.md`);
  assert.match(content, /^name:\s+\S+/m, `Missing name in ${folder}/SKILL.md`);
  assert.match(content, /^description:\s+.+/m, `Missing description in ${folder}/SKILL.md`);
}

console.log(`PASS: ${requiredFiles.length} required files and ${skillFolders.length} skills validated.`);
