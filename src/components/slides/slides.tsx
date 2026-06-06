import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  Calendar,
  Check,
  FileText,
  FolderOpen,
  Link2,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import factorialModulesImg from "@/assets/factorial/factorial-modules.jpg";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { DEFAULT_VALUES as d, PRICING_PLACEHOLDER } from "@/utils/constants";

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[28px] tracking-[0.2em] uppercase opacity-90 mb-6 font-bold">{children}</p>
);

const SlideTitle = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <h2
    className={`text-[64px] font-bold leading-[1.12] mb-8 max-w-[1300px] ${light ? "text-foreground" : ""}`}
  >
    {children}
  </h2>
);

const FactorialCard = ({
  icon,
  title,
  body,
  impact,
  light = false,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  impact?: string;
  light?: boolean;
}) => (
  <div
    className={`border-l-4 p-6 h-full ${
      light
        ? "border-primary bg-primary/[0.04] border border-l-4 border-foreground/10"
        : "border-primary/80 bg-white/5 border border-white/15"
    }`}
  >
    <div className="flex items-start gap-4 mb-3">
      <div
        className={`shrink-0 w-10 h-10 flex items-center justify-center ${
          light ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-[22px] font-bold leading-snug ${light ? "text-foreground" : ""}`}>{title}</h3>
    </div>
    <p className={`text-[18px] font-normal leading-relaxed ${light ? "text-foreground/75" : "opacity-75"}`}>
      {body}
    </p>
    {impact && (
      <p
        className={`text-[16px] font-bold mt-4 pt-3 border-t ${
          light ? "text-primary border-foreground/10" : "opacity-90 border-white/15"
        }`}
      >
        {impact}
      </p>
    )}
  </div>
);

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Welcome",
    summary: "Illovo Sugar · 7,793 employees · Malawi",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[80px] font-bold leading-[1.08] mb-6 max-w-[1400px]">{d.empresa}</h1>
        <p className="opacity-90 font-normal mb-8 text-[36px]">{d.tagline}</p>
        <blockquote className="border-l-4 border-white/40 pl-8 mb-8 max-w-[1100px]">
          <p className="text-[24px] font-normal italic opacity-90 leading-relaxed">&ldquo;{d.clientQuote}&rdquo;</p>
          <footer className="text-[18px] font-bold opacity-70 mt-3 not-italic">— {d.clientQuoteAttribution}</footer>
        </blockquote>
        <p className="opacity-75 font-normal text-[26px] max-w-[1200px]">
          {d.location}
          {d.totalColaboradores > 0 ? ` — ${d.totalColaboradores} employees` : ""} · {d.bundleName}
        </p>
        <div className="mt-14 flex items-center gap-5">
          <div className="w-11 h-11 border border-white/30 flex items-center justify-center bg-white/5">
            <span className="text-[20px] font-bold">F</span>
          </div>
          <div>
            <p className="opacity-90 text-[28px] font-bold">{d.vendedor}</p>
            <p className="text-[16px] font-normal opacity-75">{d.cargoVendedor}</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "challenges",
    title: "Your challenges",
    summary: "5 pains · from discovery call",
    icon: <AlertTriangle size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>What we heard</SectionLabel>
        <SlideTitle>Your challenges today</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          From your qualification call — 7,793 employees today, peaking to 9,000–10,000 across three Malawi sites.
        </p>
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              title: "Manual performance reviews",
              body: "Engaged Performance Management (EPM) runs on paper and spreadsheets — no system support today.",
              impact: "400+ managers · review cycle starts September",
            },
            {
              title: "Fragmented HR stack",
              body: "SAP SuccessFactors (partial), Qlik Sense, Payspace, and UKG for time & attendance — each for a different job.",
              impact: "Manual handoffs between systems",
            },
            {
              title: "Recruitment overload",
              body: "As Malawi's largest employer, a single job advert can draw 1,000+ applications.",
              impact: "HR business partners shortlist manually — weeks of work",
            },
            {
              title: "Multi-site operations",
              body: "Head office (~200), Dwangwa (~3,000), and Nchalo (~5,000–6,000) — seasonal peaks drive intense data capture.",
              impact: "Peak workforce up to 10,000 employees",
            },
            {
              title: "Multiple vendor costs",
              body: "Several service providers for HR systems — full SAP was not purchased; modules added over time. Malawi is now choosing its own solutions, not CENT-mandated ones.",
              impact: "Ideal is one system — Tamanda would champion a unified approach",
            },
            {
              title: "September urgency",
              body: "Performance reviews are manual today — the business should be able to run this in a system.",
              impact: d.decisionTimeline,
            },
          ].map((card, i) => (
            <FactorialCard
              key={card.title}
              icon={i === 5 ? <Users size={22} /> : <FolderOpen size={22} />}
              title={card.title}
              body={card.body}
              impact={card.impact}
            />
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "solution",
    title: "The solution",
    summary: "Bundle · modules · demo",
    icon: <Zap size={24} />,
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Factorial HR</SectionLabel>
        <SlideTitle light>Every challenge maps to a module</SlideTitle>
        <p className="text-[20px] font-normal text-foreground/75 mb-6">
          <strong className="font-bold text-foreground">{d.bundleName}</strong> — {d.bundleModules}
        </p>
        <div className="border border-foreground/15 bg-primary/[0.03] p-5 mb-6">
          <p className="text-[20px] font-bold text-foreground mb-1">{d.demoNote}</p>
        </div>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div className="grid grid-cols-2 gap-5">
            <FactorialCard
              light
              icon={<FolderOpen size={22} />}
              title="Performance 2.0"
              body="Structured review cycles, manager dashboards, and goal tracking — replaces manual EPM before September."
            />
            <FactorialCard
              light
              icon={<Check size={22} />}
              title="Trainings"
              body="Training delivered on AB Sugar, then recorded in SuccessFactors — Factorial links completion to performance and development goals."
            />
            <FactorialCard
              light
              icon={<Users size={22} />}
              title="Engagement"
              body="Pulse surveys and NPS linked to performance data — visibility across 400+ managers and three sites."
            />
            <FactorialCard
              light
              icon={<Calendar size={22} />}
              title="Core + Time Off"
              body="Employee self-service and time-off requests — modular entry that complements SAP and UKG, not a rip-and-replace."
            />
          </div>
          <ExpandableImage
            src={factorialModulesImg}
            alt="Factorial HR modules overview"
            title={d.bundleName}
            caption={`Proposed scope · ${d.bundleModules}`}
            className="border border-foreground/15 overflow-hidden bg-background h-[260px]"
            imgClassName="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    ),
  },

  {
    id: "investment",
    title: "Your proposal",
    summary: "Scope · pricing",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Your proposal</SectionLabel>
        <SlideTitle>Clear scope · pricing from discovery</SlideTitle>
        <p className="text-[22px] font-normal opacity-80 mb-8">
          <strong className="font-bold">{d.bundleName}</strong> — {d.bundleModules}
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">One-time implementation</p>
            <p className="text-[48px] font-bold leading-none mb-2">
              {d.implantacaoFactorial_USD != null ? `$${d.implantacaoFactorial_USD}` : PRICING_PLACEHOLDER}
            </p>
            <p className="text-[16px] font-normal opacity-60 border-t border-white/15 pt-4 mt-4">{d.implantacaoNota}</p>
          </div>
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">Monthly subscription</p>
            <p className="text-[48px] font-bold leading-none mb-2">
              {d.mensalFactorial_USD != null ? `$${d.mensalFactorial_USD}` : PRICING_PLACEHOLDER}
            </p>
            <p className="text-[20px] font-normal opacity-75 mb-2">
              / month{d.totalColaboradores > 0 ? ` · ${d.totalColaboradores} employees` : ""}
            </p>
            <p className="text-[16px] font-normal opacity-65 border-t border-white/15 pt-4 mt-4">{d.pricingJustification}</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "how-it-fits",
    title: "How it fits",
    summary: "Before vs after",
    icon: <Link2 size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>How it fits</SectionLabel>
        <SlideTitle>Your existing stack stays where it should</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          Modular approach — SAP, Payspace, and UKG stay in place where they already work. Factorial fills the gaps you named.
        </p>
        <div className="border border-white/20">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[18px] font-bold bg-white/5">
            <div className="px-6 py-4 border-b border-white/15 opacity-70">Criteria</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">Today</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">With Factorial</div>
            {[
              {
                c: "Performance management",
                s: "Manual EPM — paper and spreadsheets",
                f: "Structured cycles, goals, and manager dashboards",
              },
              {
                c: "Reporting & analytics",
                s: "Qlik Sense dashboards (integrated with SAP)",
                f: "Built-in reports + custom analytics on HR data",
              },
              {
                c: "Time & attendance",
                s: "UKG migration in testing (go-live next month)",
                f: "Complements UKG — no disruption to rollout",
              },
              {
                c: "Payroll",
                s: "Payspace processes payroll",
                f: "Sync employee data — Factorial does not process payroll",
              },
              {
                c: "Recruitment / ATS",
                s: "Manual shortlisting — 1,000+ apps per role",
                f: "Recruitment add-on available when talent team is ready",
              },
              {
                c: "Trainings",
                s: "AB Sugar (delivery) → SuccessFactors (records) + LinkedIn Learning",
                f: "Links training completion to performance — complements AB Sugar and SuccessFactors",
              },
            ].map((row, i, arr) => (
              <Fragment key={row.c}>
                <div
                  className={`px-6 py-4 flex items-center font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  {row.c}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 opacity-70 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <X size={16} className="shrink-0" /> {row.s}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <Check size={16} className="shrink-0 opacity-90" /> {row.f}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "next-steps",
    title: "Next steps",
    summary: "Demo · decision · go-live",
    icon: <Calendar size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Next steps</SectionLabel>
        <SlideTitle>Path to decision</SlideTitle>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Performance Management demo",
                body:
                  "Tamanda coordinates date via WhatsApp — invite Chido (performance), site HR heads (Leila, Moses), BPs, and training team. Use Microsoft Teams.",
              },
              {
                step: "2",
                title: "Stakeholder alignment",
                body:
                  "Bring in talent and site teams if interest sparks. Kumbo (HR Director) returns in August — align decision path before then.",
              },
              {
                step: "3",
                title: "Decide & implement",
                body: `Target alignment before September review cycle · go-live ${d.goLiveTarget}`,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 border-l-4 border-primary/80 bg-white/5 border border-white/15 p-6">
                <span className="text-[32px] font-bold opacity-50 shrink-0">{item.step}</span>
                <div>
                  <p className="text-[22px] font-bold mb-1">{item.title}</p>
                  <p className="text-[18px] font-normal opacity-75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-white/20 bg-white/5 p-8 flex flex-col justify-center">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-6">Summary</p>
            <div className="space-y-5">
              <div>
                <p className="text-[16px] font-normal opacity-65">Bundle</p>
                <p className="text-[28px] font-bold">{d.bundleName}</p>
              </div>
              <div className="border-t border-white/15 pt-5">
                <p className="text-[20px] font-bold">{d.vendedor}</p>
                <p className="text-[16px] font-normal opacity-75">{d.emailVendedor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "factorial-video",
    title: "Discover Factorial",
    summary: "Product overview",
    icon: <Video size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[100px] text-center">
        <SectionLabel>See it live</SectionLabel>
        <SlideTitle>Discover Factorial — built for teams like {d.empresa}</SlideTitle>
        <div className="w-[960px] h-[540px] mt-2">
          <iframe
            width="960"
            height="540"
            src={`https://www.youtube.com/embed/${d.closingVideoId}`}
            title="Discover Factorial HR Software (English)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
      </div>
    ),
  },
];
