# Prompt Cursor — Proposta 19 slides (pitch completo)

Use quando `cliente.config.json` → `"deck": "19"`.

Copie **todo o bloco abaixo** no chat Agent.

---

```
TAREFA: Adaptar proposta Factorial para NOVO CLIENTE com DECK COMPLETO de 19 slides.

LER PRIMEIRO:
1. transcricao/reuniao.txt
2. cliente.config.json
3. docs/factorial-funcionalidades-modulos.md
4. reference/ROW USD Prices.xlsx (se pricingMode = final)
5. docs/PROMPT-UNICO-PROPOSTA.md
6. templates/19-slide-template/components/slides/slides.tsx — molde visual e ids dos 19 slides

ESTRATÉGIA 19 SLIDES:
- Substituir src/components/slides/slides.tsx pelo conteúdo adaptado do template 19-slide
- Manter os mesmos slide ids: cover, timeline, next-scale, context-overview, context-tools, context-impact, problems, cost-analysis, solution, reports, integration, comparison, tech-architecture, tech-ai, video
- Incluir slides zkteco / microsoft-* APENAS se mencionados na transcrição
- Remover slides opcionais não aplicáveis (não deixar slides vazios)

CONFIGURAÇÃO:
- vite.config.ts base = "/" + repoName + "/"
- Idioma: cliente.config.json

REGRAS DE DESIGN: iguais a PROMPT-CURSOR-7-SLIDES.md (não tocar SlidePresenter, SlideLayout, shell UI)

ARCO NARRATIVO 19 SLIDES:
capa → história cliente → momento agora → contexto (3) → 5 dores quantificadas → custo status quo → solução+demo → relatórios → integração (se aplicável) → comparação → tech (se TI) → vídeo

COPY:
- Tom empático, segunda pessoa (vocês / you)
- Números só da transcrição; financeiros com [A DEFINIR] se pricingMode=placeholder
- problems: 5 cards com impacto métrico
- cost-analysis: conta visível + número grande
- solution: banner demo + módulos do bundle recomendado

FICHEIROS A EDITAR:
1. Resumo 15 linhas da transcrição
2. constants.ts
3. slides.tsx (19 slides — copiar estrutura de templates/19-slide-template/)
4. ReportsGallery.tsx se houver screenshots em Design/
5. Landing, index.html, vite.config.ts, particle words
6. intake + proposta markdown

NÃO inventar integrações Microsoft/ZKTeco sem evidência na transcrição.

AO TERMINAR: URL local, ficheiros alterados, slides omitidos e porquê, [A DEFINIR] pendentes.
```
