/**
 * Illovo Sugar — client proposal constants.
 * Narrative source: qualification call with Tamanda Chikopa (2026-06).
 */

export const PRICING_PLACEHOLDER = "[A DEFINIR NA DEMO]" as const;

export const DEFAULT_VALUES = {
  empresa: "Illovo Sugar",
  legalName: "Illovo Sugar Malawi",
  tagline: "September won't be manual again — modular HR that fills the gaps, not another SAP",
  location: "Malawi · 3 sites · largest sugar employer in the country",
  headquarters: "Malawi head office (~200) · Dwangwa & Nchalo factory sites",

  totalColaboradores: 7793,
  remoteRegions: "3 sites across Malawi — head office, Dwangwa (~3,000), Nchalo (~5,000–6,000)",
  decisionTimeline: "Performance cycle starts September 2026",
  goLiveTarget: "Align before September review cycle",
  firstHrSoftware: false,

  clientQuote:
    "I don't think we're optimal. Chances are we don't know where those things are sitting — maybe they don't even shortlist at all. There's a risk there.",
  clientQuoteAttribution: "Tamanda Chikopa — HR Services and Rewards Specialist, Illovo Sugar",
  contactRole: "HR Services and Rewards Specialist",
  decisionMaker: "Kumbo — HR Director (on reorganization leave until August)",

  storyHeadline: "Accountability without control",
  storySubline:
    "7,793 employees. 400+ managers. Five systems that don't talk. And a review cycle that starts in September.",

  bundleName: "Planning PRO",
  bundleModules: "Core · Time Tracking · Time Off · Shifts · Performance · Trainings · Engagement",
  recruitmentTier: null as string | null,
  pricingJustification:
    "Phase one: Performance before September — prove value modularly, without replacing SAP, UKG, or Payspace.",

  custoColaboradorMes_USD: null as number | null,
  mensalFactorial_USD: null as number | null,
  implantacaoFactorial_USD: null as number | null,
  implantacaoNota: "Pricing confirmed during your product demo",
  onboardingHoras: null as number | null,
  onboardingDias: "30",

  vendedor: "Victor Gutierrez",
  cargoVendedor: "Expansion Manager · US · Factorial",
  emailVendedor: "victor.gutierrez@factorial.co",

  demoUrl: null as string | null,
  demoEmail: null as string | null,
  demoPassword: null as string | null,
  demoNote:
    "Live demo on Microsoft Teams — show Chido, site HR heads, and BPs how life looks when September isn't manual",

  payrollPartner: "Payspace (payroll) — Factorial syncs; does not process payroll",
  currentTools:
    "SAP SuccessFactors (partial) · AB Sugar (training delivery) · Qlik Sense · Payspace · UKG (time & attendance, testing)",

  closingVideoId: "9mUIcLa2te8",
} as const;
