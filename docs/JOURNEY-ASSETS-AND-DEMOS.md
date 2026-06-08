# HR Journey — imagens e vídeos (referência Factorial)

Catálogo reutilizável de assets para `public/journey/` e URLs Google Drive em `journeySteps.ts`.

---

## Imagens locais (`public/journey/`)

| Ficheiro | Uso | Passo HR Journey |
|----------|-----|------------------|
| `step1.png` | Ilustração hero | Step 1 — início época / head office |
| `step2.png` | Ilustração hero | Step 2 — performance manual |
| `step3.png` | Ilustração hero | Step 3 — stack fragmentado |
| `step4.png` | Ilustração hero | Step 4 — recruitment em escala |
| `step5.png` | Ilustração hero | Step 5 — visibilidade antes do deadline |
| `passoa.png` | Path forward | Explore — demo |
| `passob.png` | Path forward | Go live — rollout modular |
| `passoc.png` | Path forward | Results — medir impacto |
| `actionplan.png` | Screenshot produto | Step 2 — plano de ação / competências |
| `9box.png` | Screenshot produto | Step 5 — 9-box talent grid |
| `analyticsdistribution.png` | Screenshot produto | Step 5 — distribuição de scores |

**Nota:** `step*.png` e `passo*.png` são ilustrações por cliente (gerar/substituir). Screenshots são do produto Factorial (reutilizáveis).

---

## Vídeos Google Drive (demos Factorial)

Formato embed: `https://drive.google.com/file/d/FILE_ID/preview`

### Step 1 — Core · Trainings

| Assunto | URL preview |
|---------|-------------|
| Automatic certificate generation | https://drive.google.com/file/d/1RvLz_-zE1B_EJTKPd9J7pAfIY8XikAO4/preview |
| Learning management (LMS) | https://drive.google.com/file/d/19XbP-z_ypsCk0Cwhsd_6bpe63vj8TjnX/preview |

### Step 2 — Performance 2.0

| Assunto | URL preview |
|---------|-------------|
| Peer reviews (AVD Peers) | https://drive.google.com/file/d/1vXZCTd5HTwyh1bv0pxGev9QLKnWUVTU1/preview |
| Performance review (AVD Factorial) | https://drive.google.com/file/d/1ZBzAvQn8UtKPe_0s8M7c79LA-TZLX5pw/preview |

### Step 3 — Engagement & surveys

| Assunto | URL preview |
|---------|-------------|
| One-on-one meetings | https://drive.google.com/file/d/10kuyd-q2bYtF_fs3oiPOtISHowjsYKA0/preview |
| Surveys | https://drive.google.com/file/d/1vZfFnxLLWCvU404bqsGTg1SwwF9hjS_c/preview |

### Step 4 — Recruitment / ATS

| Assunto | URL preview |
|---------|-------------|
| ATS AI match | https://drive.google.com/file/d/1dqqMsqVk8nQ6Cm5xXjWhTMjK9e2YXif6/preview |

### Step 5 — Analytics

Sem vídeo Drive — usa screenshots `9box.png` e `analyticsdistribution.png`.

---

## Links diretos (abrir no browser)

| Assunto | Link Drive (view) |
|---------|-------------------|
| Automatic certificate generation | https://drive.google.com/file/d/1RvLz_-zE1B_EJTKPd9J7pAfIY8XikAO4/view |
| Learning management (LMS) | https://drive.google.com/file/d/19XbP-z_ypsCk0Cwhsd_6bpe63vj8TjnX/view |
| Peer reviews (AVD Peers) | https://drive.google.com/file/d/1vXZCTd5HTwyh1bv0pxGev9QLKnWUVTU1/view |
| Performance review (AVD Factorial) | https://drive.google.com/file/d/1ZBzAvQn8UtKPe_0s8M7c79LA-TZLX5pw/view |
| One-on-one meetings | https://drive.google.com/file/d/10kuyd-q2bYtF_fs3oiPOtISHowjsYKA0/view |
| Surveys | https://drive.google.com/file/d/1vZfFnxLLWCvU404bqsGTg1SwwF9hjS_c/view |
| ATS AI match | https://drive.google.com/file/d/1dqqMsqVk8nQ6Cm5xXjWhTMjK9e2YXif6/view |

---

## Onde está no código

- Vídeos: `src/data/journeySteps.ts` → `demoVideos[]` em cada passo
- Imagens: `public/journey/` + `journeyAsset()` em `journeySteps.ts`
- Referência Illovo completa: repo `illovosugar` no GitHub
