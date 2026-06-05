# Playbook — Nova proposta Factorial

## Checklist rápido

- [ ] Pasta duplicada a partir de `proposta-factorial-MODELO` (nunca do último cliente)
- [ ] `transcricao/reuniao.txt` com texto integral da call
- [ ] `cliente.config.json` preenchido (copiado do `.example`)
- [ ] Prompt colado: `PROMPT-CURSOR-7-SLIDES.md` ou `PROMPT-CURSOR-19-SLIDES.md`
- [ ] `npm run build` sem erros
- [ ] Zero referências ao cliente template nos slides
- [ ] Repo GitHub criado com nome = `repoName`
- [ ] GitHub Pages → Source: **GitHub Actions**
- [ ] Link enviado ao cliente: `https://[githubUser].github.io/[repoName]/`

## Repo GitHub novo

1. GitHub → New repository → nome = `repoName` (público)
2. Não adicionar README (repo vazio)
3. Na pasta local do cliente:

```bash
git init
git add -A
git commit -m "Add Factorial proposal for [Client Name]"
git branch -M main
git remote add origin https://github.com/VictorHGutierrez-cloud/REPO.git
git push -u origin main
```

4. Settings → Pages → Build and deployment → **GitHub Actions**
5. O workflow `.github/workflows/deploy.yml` corre no push

## vite.config.ts

```ts
const repoBase = "/nome-do-repo/";  // igual a cliente.config.json → repoName
```

URL local: `http://localhost:8080/nome-do-repo/`

## Pricing

| Modo | Quando | Onde |
|------|--------|------|
| `placeholder` | Pré-demo | constants.ts null + PRICING_PLACEHOLDER nos slides |
| `final` | Pós-demo | ROW USD Prices.xlsx + bundle floor seats |

Regra: **bundle-first**, depois add-ons (ver `docs/factorial-funcionalidades-modulos.md`).

## Revisão humana antes de enviar

1. Nome do cliente correto na capa
2. Citação atribuída à pessoa certa
3. Bundle alinhado com o que foi prometido na call
4. Nenhum número inventado
5. Demo credentials só se reais
6. Payroll: Factorial não processa — só sincroniza (se aplicável)

## Problemas comuns

| Problema | Solução |
|----------|---------|
| Página branca no GitHub | `vite.config.ts` base deve ser `/repoName/` com barras |
| `/proposta` dá 404 ao refrescar | Entrar sempre pela landing → Enter proposal |
| Build falha | `npm ci` na pasta do cliente |
| Copy do cliente antigo | Correr prompt de novo pedindo remoção explícita |

## Referências

- Design: `Design/`
- Features: `docs/factorial-funcionalidades-modulos.md`
- Preços: `reference/ROW USD Prices.xlsx`
- Template 19 slides: `templates/19-slide-template/`
