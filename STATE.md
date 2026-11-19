# STATE.md — Estado do Projeto

> Todo agente deve ler este arquivo ao começar e atualizá-lo ao terminar.

**Última atualização:** 2026-11-19 — Importadas 17 skills MIT de terceiros, criados 8 agentes (gerente `social-manager`), `AGENT.md` com roteamento, `catalog.json`, `THIRD_PARTY.md` e teste de consistência. Antes: bootstrap, catálogo de skills do GitHub e 1º roteiro.

## Arquitetura & Arquivos Principais

- [`research/top-video-skills-github.md`](research/top-video-skills-github.md): levantamento verificado (via GitHub API) dos 15+ repositórios de skills de vídeo para Instagram Reels e TikTok com mais estrelas (incluindo `coreyhaines31/marketingskills`, `Vincentwei1021/video-shotcraft`, `bradautomates/claude-video`, `nexu-io/openmotion`, `remotion-dev/skills`, `Jakeschincariol/instagram-agent-skill`, etc.).
- [`.agents/skills/reels-tiktok-hub-do-ator/SKILL.md`](.agents/skills/reels-tiktok-hub-do-ator/SKILL.md) + [`references/hooks-atores.md`](.agents/skills/reels-tiktok-hub-do-ator/references/hooks-atores.md): skill sob medida para gerar roteiros de Reels e TikTok em PT-BR promovendo O Hub do Ator sem vícios de IA.
- [`roteiros/01-bate-texto-sozinho.md`](roteiros/01-bate-texto-sozinho.md): primeiro roteiro cronometrado (~32s) focado no **Bate-Texto Automático**.
- [`tests/validate-skills.mjs`](tests/validate-skills.mjs): smoke test (`npm test`) que valida arquivos obrigatórios e frontmatter das skills.
- [`scripts/setup-perf-tools.sh`](scripts/setup-perf-tools.sh) + [`.agents/skills/perf-stack/SKILL.md`](.agents/skills/perf-stack/SKILL.md): stack de performance obrigatória.

## Agentes e Skills
- 8 agentes em `.agents/agents/` (roteamento em `AGENT.md` §3); gerente: `social-manager`.
- 19 skills em `.agents/skills/` (2 locais + 17 de terceiros, ver `THIRD_PARTY.md`); `catalog.json` deve sempre bater com o disco.
- `remotion-dev/skills` NÃO foi copiada (sem licença explícita); instalar com `npx skills add remotion-dev/skills` ao renderizar.
- Skills de terceiros renomeadas: `watch`→`video-watch`, `social`→`mkt-social`, `copywriting`→`mkt-copywriting`, `copy-editing`→`mkt-copy-editing`.

## Validações Executadas

- `npm test` (`node tests/validate-skills.mjs`): PASS (11 arquivos, 19 skills, 8 agentes; checa nome=pasta, catálogo, skills órfãs e roteamento).

## Próximos Passos

1. Rodar o fluxo completo com `social-manager` num 2º vídeo (Importar PDF → separar papel) e ajustar os agentes conforme o resultado.
2. Série inicial de 5 roteiros em `roteiros/` e 1ª semana em `planejamento/`.
3. Se for renderizar com Remotion, instalar a skill externa e confirmar a licença.
