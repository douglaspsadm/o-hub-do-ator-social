# Social Media & Video Skills — Reels, TikTok e Tráfego Pago

Central de **agentes de IA, skills de vídeo curto (Instagram Reels e TikTok) e tráfego pago** para pesquisar referências, analisar vídeos, escrever roteiros para gravação com atores reais, planejar postagens e decidir quando vale a pena investir em anúncios.

---

## Como Usar (Guia Prático Passo a Passo)

Você não precisa chamar scripts na mão: basta conversar com o agente descrevendo o que precisa (ou citando o nome do agente). O `social-manager` direciona cada tarefa automaticamente.

### 1. Leitor e Analisador de Vídeo (`video-watch` + `video-producer`)
Use quando quiser **melhorar um vídeo de teste seu** ou **decupar um Reel/TikTok viral de referência**.

- **O que mandar:** o arquivo `.mp4` direto no chat ou um link do Google Drive. *(Links diretos do Instagram costumam exigir login; prefira o arquivo `.mp4` ou link do Drive.)*
- **O que o agente faz:** assiste ao vídeo, transcreve a fala com marcação de tempo, identifica onde a retenção cai (gancho lento, tela pequena, falta de legendas, CTA fraco) e gera uma versão melhorada.
- **Exemplo de pedido:**
  > *"Assista a esse vídeo do Drive [link], faça o diagnóstico de retenção e crie uma versão melhorada de 30 segundos para gravar com atores reais."*
- **Onde fica salvo:** análise em `research/analise-...md` e roteiro melhorado em `roteiros/`.

---

### 2. Pesquisa de Nicho e Ganchos 0–3s (`trend-researcher` + `hook-strategist`)
Use antes de gravar para escolher **o ângulo e os primeiros 3 segundos** que fazem a pessoa parar de rolar o feed.

- **O que mandar:** o tema ou a dor do público que você quer atacar.
- **O que o agente faz:** levanta formatos que performam no nicho, gera até 10 opções de gancho (visual + verbal), remove clichês de IA e entrega o **Top 3 pontuado**.
- **Exemplo de pedido:**
  > *"Gere 10 ganchos de 0–3s sobre a dor de ensaiar texto sozinho sem ninguém pra dar a deixa e rankeie os 3 melhores."*
- **Onde fica salvo:** `research/ganchos-AAAA-MM-DD.md`.

---

### 3. Roteiro Pronto para Gravar (`reel-scriptwriter` + `video-producer`)
Use para transformar uma ideia solta em um **roteiro cronometrado (15–45s)** pronto para entregar aos atores.

- **O que mandar:** sua ideia de cena, quantos atores vão gravar (1 ou em dupla) e qual funcionalidade do app quer mostrar.
- **O que o agente faz:**
  - Escreve o roteiro segundo a segundo (`0–3s`, `3–9s`, etc.) com enquadramento, texto na tela em zona segura e falas naturais.
  - Monta o **Guia de Direção para Atores Reais** e a **Lista Numerada de Takes** para gravar em ~15–20 minutos com celular.
  - Define regras de edição (cortes a cada 2–3s, tela do app em tela cheia, legendas no terço médio e áudio real).
- **Exemplo de pedido:**
  > *"Tenho uma ideia de vídeo com 2 atores: um desesperado tentando gravar uma cena sozinho e um amigo chegando com a ferramenta. Crie o roteiro e a lista de takes."*
- **Onde fica salvo:** `roteiros/NN-titulo-curto.md`.

---

### 4. Legendas, Hashtags e Adaptação para TikTok (`caption-publisher`)
Use assim que o roteiro estiver aprovado para fechar o pacote de publicação.

- **O que o agente faz:** cria legenda curta para Instagram (2–4 linhas), 3–5 hashtags do nicho, **comentário fixado** com palavra-chave de CTA e a versão adaptada para o TikTok.
- **Exemplo de pedido:**
  > *"Crie a legenda de Instagram, o comentário fixado e a adaptação para TikTok do roteiro `roteiros/04-desesperado-gravar-dupla.md`."*
- **Onde fica salvo:** seção `## Publicação` no final do arquivo do roteiro.

---

### 5. Revisão Final Antes de Gravar ou Postar (`quality-reviewer`)
Última barreira de qualidade antes do REC ou da publicação.

- **O que o agente faz:** checa se tudo que o vídeo diz sobre a ferramenta é verdade, aplica filtro anti-IA (remove tom robótico/institucional), verifica fôlego das falas e dá uma nota (`post-scorer`). Abaixo de 7, devolve com ajustes.
- **Exemplo de pedido:**
  > *"Revise o roteiro `roteiros/04-desesperado-gravar-dupla.md` com o `quality-reviewer`."*

---

### 6. Calendário Editorial (`content-planner`)
Use para organizar a constância de postagens sem ficar sem ideia.

- **O que o agente faz:** monta o plano semanal/mensal distribuindo os formatos (demo de tela, bastidor/POV, esquete com atores, Stories de apoio) e reaproveitamento entre Instagram e TikTok.
- **Exemplo de pedido:**
  > *"Monte o calendário da primeira semana com 3 Reels/TikToks e Stories de apoio."*
- **Onde fica salvo:** `planejamento/AAAA-MM-semana-N.md`.

---

### 7. Análise de Retenção e Tráfego Pago (`paid-traffic-advisor` + `paid-ads-strategist`)
Use **depois de postar no orgânico** (48h–72h após publicar) para analisar resultados e decidir se vale a pena colocar dinheiro em anúncios.

#### Passo A — Saber se vale a pena investir (`paid-traffic-advisor`)
- **O que mandar:** **prints (screenshots)** dos gráficos de retenção e métricas do Instagram Insights / TikTok Analytics (alcance, retenção nos 3s, tempo médio assistido, comentários, salvamentos e cliques no link), mais o link de destino, preço do produto/plano (se houver) e orçamento disponível para teste.
- **O que o agente faz:** roda o checklist dos 5 portões (`paid-traffic-readiness`) + matemática de mídia (`ads-math` e `ads-budget`) e devolve um veredito claro:
  - 🔴 **NÃO VALE A PENA AGORA:** mostra exatamente o que ajustar no orgânico antes de gastar 1 real.
  - 🟡 **TESTE CONTROLADO (R\$ 20–50/dia por 7 dias):** indica qual vídeo validado testar no Gerenciador de Anúncios (Meta Ads) ou Spark Ads (TikTok).
  - 🟢 **PRONTO PARA ESCALAR:** indica como aumentar verba com controle de CPA/ROAS.
- **Exemplo de pedido:**
  > *"Postei esses 3 vídeos há 3 dias [prints dos gráficos de retenção]. Vale a pena colocar tráfego pago em algum deles agora?"*

#### Passo B — Montar campanha e criativos (`paid-ads-strategist`)
- **Quando usar:** somente após o sinal verde (`🟡` ou `🟢`) do `paid-traffic-advisor`.
- **O que o agente faz:** adapta os vídeos orgânicos vencedores em variações de criativo (novos ganchos de 3s e textos principais), define estrutura de campanha no Meta Ads / TikTok Ads e entrega o checklist de **Pixel + eventos de conversão + UTM**.
- **Depois que o anúncio rodar:** você pode mandar prints ou planilhas exportadas do Gerenciador de Anúncios para o agente diagnosticar fadiga criativa e dizer qual anúncio pausar ou escalar.
- **Onde fica salvo:** `planejamento/trafego-pago-AAAA-MM-DD.md` e `planejamento/campanha-AAAA-MM-DD.md`.

---

### 8. Administrar Skills e Agentes (`social-manager`)
- Único agente autorizado a editar `AGENT.md`, criar/ajustar agentes em `.agents/agents/` e importar ou remover skills em `.agents/skills/`.
- Garante que toda skill importada tenha licença compatível (MIT), mantendo `THIRD_PARTY.md`, `third_party/licenses/` e `.agents/skills/catalog.json` sincronizados.

---

## Estrutura do Repositório

```text
.
├── AGENT.md                  # Regras e tabela de roteamento (protegido; só o social-manager edita)
├── AGENTS.md                 # perf-stack e convenções de produção
├── STATE.md                  # Estado atual do projeto (leia ao iniciar)
├── THIRD_PARTY.md            # Origem e licença de todas as skills importadas
├── .agents/
│   ├── agents/               # 10 agentes especialistas (social-manager é o gerente)
│   └── skills/               # 28 skills (3 locais + 25 MIT) + catalog.json
├── research/                 # Catálogos de skills do GitHub (vídeo e tráfego pago), análises e ganchos
├── roteiros/                 # Roteiros prontos para gravação
├── planejamento/             # Calendários editoriais e diagnósticos/planos de tráfego pago
├── third_party/licenses/     # Arquivos de licença (MIT) das skills importadas
├── scripts/
│   └── setup-perf-tools.sh   # Instalador das ferramentas perf-stack
└── tests/
    └── validate-skills.mjs   # Teste automático de consistência do repositório
```

---

## Agentes Disponíveis

| Agente | Papel |
|---|---|
| `social-manager` | Gerente: administra skills e agentes, roteia pedidos e audita licenças |
| `trend-researcher` | Pesquisa nicho e decupa vídeos virais de referência |
| `hook-strategist` | Cria e pontua ganchos de 0–3s |
| `reel-scriptwriter` | Escreve roteiros cronometrados de Reels, TikTok e Stories |
| `video-producer` | Analisa vídeos, monta direção para atores reais, lista de takes e edição |
| `caption-publisher` | Legendas, hashtags, comentário fixado e adaptação para TikTok |
| `content-planner` | Calendário editorial semanal/mensal e séries |
| `quality-reviewer` | Revisão final: verdade das funções, tom humano anti-IA e nota |
| `paid-traffic-advisor` | Analisa gráficos/métricas e diz **quando vale a pena** pagar tráfego (🔴/🟡/🟢) |
| `paid-ads-strategist` | Estrutura campanhas Meta/TikTok Ads, variações de criativo e Pixel/UTM |

**Fluxo orgânico:** `trend-researcher` → `hook-strategist` → `reel-scriptwriter` → `quality-reviewer` → `video-producer` → `caption-publisher` → `quality-reviewer`.  
**Fluxo pago:** vídeo validado no orgânico → `paid-traffic-advisor` → `paid-ads-strategist`.

---

## Catálogo de Skills (28 skills)

- **Vídeo, Reels e TikTok:** `video-watch`, `ig-reel`, `ig-viral`, `ig-story`, `reels-scripting`, `hook-generator`, `niche-research`, `reels-tiktok-hub-do-ator` (template local).
- **Legendas, Copy e Revisão Anti-IA:** `ig-caption`, `ig-comment`, `ig-human`, `ig-repurpose`, `create-viral-content`, `post-scorer`, `mkt-social`, `mkt-copywriting`, `mkt-copy-editing`.
- **Planejamento:** `ig-plan`.
- **Tráfego Pago e Métricas:** `paid-traffic-readiness` (local), `mkt-ads`, `mkt-ad-creative`, `mkt-conversion-tracking`, `ads-meta`, `ads-tiktok`, `ads-budget`, `ads-math`, `ads-plan`.
- **Performance:** `perf-stack`.
- **Catálogos de pesquisa do GitHub:** [`research/top-video-skills-github.md`](research/top-video-skills-github.md) e [`research/top-paid-ads-skills-github.md`](research/top-paid-ads-skills-github.md).

---

## Validação do Repositório

Para conferir se todos os agentes, skills, catálogo (`catalog.json`), licenças (`THIRD_PARTY.md`) e roteamento (`AGENT.md`) estão consistentes:

```bash
npm test
```
