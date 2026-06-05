# Comece aqui — Proposta Factorial (modelo)

Esta pasta é o **modelo reutilizável**. Para cada cliente novo, **não copie** a pasta do último cliente — duplique **sempre** esta pasta.

---

## Passo a passo (cada cliente novo)

### 1. Duplicar o modelo

- No Finder: clique com o botão direito em `proposta-factorial-MODELO` → **Duplicar**
- Renomeie para `proposta-nome-do-cliente` (ex.: `proposta-acme`)
- Ou use o script (mais rápido):

```bash
cd ~/Desktop/proposta-factorial-MODELO
./scripts/novo-cliente.sh "Acme Corp" "acme"
```

Isto cria `~/Documents/proposta-acme` já com nomes trocados.

### 2. Colar a transcrição

1. Abra `transcricao/reuniao.txt`
2. Apague as linhas de instrução no topo
3. Cole o texto **integral** da discovery call (SDR ou demo)

### 3. Configurar o cliente

1. Copie `cliente.config.json.example` → `cliente.config.json`
2. Preencha:

| Campo | Exemplo | O que é |
|-------|---------|---------|
| `clientName` | Acme Corp | Nome na capa da proposta |
| `repoName` | acme | Nome do repositório GitHub (sem espaços) |
| `githubUser` | VictorHGutierrez-cloud | Seu utilizador GitHub |
| `language` | en ou pt | Idioma da copy nos slides |
| `deck` | 7 ou 19 | 7 = enxuto (pré-demo); 19 = pitch completo |
| `pricingMode` | placeholder ou final | placeholder = preço na demo; final = números fechados |

### 4. Abrir no Cursor

1. **File → Open Folder** → escolha a pasta duplicada do cliente
2. Abra `docs/PROMPT-CURSOR-7-SLIDES.md` (ou `PROMPT-CURSOR-19-SLIDES.md` se `deck` = 19)
3. Copie **todo** o bloco do prompt
4. Cole no chat em modo **Agent**
5. Anexe ou referencie: `@transcricao/reuniao.txt` e `@cliente.config.json`

O Agent adapta a proposta usando a transcrição e os ficheiros em `reference/` (preços) e `docs/` (features).

### 5. Ver o site no computador

```bash
cd ~/Documents/proposta-acme   # ou a pasta que criou
npm ci
npm run dev
```

Abra no browser: `http://localhost:8080/NOME-DO-REPO/`  
(ex.: `http://localhost:8080/acme/` — o mesmo valor de `repoName` em `vite.config.ts`)

### 6. Publicar no GitHub (link para o cliente)

1. Crie um repositório **vazio** no GitHub com o nome = `repoName` (ex.: `acme`)
2. Em **Settings → Pages**, escolha **GitHub Actions** como fonte
3. Na pasta do cliente:

```bash
git init
git add -A
git commit -m "Add proposal for [Client Name]"
git branch -M main
git remote add origin https://github.com/VictorHGutierrez-cloud/REPO.git
git push -u origin main
```

4. Após 1–2 minutos, o site fica em:  
   `https://victorhgutierrez-cloud.github.io/REPO/`

---

## O que tem dentro desta pasta

| Pasta / ficheiro | Para quê |
|------------------|----------|
| `src/` | Site da proposta (7 slides por defeito) |
| `templates/19-slide-template/` | Template completo de 19 slides |
| `docs/` | Playbooks e prompts para o Cursor |
| `reference/` | Preços Factorial (xlsx) e mapa de features |
| `Design/` | Cores, fontes, layout Factorial |
| `transcricao/reuniao.txt` | **Você cola a transcrição aqui** |

---

## Depois da demo

Atualize só:

- `src/utils/constants.ts` — preços e credenciais demo
- Slides `investment` e `solution` se necessário
- `git push` → o site atualiza sozinho

---

## Dúvidas frequentes

**Porque a pasta pesa muito depois de `npm ci`?**  
A pasta `node_modules` (~320 MB) é normal — não vai para o GitHub.

**7 ou 19 slides?**  
- **7** — cliente com poucas dores, pré-demo, decisão rápida  
- **19** — pitch longo com contexto, custo de não mudar, integrações  

**Posso estragar o design?**  
Não altere `SlidePresenter.tsx`, `SlideLayout.tsx` nem a estrutura dos componentes UI. Só mude **texto** em `slides.tsx` e `constants.ts`.
