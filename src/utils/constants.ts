/**
 * Illovo Sugar — client proposal constants.
 * Source: transcricao/reuniao.txt (qualification call, 2026-06).
 */

export const PRICING_PLACEHOLDER = "[A DEFINIR NA DEMO]" as const;

export const DEFAULT_VALUES = {
  empresa: "Illovo Sugar",
  legalName: "Illovo Sugar Malawi",
  tagline: "Modular HR that fits your stack — starting with performance before September",
  location: "Malawi · 3 sites · sugar operations",
  headquarters: "Malawi head office (~200) · Dwangwa & Nchalo factory sites",

  totalColaboradores: 7793,
  remoteRegions: "3 sites across Malawi — head office, Dwangwa (~3,000), Nchalo (~5,000–6,000)",
  decisionTimeline: "Performance cycle starts September 2026",
  goLiveTarget: "TBD — align before September review cycle",
  firstHrSoftware: false,

  clientQuote:
    "Having one system would be ideal — but we're paying quite a number of service providers. Performance management is still manual, and with 400 plus managers it becomes hectic.",
  clientQuoteAttribution: "Tamanda Chikopa — HR Services and Rewards Specialist, Illovo Sugar",
  contactRole: "HR Services and Rewards Specialist",
  decisionMaker: "Kumbo — HR Director (on reorganization leave until August)",

  bundleName: "Planning PRO",
  bundleModules: "Core · Time Tracking · Time Off · Shifts · Performance · Trainings · Engagement",
  recruitmentTier: null as string | null,
  pricingJustification:
    "Planning PRO maps to your agreed demo focus — performance management, trainings, and engagement — without replacing SAP, UKG, or Payspace in phase one.",

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
  demoNote: "Live demo focused on Performance Management — pricing and scope confirmed in your product demo",

  payrollPartner: "Payspace (payroll) — Factorial syncs; does not process payroll",
  currentTools: "SAP SuccessFactors (partial) · Qlik Sense · Payspace · UKG (time & attendance, testing)",

  closingVideoId: "9mUIcLa2te8",
} as const;
