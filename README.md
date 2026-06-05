# Illovo Sugar — Factorial HR Proposal

Pre-demo commercial proposal for **Illovo Sugar** (Malawi · 7,793 employees).

**Live site:** https://victorhgutierrez-cloud.github.io/illovosugar/

## Status

- **Deck:** 7 slides (qualification call — pre-demo)
- **Pricing:** TBD — confirmed during Performance Management demo
- **Next step:** Demo on Microsoft Teams — Tamanda coordinates via WhatsApp

## Contact

Victor Gutierrez — Expansion Manager · US · Factorial  
victor.gutierrez@factorial.co

## Local development

```bash
npm ci
npm run dev
# http://localhost:8080/illovosugar/
```

## Key files

| File | Purpose |
|------|---------|
| `transcricao/reuniao.txt` | Qualification call transcript |
| `intake-illovosugar.json` | Structured client data |
| `proposta-illovosugar.md` | Markdown proposal summary |
| `docs/GUIA-PREPARACAO-PROXIMA-CALL.md` | Next call preparation guide |
| `cliente.config.json` | Client configuration |

## After the demo

Update `src/utils/constants.ts` with confirmed pricing, then `git push` — GitHub Actions deploys automatically.
