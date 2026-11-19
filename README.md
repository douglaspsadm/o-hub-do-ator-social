# O Hub do Ator — Social Media & Video Skills

Central de pesquisa, skills de IA e roteiros de vídeos curtos (**Instagram Reels** e **TikTok**) para divulgar **O Hub do Ator** — ferramenta para atores ensaiarem texto (*Bate-Texto*), importarem roteiros, construírem personagens e organizarem self-tapes e portfólio.

## Estrutura do Repositório

```text
.
├── AGENT.md                  # Regras + roteamento (protegido; só o social-manager edita)
├── AGENTS.md                 # perf-stack e convenções de conteúdo
├── STATE.md                  # Estado atual do projeto
├── THIRD_PARTY.md            # Origem e licença das skills importadas
├── .agents/
│   ├── agents/               # 8 agentes (social-manager é o gerente)
│   └── skills/               # 19 skills + catalog.json
├── research/                 # Catálogo de skills do GitHub, tendências e ganchos
├── roteiros/                 # Roteiros prontos para gravar
├── planejamento/             # Calendário editorial
├── third_party/licenses/     # Licenças das skills importadas
└── tests/validate-skills.mjs # Valida skills, agentes, catálogo e roteamento
```

## Agentes

| Agente | Papel |
|---|---|
| `social-manager` | Gerente: administra skills e agentes, roteia e audita |
| `trend-researcher` | Pesquisa nicho e decupa virais |
| `hook-strategist` | Ganchos 0–3s |
| `reel-scriptwriter` | Roteiros de Reels/TikTok/Story |
| `video-producer` | Plano de gravação, edição e render (Remotion externo) |
| `caption-publisher` | Legendas, hashtags, comentários, versão TikTok |
| `content-planner` | Calendário e séries |
| `quality-reviewer` | Revisão final: verdade, tom humano, nota |

Fluxo: pesquisa → gancho → roteiro → revisão → produção → legenda → revisão.

## Como Usar

1. **Consultar o catálogo de skills do GitHub**: abra [`research/top-video-skills-github.md`](research/top-video-skills-github.md) para escolher e instalar skills externas de roteiro, edição, efeitos ou renderização com Remotion.
2. **Gerar novos roteiros de Reels/TikTok**: peça ao `reel-scriptwriter` (skill [`reels-tiktok-hub-do-ator`](.agents/skills/reels-tiktok-hub-do-ator/SKILL.md)) informando a funcionalidade do app (ex.: *Bate-Texto*, *Importar PDF*, *Self-Tape*, *Criação de Personagem*) e o formato desejado (*Talking-Head*, *POV de Bastidor*, *Demo de Tela*).
3. **Validar o repositório**:

```bash
npm test
```
