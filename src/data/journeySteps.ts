/**
 * Illovo Sugar — HR journey steps.
 * Narrative source: qualification call with Tamanda Chikopa (2026-06).
 * Each step pairs a Gemini-generated GIF with a before/after contrast and a
 * placeholder slot for a Factorial demo video (Loom) to be recorded later.
 */

export interface JourneyStep {
  id: string;
  /** 1-based label shown in the timeline. */
  index: number;
  title: string;
  character: string;
  /** File name inside public/journey/ — resolved with BASE_URL at render time. */
  gif: string;
  moment: string;
  painToday: string;
  withFactorial: string;
  quote?: string;
  moduleLabel: string;
  /** Loom / YouTube embed URL — null until recorded (Phase 2). */
  demoVideoUrl: string | null;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "season-start",
    index: 1,
    title: "Season starts at head office",
    character: "Tamanda · HR Services & Rewards",
    gif: "at-the-office.gif",
    moment: "The sugar season begins — recruitment and data capture spike at once.",
    painToday:
      "32 people capturing data by hand. Kumbo is away until August. September's review cycle is only three months out.",
    withFactorial:
      "A clear starting point to modernize HR for Malawi's largest employer — modular, with proof at every phase.",
    quote: "It's just now that we're getting the power. They're asking us to get our own solutions.",
    moduleLabel: "Factorial Core · onboarding",
    demoVideoUrl: null,
  },
  {
    id: "manual-performance",
    index: 2,
    title: "Performance reviews on paper",
    character: "Site Manager · Nchalo",
    gif: "research-paper.gif",
    moment: "A manager runs the EPM cycle the only way available today — manually.",
    painToday:
      "Paper EPM across 400+ managers and three sites. Nobody can see where reviews actually sit.",
    withFactorial:
      "Performance 2.0 — structured cycles, goal tracking, and a manager dashboard. Submit a review in two clicks.",
    quote: "I don't think we're optimal. Chances are we don't know where those things are sitting.",
    moduleLabel: "Factorial Performance 2.0",
    demoVideoUrl: null,
  },
  {
    id: "fragmented-stack",
    index: 3,
    title: "Five systems that don't talk",
    character: "Tamanda · HR Services team",
    gif: "data-extraction.gif",
    moment: "Data moves between SAP, Qlik, Payspace, and UKG — one manual bridge at a time.",
    painToday:
      "SuccessFactors, Qlik Sense, Payspace, UKG — every handoff is manual, every report is rework.",
    withFactorial:
      "HR data flows where the gaps are. UKG and Payspace stay in place — Factorial fills the rest.",
    moduleLabel: "Factorial integrations",
    demoVideoUrl: null,
  },
  {
    id: "internal-buyin",
    index: 4,
    title: "Building the case internally",
    character: "Tamanda + stakeholders",
    gif: "business-deal.gif",
    moment: "Tamanda gathers the people who decide — and the arguments to convince them.",
    painToday:
      "1,000+ applications per advert and no system yet. Buy-in from Chido, Leila, and Moses is still forming.",
    withFactorial:
      "A ready case to bring Chido, Leila, Moses — and Kumbo in August. No rip-and-replace, no repeat of 2022.",
    quote: "I wish we knew Factorial three, four months ago.",
    moduleLabel: "Factorial Recruitment / ATS",
    demoVideoUrl: null,
  },
  {
    id: "visibility-september",
    index: 5,
    title: "Visibility before September",
    character: "Tamanda + Site Manager",
    gif: "investment-data.gif",
    moment: "The September cycle arrives — this time with one source of truth.",
    painToday:
      "Reports scattered across tools. The real risk: reviews that may never get shortlisted at all.",
    withFactorial:
      "One view across 7,793 employees and three sites. September readiness, visible and on track.",
    quote: "Maybe they don't even shortlist at all. There's a risk there.",
    moduleLabel: "Factorial analytics & reports",
    demoVideoUrl: null,
  },
];

/** Resolve a journey GIF path against the Vite base URL (GitHub Pages safe). */
export function journeyAsset(fileName: string): string {
  return `${import.meta.env.BASE_URL}journey/${fileName}`;
}
