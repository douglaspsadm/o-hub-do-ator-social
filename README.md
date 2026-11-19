# O Hub do Ator — Social Media & Video Skills

Central de pesquisa, skills de IA e roteiros de vídeos curtos (**Instagram Reels** e **TikTok**) para divulgar **O Hub do Ator** — ferramenta para atores ensaiarem texto (*Bate-Texto*), importarem roteiros, construírem personagens e organizarem self-tapes e portfólio.

## Estrutura do Repositório

```text
.
├── .agents/skills/
│   ├── perf-stack/SKILL.md                  # Stack de performance (RTK, Graphify, etc.)
│   └── reels-tiktok-hub-do-ator/
│       ├── SKILL.md                         # Skill pronta para roteiros de Reels & TikTok do app
│       └── references/hooks-atores.md       # Banco de ganchos testados para o nicho de atuação
├── research/
│   └── top-video-skills-github.md           # Curadoria dos repositórios de vídeo/social com mais estrelas no GitHub
├── roteiros/
│   └── 01-bate-texto-sozinho.md             # Primeiro roteiro pronto para gravação (Bate-Texto solo)
├── scripts/
│   └── setup-perf-tools.sh                  # Instalador das ferramentas perf-stack
├── tests/
│   └── validate-skills.mjs                  # Smoke test de validação de skills e arquivos
├── AGENTS.md
└── STATE.md
```

## Como Usar

1. **Consultar o catálogo de skills do GitHub**: abra [`research/top-video-skills-github.md`](research/top-video-skills-github.md) para escolher e instalar skills externas de roteiro, edição, efeitos ou renderização com Remotion.
2. **Gerar novos roteiros de Reels/TikTok**: acione a skill [`reels-tiktok-hub-do-ator`](.agents/skills/reels-tiktok-hub-do-ator/SKILL.md) informando a funcionalidade do app (ex.: *Bate-Texto*, *Importar PDF*, *Self-Tape*, *Criação de Personagem*) e o formato desejado (*Talking-Head*, *POV de Bastidor*, *Demo de Tela*).
3. **Validar o repositório**:

```bash
npm test
```
