# Next Call Preparation Guide — Illovo Sugar

**Purpose:** Prepare Victor and Paolo for the Performance Management demo with Illovo Sugar.  
**Language of the call:** English  
**Platform:** Microsoft Teams (not Google Meet)  
**Status:** Pre-demo — pricing and full scope TBD

---

## 1. Call objective

Deliver a **Performance Management-focused demo** that shows how Factorial replaces manual EPM (Engaged Performance Management) before the **September 2026 review cycle**.

**Positioning:**
- Modular entry — Factorial fills gaps, does not replace SAP, UKG, or Payspace
- Lead with performance urgency (400+ managers, manual process today)
- Plant seeds for Recruitment add-on only if talent team attends or asks

**Do not promise:** Full SAP replacement, UKG disruption, or final pricing without commercial validation for ~7,793 seats.

---

## 2. Stakeholder map

| Name | Role | Notes |
|------|------|-------|
| **Tamanda Chikopa** | HR Services and Rewards Specialist | Main contact; coordinates demo date via WhatsApp |
| **Chido** | Performance Management lead | Must attend — owns EPM process |
| **Leila** | HR site head | Factory site stakeholder |
| **Moses** | HR site head | Factory site stakeholder |
| **HR Business Partners** | Recruitment | Grumpy about paperwork — good audience for efficiency story |
| **Training team** | L&D | Training on AB Sugar platform, recorded in SuccessFactors + LinkedIn Learning |
| **Kumbo** | HR Director | **Absent until August** — reorganization leave; not on this call |

**Decision path:** Tamanda qualifies and brings stakeholders. Final decision likely involves Kumbo after August.

---

## 3. What we already know (from qualification call)

- **7,793 employees** today; peak **9,000–10,000** seasonally
- **3 sites in Malawi:** head office (~200), Dwangwa (~3,000), Nchalo (~5,000–6,000)
- **SAP SuccessFactors** since 2022 — partial purchase (not full SAP suite)
- **Qlik Sense** — dashboards and analytics (integrated with SAP)
- **Payspace** — payroll processing
- **UKG** — time & attendance, in testing; go-live expected next month
- **EPM is manual** — paper/spreadsheets; no performance system
- **September** — next performance review cycle starts
- **400+ managers** involved in performance process
- **Recruitment** — 1,000+ applications per advert; ATS evaluation in progress
- **32 people** in HR Services team handling system capture
- **Busy season** — recruitment and data capture intensity right now
- **Shift happening** — from CENT-mandated solutions to country-owned HR decisions

---

## 4. Suggested 60–90 minute agenda

| Time | Section | What to cover |
|------|---------|---------------|
| 0–5 min | Intro & recap | Thank Tamanda; confirm attendees; recap qualification call pains |
| 5–10 min | Current state | Ask how EPM works today — templates, approval chains, timelines |
| 10–35 min | **Live demo: Performance** | Review cycles, goal setting, manager dashboard, employee self-service, notifications |
| 35–45 min | Link to trainings & engagement | Show how performance connects to training completion and pulse surveys |
| 45–55 min | How it fits their stack | SAP stays for core data; Payspace for payroll; UKG for T&A — Factorial fills performance gap |
| 55–65 min | Modular expansion | Brief mention of Recruitment add-on if talent team is present |
| 65–75 min | Q&A | Open floor — site heads may ask about factory worker access |
| 75–90 min | Next steps | Confirm pricing demo follow-up; timeline before September; who needs to see this next |

---

## 5. Discovery questions still open

Ask these during or after the demo — answers update `constants.ts` and the proposal:

**Performance (priority):**
- Walk me through your current EPM process step by step — who initiates, who approves?
- What review templates do you use? Annual, mid-year, probation?
- How do 400+ managers submit and track reviews today?
- What happens to review data after completion — where does it live?
- What would "success" look like before September?

**Integrations:**
- When does UKG go live for time & attendance?
- How does Payspace receive employee data from SAP today?
- Any API or integration constraints we should know about?

**Recruitment (if talent team attends):**
- What ATS are you evaluating? How far along is the build?
- How many active job postings do you typically run?

**Commercial:**
- Who besides Kumbo signs off on new HR tools?
- Is there budget allocated for performance management specifically?
- Any procurement or IT security review required?

---

## 6. Demo do's and don'ts

### Do
- Use **Microsoft Teams** for the meeting
- Open with September urgency — "we heard your cycle starts in September"
- Acknowledge their SAP investment — "you bought what you could; we fill the gap"
- Show mobile-friendly views — factory workers at Dwangwa and Nchalo may use phones
- Mention Malawi compliance and African customer references (Moët Hennessy, Ports of Namibia)
- Let Chido drive questions on performance workflow
- Offer to send the proposal link after the demo: `https://victorhgutierrez-cloud.github.io/illovosugar/`

### Don't
- Bash SAP, UKG, or Payspace — they are invested and migrating
- Push full platform replacement — Tamanda said modular is the reality
- Quote pricing for 7,793 seats without commercial approval
- Over-promise Recruitment if talent team is not on the call
- Use Google Meet links
- Rush — Tamanda joined while sick from hospital; respect their time

---

## 7. WhatsApp follow-up template (for Paolo)

```
Hi Tamanda, hope you're feeling better! Great speaking on Friday.

As discussed, we'd love to schedule the Performance Management demo for your team — Chido, the site HR heads, BPs, and training team.

Could you share a few date/time options that work on Teams? Happy to do 60–90 minutes.

I'll also send over a short proposal deck you can share internally before we meet.

Thanks!
Paolo
```

---

## 8. Post-demo checklist

After the demo, Victor should:

- [ ] Update `src/utils/constants.ts` with confirmed pricing (if discussed) or keep placeholders
- [ ] Update `intake-illovosugar.json` with new discovery answers
- [ ] Update slides if new pains or modules emerged
- [ ] Run `npm run build` locally to verify no errors
- [ ] `git add -A && git commit -m "Update after Illovo demo"` && `git push`
- [ ] Confirm GitHub Pages updated: `https://victorhgutierrez-cloud.github.io/illovosugar/`
- [ ] Send proposal link to Tamanda and Paolo for internal sharing
- [ ] Schedule pricing/scoping call if performance demo went well

---

## 9. Risk register

| Risk | Mitigation |
|------|------------|
| **Busy season** — Tamanda may delay again | WhatsApp confirmation 2 days before; morning reminder |
| **Phone-only attendance** — joined on phone last time | Send Teams link early; offer to reschedule when at laptop |
| **Decision maker absent** — Kumbo until August | Get Tamanda to commit on who can pre-approve; plan August follow-up with Kumbo |
| **Partial SAP footprint** — client may expect SAP integration story | Prepare integration talking points; mention API and Microsoft/Azure partnership |
| **UKG go-live overlap** — timing conflict | Position Factorial as complementary; no disruption to UKG rollout |
| **Enterprise pricing shock** — 7,793 seats | Do not quote in demo; schedule separate commercial conversation |
| **Recruitment distraction** — talent team may hijack agenda | Acknowledge pain, park for separate session unless Chido agrees to combine |

---

## 10. Quick reference — proposal assets

| Asset | Location |
|-------|----------|
| Live proposal site | https://victorhgutierrez-cloud.github.io/illovosugar/ |
| Transcript | `transcricao/reuniao.txt` |
| Intake data | `intake-illovosugar.json` |
| Markdown summary | `proposta-illovosugar.md` |
| Bundle reference | `docs/factorial-funcionalidades-modulos.md` |
| Pricing reference | `reference/ROW USD Prices.xlsx` |

**Recommended bundle:** Planning PRO  
**Future add-on:** Recruitment (when talent team is ready)

---

*Last updated: June 2026 — after Illovo Sugar qualification call*
