# AGENT.md — Regras do Projeto (PROTEGIDO)

> ⛔ Só o agente `social-manager` (e apenas a pedido do usuário) pode editar este arquivo, `.agents/agents/` e `.agents/skills/`.

## 1. Ideia do projeto
Produzir vídeos curtos (Instagram Reels e TikTok) que divulgam **O Hub do Ator** (`douglaspsadm/o-hub-do-ator`), ferramenta para atores ensaiarem texto e se prepararem.

## 2. O que o app realmente faz (única fonte permitida para claims)
- **Bate-Texto automático:** sobe PDF/DOCX/TXT, escolhe o personagem, o app fala as deixas do parceiro e conta o tempo da fala (diálogo ou monólogo; ritmo pausado, normal ou ágil).
- **Separação de papel:** extrai as falas do personagem e preenche 5 Perguntas, Necessidade, 6 Colunas (grátis/offline; IA opcional no plano Pro).
- **Preparação rápida:** Antes da Ação (90s), voz e relaxamento guiados por timer.
- **Self-tape e carreira:** checklist de gravação, histórico de audições, Composite Card e portfólio.
- Planos: Visitante, Free (login), BYOK, Pro. Não prometa o que não está aqui.

## 3. Roteamento (todo pedido começa aqui)
| Pedido | Agente | Skills |
|---|---|---|
| Administrar skills/agentes, auditoria, importar skills | `social-manager` | `perf-stack` |
| Pesquisar nicho, virais e decupar vídeos de referência | `trend-researcher` | `niche-research`, `video-watch`, `mkt-social` |
| Ganchos 0–3s e ângulos virais | `hook-strategist` | `hook-generator`, `ig-viral`, `create-viral-content`, `reels-tiktok-hub-do-ator` |
| Roteiro de Reel/TikTok/Story | `reel-scriptwriter` | `reels-tiktok-hub-do-ator`, `reels-scripting`, `ig-reel`, `ig-story` |
| Plano de gravação, edição, renderização | `video-producer` | `video-watch`, `reels-tiktok-hub-do-ator` |
| Legenda, hashtags, comentário fixado, versão TikTok | `caption-publisher` | `ig-caption`, `ig-comment`, `ig-repurpose`, `mkt-social`, `mkt-copywriting` |
| Calendário e séries de conteúdo | `content-planner` | `ig-plan`, `mkt-social`, `ig-repurpose` |
| Revisão final (verdade, tom humano, nota) | `quality-reviewer` | `ig-human`, `mkt-copy-editing`, `post-scorer`, `create-viral-content` |
| Decidir se vale a pena investir em tráfego pago agora, orçamento e matemática (CAC/CPA/ROAS) | `paid-traffic-advisor` | `paid-traffic-readiness`, `mkt-ads`, `ads-math`, `ads-budget` |
| Estruturar campanhas (Meta Ads / TikTok Ads), criativos de anúncio e Pixel/UTM | `paid-ads-strategist` | `mkt-ad-creative`, `mkt-conversion-tracking`, `ads-meta`, `ads-tiktok`, `ads-plan` |

## 4. Fluxo padrão de um vídeo
- **Orgânico:** `trend-researcher` → `hook-strategist` → `reel-scriptwriter` → `quality-reviewer` → `video-producer` → `caption-publisher` → `quality-reviewer` (aprova legenda).
- **Tráfego pago (somente após sinal verde):** vídeo orgânico validado → `paid-traffic-advisor` (semáforo 🔴/🟡/🟢) → `paid-ads-strategist` (criativos, Pixel/UTM e plano de campanha).

## 5. Regras gerais
- Antes de agir: ler `AGENT.md` e `STATE.md`. Ao terminar: `npm test`, atualizar `STATE.md`, commit e push.
- Skills de terceiros (`.agents/skills/` listadas em `THIRD_PARTY.md`) não se editam; adapte em skills próprias.
- Nada de depoimentos, métricas ou resultados inventados. Siga também `AGENTS.md` (perf-stack).
