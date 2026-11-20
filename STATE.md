# STATE.md — Estado do Projeto

> Todo agente deve ler este arquivo ao começar e atualizá-lo ao terminar.

**Última atualização:** 2026-11-19 — Importadas 8 skills MIT de tráfego pago (`coreyhaines31/marketingskills` + `AgriciDaniel/claude-ads`) + skill local `paid-traffic-readiness`, criados os agentes `paid-traffic-advisor` e `paid-ads-strategist` (total: **28 skills**, **10 agentes**) e adicionada variação `roteiros/04-desesperado-gravar-dupla.md` (dupla de atores reais, nota `9,4/10`).

## Arquitetura & Arquivos Principais

- [`research/top-video-skills-github.md`](research/top-video-skills-github.md): catálogo dos repositórios de skills de vídeo para Instagram Reels e TikTok com mais estrelas.
- [`research/top-paid-ads-skills-github.md`](research/top-paid-ads-skills-github.md): catálogo dos repositórios de skills de tráfego pago com mais estrelas.
- [`research/analise-video-teste-Df43eClRweb.md`](research/analise-video-teste-Df43eClRweb.md): transcrição e diagnóstico de retenção do vídeo de teste original (52,6s).
- [`.agents/skills/reels-tiktok-hub-do-ator/SKILL.md`](.agents/skills/reels-tiktok-hub-do-ator/SKILL.md) + [`references/hooks-atores.md`](.agents/skills/reels-tiktok-hub-do-ator/references/hooks-atores.md): skill sob medida para Reels e TikTok em PT-BR.
- [`.agents/skills/paid-traffic-readiness/SKILL.md`](.agents/skills/paid-traffic-readiness/SKILL.md): semáforo Go/No-Go (🔴/🟡/🟢) para decidir quando vale a pena usar tráfego pago.
- [`roteiros/01-bate-texto-sozinho.md`](roteiros/01-bate-texto-sozinho.md): roteiro 01 (~32s, Bate-Texto solo).
- [`roteiros/02-iomax-teatro-melhorado.md`](roteiros/02-iomax-teatro-melhorado.md): roteiro 02 para ator real (~33s, 8 takes, revisão `9,2/10`).
- [`roteiros/03-gravar-cena-sozinho-esquete.md`](roteiros/03-gravar-cena-sozinho-esquete.md): esquete em dupla de atores reais (~36s, `Take 14`, revisão `9,3/10`).
- [`roteiros/04-desesperado-gravar-dupla.md`](roteiros/04-desesperado-gravar-dupla.md): variação em dupla de atores reais (~38s, 6 takes, foco no momento mágico da deixa ao vivo, revisão `9,4/10`).
- [`tests/validate-skills.mjs`](tests/validate-skills.mjs): smoke test (`npm test`) que valida arquivos obrigatórios, catálogo, licenças, skills e roteamento de agentes.
- [`scripts/setup-perf-tools.sh`](scripts/setup-perf-tools.sh) + [`.agents/skills/perf-stack/SKILL.md`](.agents/skills/perf-stack/SKILL.md): stack de performance obrigatória.

## Agentes e Skills
- **10 agentes** em `.agents/agents/` (roteamento em `AGENT.md` §3); gerente: `social-manager`; tráfego pago: `paid-traffic-advisor` (viabilidade) e `paid-ads-strategist` (execução).
- **28 skills** em `.agents/skills/` (3 locais + 25 MIT de terceiros, ver `THIRD_PARTY.md`); `catalog.json` validado contra o disco.
- `remotion-dev/skills` e `irinabuht12-oss/marketing-skills` NÃO foram copiadas (sem arquivo de licença explícito).

## Validações Executadas

- `npm test` (`node tests/validate-skills.mjs`): PASS (`11` arquivos, `28` skills, `10` agentes validados).

## Próximos Passos

1. Gravar os roteiros `02`, `03` ou `04` com atores reais e postar no orgânico para medir retenção e comentários.
2. Após os primeiros vídeos no ar, rodar o `paid-traffic-advisor` para receber o semáforo (🔴/🟡/🟢) antes de investir em Meta Ads / TikTok Ads.
3. Montar a 1ª semana completa em `planejamento/` com `content-planner`.
