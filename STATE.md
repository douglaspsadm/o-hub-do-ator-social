# STATE.md — Estado do Projeto

> Todo agente deve ler este arquivo ao começar e atualizá-lo ao terminar.

**Última atualização:** 2026-11-19 — Bootstrap inicial do repositório de Social Media (`douglaspsadm/o-hub-do-ator-social`), catálogo dos repositórios de skills de vídeo com mais estrelas no GitHub, skill `reels-tiktok-hub-do-ator` e 1º roteiro pronto (`Bate-Texto`).

## Arquitetura & Arquivos Principais

- [`research/top-video-skills-github.md`](research/top-video-skills-github.md): levantamento verificado (via GitHub API) dos 15+ repositórios de skills de vídeo para Instagram Reels e TikTok com mais estrelas (incluindo `coreyhaines31/marketingskills`, `Vincentwei1021/video-shotcraft`, `bradautomates/claude-video`, `nexu-io/openmotion`, `remotion-dev/skills`, `Jakeschincariol/instagram-agent-skill`, etc.).
- [`.agents/skills/reels-tiktok-hub-do-ator/SKILL.md`](.agents/skills/reels-tiktok-hub-do-ator/SKILL.md) + [`references/hooks-atores.md`](.agents/skills/reels-tiktok-hub-do-ator/references/hooks-atores.md): skill sob medida para gerar roteiros de Reels e TikTok em PT-BR promovendo O Hub do Ator sem vícios de IA.
- [`roteiros/01-bate-texto-sozinho.md`](roteiros/01-bate-texto-sozinho.md): primeiro roteiro cronometrado (~32s) focado no **Bate-Texto Automático**.
- [`tests/validate-skills.mjs`](tests/validate-skills.mjs): smoke test (`npm test`) que valida arquivos obrigatórios e frontmatter das skills.
- [`scripts/setup-perf-tools.sh`](scripts/setup-perf-tools.sh) + [`.agents/skills/perf-stack/SKILL.md`](.agents/skills/perf-stack/SKILL.md): stack de performance obrigatória.

## Validações Executadas

- `npm test` (`node tests/validate-skills.mjs`): PASS (`10` arquivos obrigatórios e `2` skills validadas).

## Próximos Passos

1. Instalar ou adaptar skills externas selecionadas do catálogo (ex.: `Jakeschincariol/instagram-agent-skill` para variações de ganchos e `remotion-dev/skills` ou `Vincentwei1021/video-shotcraft` se quiser renderizar vídeos de demo automaticamente via código).
2. Criar uma série inicial de 5 roteiros em `roteiros/` cobrindo as principais dores de atores (Bate-Texto, Importação de PDF, Self-Tape em 90s, 5 Perguntas do Personagem e Composite Card).
3. Definir calendário editorial semanal e kit visual (cores, fontes e zonas seguras 9:16).
