# AGENTS.md — Regras de Performance e Produção de Conteúdo

Este repositório centraliza a estratégia de Social Media, skills de vídeo (Instagram Reels & TikTok) e roteiros de divulgação do **O Hub do Ator** (`douglaspsadm/o-hub-do-ator`).

## Mandatory Performance Stack (`perf-stack`)

Em toda tarefa de código, análise, roteiro ou manutenção:

1. **Ferramentas**: verifique `rtk`, `graphify`, `context-mode`, `headroom` em `$HOME/.local/bin`; se faltarem, rode `bash scripts/setup-perf-tools.sh`.
2. **Ponytail**: faça a menor mudança completa, reutilize os templates e referências existentes, sem over-engineering nem dependências desnecessárias.
3. **RTK**: prefixe comandos ruidosos (`git status`, `git diff`, `git log`, `ls`, testes) com `rtk` (`PATH="$HOME/.local/bin:$PATH"`).
4. **Graphify**: mantenha `graphify-out/graph.json` atualizado (`graphify extract .`) e consulte antes de buscas amplas.
5. **Context Mode & Headroom**: nunca despeje saídas gigantes no contexto; leia apenas os trechos necessários.

## Convenções de Social Media (Instagram Reels & TikTok)

- **Voz humana (PT-BR)**: fale como ator para ator (bastidor real, dor prática de decorar texto, gravar self-tape tarde da noite, falta de parceiro de cena). Elimine clichês de IA ("No mundo dinâmico...", "Descubra como revolucionar...").
- **Estrutura de retenção**: Gancho visual + verbal nos primeiros `0–3s` → Demonstração real da tela do app (`Bate-Texto`, importação de roteiro, criação de personagem) → Virada/Prova → CTA específico de comentário ou link na bio.
- **Formato padrão de roteiro**: salve novos roteiros em `roteiros/NN-titulo-curto.md` com marcação de tempo (`0–3s`, `3–12s`, etc.), texto na tela, fala e direção de câmera/tela.
- **Validação & Persistência**: rode `npm test` antes de finalizar, atualize `STATE.md` e sempre faça `git commit` + `git push`.
