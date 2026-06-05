# Prompt Cursor — Proposta 7 slides

Copie **todo o bloco abaixo** no chat Agent (modo Agent).  
Certifique-se de que `transcricao/reuniao.txt` e `cliente.config.json` estão preenchidos.

---

```
TAREFA: Adaptar esta proposta Factorial para um NOVO CLIENTE usando APENAS a transcrição e cliente.config.json.

LER PRIMEIRO (obrigatório):
1. transcricao/reuniao.txt — fonte única da narrativa e dores
2. cliente.config.json — clientName, repoName, language, pricingMode, deck
3. docs/factorial-funcionalidades-modulos.md — bundles e módulos (bundle-first)
4. reference/ROW USD Prices.xlsx — preços quando pricingMode = "final"
5. docs/PROMPT-UNICO-PROPOSTA.md — regras de design invioláveis

CONFIGURAÇÃO TÉCNICA:
- vite.config.ts: base = "/" + repoName + "/" (de cliente.config.json)
- GitHub Pages URL: https://[githubUser].github.io/[repoName]/
- Idioma da copy: conforme cliente.config.json (en ou pt)

REGRAS DE DESIGN (NÃO VIOLAR):
- NÃO modificar: SlidePresenter.tsx, SlideLayout.tsx, cinematic-hero.tsx, estrutura components/ui
- NÃO inventar novos tipos de slide ou rotas (só / e /proposta)
- Manter SlideData, SectionLabel, SlideTitle, FactorialCard, px-[100px], alternância bg dark/light
- Atualizar particle words em particle-text-effect.tsx: ["Factorial HR", "CLIENT NAME UPPERCASE"]
- Remover TODA copy de clientes anteriores (Sall Marketing, Smartlic, Best Care, etc.)

REGRAS DE PITCH — 7 SLIDES (ordem fixa):
1. cover — Partnership Proposal, quote real da transcrição, vendedor Victor Gutierrez
2. challenges — exatamente 5 dores da transcrição + 1 card scaling/urgency; cada dor: title + body + impact
3. solution — bundle recomendado (bundle-first de factorial-funcionalidades-modulos.md); 4 módulos mapeados às dores; banner demo
4. investment — se pricingMode=placeholder: usar [A DEFINIR NA DEMO]; se final: números de ROW USD Prices
5. how-it-fits — tabela 6 linhas: Criteria | Today | With Factorial (só o que veio na transcrição)
6. next-steps — 3 passos alinhados à urgência e decisor da call
7. factorial-video — título com nome do cliente; manter closingVideoId

BUNDLE (regra comercial):
- Sempre recomendar um Starter ou PRO bundle primeiro (ver docs/factorial-funcionalidades-modulos.md)
- Add-ons só se gap crítico (ex.: Recruitment se pediram ATS)
- Não destacar módulos não mencionados na transcrição

FICHEIROS A EDITAR (ordem):
1. Resumir em 12 linhas o que extraiu da transcrição
2. src/utils/constants.ts — todos os campos; números null ou reais conforme pricingMode
3. src/components/slides/slides.tsx — reescrever copy dos 7 slides; remover placeholders e instruções meta
4. src/pages/Landing.tsx + particle-text-effect.tsx — nome do cliente
5. index.html — title e meta
6. vite.config.ts — repoName correto
7. Criar intake-[cliente].json e proposta-[cliente].md a partir de intake-template.json e proposta-TEMPLATE.md

NÃO FAZER:
- Refatorar components/ui
- Adicionar dependências npm
- Inventar dores ou preços não suportados pela transcrição ou reference/

AO TERMINAR, listar:
- URL local de teste
- Ficheiros alterados
- Itens [A DEFINIR] para revisão humana
- Bundle recomendado e justificação em 2 frases
```
