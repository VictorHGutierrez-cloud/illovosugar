/**
 * Illovo Sugar — HR journey steps.
 * Narrative source: qualification call with Tamanda Chikopa (2026-06).
 * Each step pairs a Gemini-generated GIF with a before/after contrast and one
 * or more Factorial demo videos (Google Drive) shown in the "Watch demo" popup.
 */

export interface DemoVideo {
  label: string;
  /** Google Drive preview URL: https://drive.google.com/file/d/FILE_ID/preview */
  url: string;
}

export interface Screenshot {
  label: string;
  /** File name inside public/journey/ — resolved with BASE_URL at render time. */
  file: string;
}

export interface JourneyStep {
  id: string;
  /** 1-based label shown in the timeline. */
  index: number;
  title: string;
  character: string;
  /** File name inside public/journey/ — resolved with BASE_URL at render time. */
  image: string;
  moment: string;
  painToday: string;
  withFactorial: string;
  quote?: string;
  moduleLabel: string;
  /** Factorial demo videos shown in the popup (Google Drive embeds). */
  demoVideos: DemoVideo[];
  /** Optional product screenshots shown inline under the step content. */
  screenshots?: Screenshot[];
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "season-start",
    index: 1,
    title: "Season starts at head office",
    character: "HR Services team · head office",
    image: "step1.png",
    moment: "The sugar season begins — recruitment and data capture spike at once.",
    painToday:
      "32 people capturing data by hand across head office and two factory sites. September's review cycle is only three months out.",
    withFactorial:
      "A clear starting point to modernize HR for Malawi's largest employer — modular, with proof at every phase.",
    quote: "It's just now that we're getting the power. They're asking us to get our own solutions.",
    moduleLabel: "Factorial Core · trainings",
    demoVideos: [
      {
        label: "Automatic certificate generation",
        url: "https://drive.google.com/file/d/1RvLz_-zE1B_EJTKPd9J7pAfIY8XikAO4/preview",
      },
      {
        label: "Learning management (LMS)",
        url: "https://drive.google.com/file/d/19XbP-z_ypsCk0Cwhsd_6bpe63vj8TjnX/preview",
      },
    ],
  },
  {
    id: "manual-performance",
    index: 2,
    title: "Performance reviews on paper",
    character: "Site Manager · Nchalo",
    image: "step2.png",
    moment: "A manager runs the EPM cycle the only way available today — manually.",
    painToday:
      "Paper EPM across 400+ managers and three sites. Nobody can see where reviews actually sit.",
    withFactorial:
      "Performance 2.0 — structured cycles, goal tracking, and a manager dashboard. Submit a review in two clicks.",
    quote: "I don't think we're optimal. Chances are we don't know where those things are sitting.",
    moduleLabel: "Factorial Performance 2.0",
    demoVideos: [
      {
        label: "Peer reviews (AVD Peers)",
        url: "https://drive.google.com/file/d/1vXZCTd5HTwyh1bv0pxGev9QLKnWUVTU1/preview",
      },
      {
        label: "Performance review (AVD Factorial)",
        url: "https://drive.google.com/file/d/1ZBzAvQn8UtKPe_0s8M7c79LA-TZLX5pw/preview",
      },
    ],
    screenshots: [
      { label: "Action plan & competency assessment", file: "actionplan.png" },
    ],
  },
  {
    id: "fragmented-stack",
    index: 3,
    title: "Five systems that don't talk",
    character: "HR Services · three sites",
    image: "step3.png",
    moment: "Data moves between SAP, Qlik, Payspace, and UKG — one manual bridge at a time.",
    painToday:
      "SuccessFactors, Qlik Sense, Payspace, UKG — every handoff is manual, every report is rework.",
    withFactorial:
      "HR data flows where the gaps are. UKG and Payspace stay in place — Factorial fills the rest, including engagement.",
    moduleLabel: "Factorial engagement & surveys",
    demoVideos: [
      {
        label: "One-on-one meetings",
        url: "https://drive.google.com/file/d/10kuyd-q2bYtF_fs3oiPOtISHowjsYKA0/preview",
      },
      {
        label: "Surveys",
        url: "https://drive.google.com/file/d/1vZfFnxLLWCvU404bqsGTg1SwwF9hjS_c/preview",
      },
    ],
  },
  {
    id: "recruitment-scale",
    index: 4,
    title: "Recruitment at scale",
    character: "Talent team · business partners",
    image: "step4.png",
    moment: "Hiring season opens — a single advert can draw over a thousand applications.",
    painToday:
      "1,000+ applications per advert and no system yet. Shortlisting is still manual for the HR business partners.",
    withFactorial:
      "An ATS with AI matching — pipelines and shortlisting that fit the existing stack, no rip-and-replace, no repeat of 2022.",
    quote: "I wish we knew Factorial three, four months ago.",
    moduleLabel: "Factorial Recruitment / ATS",
    demoVideos: [
      {
        label: "ATS AI match",
        url: "https://drive.google.com/file/d/1dqqMsqVk8nQ6Cm5xXjWhTMjK9e2YXif6/preview",
      },
    ],
  },
  {
    id: "visibility-september",
    index: 5,
    title: "Visibility before September",
    character: "HR team · site managers",
    image: "step5.png",
    moment: "The September cycle arrives — this time with one source of truth.",
    painToday:
      "Reports scattered across tools. The real risk: reviews that may never get shortlisted at all.",
    withFactorial:
      "One view across 7,793 employees and three sites — 9-box talent grids and performance distribution, visible and on track.",
    quote: "Maybe they don't even shortlist at all. There's a risk there.",
    moduleLabel: "Factorial analytics & reports",
    demoVideos: [],
    screenshots: [
      { label: "9-box talent grid", file: "9box.png" },
      { label: "Performance score distribution", file: "analyticsdistribution.png" },
    ],
  },
];

export interface NextStep {
  id: string;
  index: number;
  image: string;
  label: string;
  title: string;
  description: string;
}

/** Closing call-to-action: what happens after the story. */
export const NEXT_STEPS: NextStep[] = [
  {
    id: "demo-teams",
    index: 1,
    image: "passoa.png",
    label: "This month",
    title: "Performance demo on Teams",
    description:
      "The HR team schedules a live Teams walkthrough with the performance lead, site HR heads, business partners, and training team — focused on performance before September.",
  },
  {
    id: "align-august",
    index: 2,
    image: "passob.png",
    label: "Before August",
    title: "Align the stakeholders",
    description:
      "Bring the teams together and agree on scope before the HR director returns from leave in August — a clear decision path, not an open question.",
  },
  {
    id: "decide-golive",
    index: 3,
    image: "passoc.png",
    label: "Before September",
    title: "Decide & go-live",
    description:
      "Confirm scope and pricing, then start modular — performance live across all three sites before the review cycle begins.",
  },
];

/** Bump when journey PNGs change — busts browser cache on GitHub Pages. */
const JOURNEY_ASSET_VERSION = "20260608";

/** Resolve a journey asset path against the Vite base URL (GitHub Pages safe). */
export function journeyAsset(fileName: string): string {
  return `${import.meta.env.BASE_URL}journey/${fileName}?v=${JOURNEY_ASSET_VERSION}`;
}
