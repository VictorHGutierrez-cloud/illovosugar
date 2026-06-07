import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  Calendar,
  Check,
  Clock,
  FileText,
  Link2,
  Shield,
  Target,
  TrendingUp,
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
  badge,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  impact?: string;
  light?: boolean;
  badge?: string;
}) => (
  <div
    className={`border-l-4 p-6 h-full relative ${
      light
        ? "border-primary bg-primary/[0.04] border border-l-4 border-foreground/10"
        : "border-primary/80 bg-white/5 border border-white/15"
    }`}
  >
    {badge && (
      <span
        className={`absolute top-4 right-4 text-[12px] font-bold uppercase tracking-wider px-2 py-1 ${
          light ? "bg-primary/10 text-primary" : "bg-white/10 text-white/90"
        }`}
      >
        {badge}
      </span>
    )}
    <div className="flex items-start gap-4 mb-3">
      <div
        className={`shrink-0 w-10 h-10 flex items-center justify-center ${
          light ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-[22px] font-bold leading-snug pr-16 ${light ? "text-foreground" : ""}`}>{title}</h3>
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

const ActCard = ({
  act,
  title,
  body,
  quote,
}: {
  act: string;
  title: string;
  body: string;
  quote?: string;
}) => (
  <div className="border border-white/20 bg-white/5 p-6 h-full flex flex-col">
    <p className="text-[14px] font-bold uppercase tracking-[0.25em] opacity-60 mb-3">{act}</p>
    <h3 className="text-[24px] font-bold mb-4 leading-snug">{title}</h3>
    <p className="text-[17px] font-normal opacity-75 leading-relaxed flex-1">{body}</p>
    {quote && (
      <blockquote className="mt-5 pt-4 border-t border-white/15 text-[16px] italic opacity-80 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
    )}
  </div>
);

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Your story",
    summary: "Illovo Sugar · accountability without control",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[80px] font-bold leading-[1.08] mb-4 max-w-[1400px]">{d.empresa}</h1>
        <p className="opacity-90 font-bold mb-2 text-[40px] max-w-[1200px]">{d.storyHeadline}</p>
        <p className="opacity-80 font-normal mb-8 text-[28px] max-w-[1200px]">{d.storySubline}</p>
        <blockquote className="border-l-4 border-white/40 pl-8 mb-8 max-w-[1100px]">
          <p className="text-[24px] font-normal italic opacity-90 leading-relaxed">&ldquo;{d.clientQuote}&rdquo;</p>
          <footer className="text-[18px] font-bold opacity-70 mt-3 not-italic">— {d.clientQuoteAttribution}</footer>
        </blockquote>
        <p className="opacity-75 font-normal text-[22px] max-w-[1200px]">{d.tagline}</p>
        <div className="mt-12 flex items-center gap-5">
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
    id: "three-acts",
    title: "Three acts",
    summary: "2022 promise · today's risk · Malawi's window",
    icon: <Clock size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>The story we heard</SectionLabel>
        <SlideTitle>Three acts — and you're in act three</SlideTitle>
        <div className="grid grid-cols-3 gap-6">
          <ActCard
            act="Act I · 2022"
            title="The promise that didn't land"
            body="SAP SuccessFactors was supposed to be everything — workforce planning, performance, recruitment. You bought what budget allowed. Performance stayed manual. The stack grew instead of unified."
            quote="When SAP was coming in, I thought: yeah, this is it. But we're just buying what we could."
          />
          <ActCard
            act="Act II · Today"
            title="The invisible risk"
            body="7,793 employees. 1,000+ applications per job advert. 400+ managers running EPM on paper. You hold the data — but you can't see where things sit. Season is here. The team is drowning in paperwork."
            quote="Maybe they don't even shortlist at all. There's a risk there."
          />
          <ActCard
            act="Act III · Now"
            title="Malawi's window"
            body="For the first time, Malawi chooses its own solutions — not CENT-mandated ones. Kumbo returns in August. September won't wait. This is the moment to prove value modularly, before the cycle hits."
            quote="It's just now that we're getting the power. They're asking us to get our own solutions."
          />
        </div>
      </div>
    ),
  },

  {
    id: "peak-pain",
    title: "Peak pain",
    summary: "Why change · why now · why you",
    icon: <AlertTriangle size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>What drives the decision</SectionLabel>
        <SlideTitle>This isn't about software — it's about control</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          The HR team owns the quality of data and process for Malawi's largest employer. These are the three
          forces that make change inevitable — and Factorial the right partner.
        </p>
        <div className="grid grid-cols-3 gap-5">
          <FactorialCard
            icon={<Shield size={22} />}
            title="Loss of control"
            body="With 400+ managers and manual EPM, you literally don't know where performance data sits. That's not a tech problem — it's an accountability gap."
            impact="Factorial gives visibility. Visibility is power."
          />
          <FactorialCard
            icon={<TrendingUp size={22} />}
            title="A window that closes"
            body="Malawi is decentralizing HR decisions for the first time — choosing its own HR tools. Modular proof before the September cycle, while the window is open."
            impact="Modular proof · before the September cycle"
          />
          <FactorialCard
            icon={<Clock size={22} />}
            title="September deadline"
            body="The performance cycle starts in three months. Manual EPM with 400+ managers across three sites isn't a plan — it's a countdown."
            impact={d.decisionTimeline}
          />
        </div>
        <p className="mt-8 text-[20px] font-normal opacity-70 max-w-[1000px] border-l-4 border-primary/60 pl-6">
          The goal isn't more features. It's a shared view for performance leads, site HR, and leadership — so the
          September cycle starts with everyone aligned.
        </p>
      </div>
    ),
  },

  {
    id: "modular-path",
    title: "Modular path",
    summary: "Phase 1 performance · Phase 2 ATS · Phase 3 expand",
    icon: <Zap size={24} />,
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Not another SAP</SectionLabel>
        <SlideTitle light>Fill the gaps — keep what already works</SlideTitle>
        <p className="text-[20px] font-normal text-foreground/75 mb-5 max-w-[1100px]">
          UKG stays. Payspace stays. SuccessFactors stays. Factorial enters where it hurts — modularly, with proof
          at each phase.
        </p>
        <div className="border border-foreground/15 bg-primary/[0.03] p-5 mb-6">
          <p className="text-[20px] font-bold text-foreground">{d.demoNote}</p>
        </div>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div className="grid grid-cols-1 gap-4">
            <FactorialCard
              light
              badge="Phase 1 · Urgent"
              icon={<Target size={22} />}
              title="Performance 2.0"
              body="Structured review cycles, manager dashboards, and goal tracking — replace manual EPM before September. 400+ managers, one system, full visibility."
              impact="Go-live target: before September review cycle"
            />
            <FactorialCard
              light
              badge="Phase 2 · High"
              icon={<Users size={22} />}
              title="Recruitment / ATS"
              body="1,000+ applications per advert — automatic shortlisting, pipelines, LinkedIn integration. You said you wished you'd known Factorial 3–4 months ago."
              impact="Safra hiring · Malawi's largest employer"
            />
            <FactorialCard
              light
              badge="Phase 3 · Expand"
              icon={<Check size={22} />}
              title="Trainings + Engagement"
              body="AB Sugar delivers training → SuccessFactors records it. Factorial links completion to performance. Pulse surveys across three sites."
              impact={`${d.bundleName} · ${d.bundleModules}`}
            />
          </div>
          <ExpandableImage
            src={factorialModulesImg}
            alt="Factorial HR modules overview"
            title={d.bundleName}
            caption="Modular entry · expand when each phase proves value"
            className="border border-foreground/15 overflow-hidden bg-background h-full min-h-[320px]"
            imgClassName="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    ),
  },

  {
    id: "how-it-fits",
    title: "How it fits",
    summary: "Your stack stays · gaps get filled",
    icon: <Link2 size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Respect what you invested in</SectionLabel>
        <SlideTitle>No rip-and-replace · no repeating 2022</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          SAP, Payspace, and UKG stay in place. Factorial fills the gaps identified in the qualification call —
          starting with performance, expanding when the team is ready.
        </p>
        <div className="border border-white/20">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[18px] font-bold bg-white/5">
            <div className="px-6 py-4 border-b border-white/15 opacity-70">Area</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">Today</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">With Factorial</div>
            {[
              {
                c: "Performance management",
                s: "Manual EPM — paper, spreadsheets, 400+ managers",
                f: "Phase 1 · Structured cycles before September",
              },
              {
                c: "Recruitment / ATS",
                s: "Manual shortlisting — 1,000+ apps per role",
                f: "Phase 2 · ATS when talent team is ready",
              },
              {
                c: "Trainings",
                s: "AB Sugar (delivery) → SuccessFactors (records) + LinkedIn",
                f: "Phase 3 · Links training to performance outcomes",
              },
              {
                c: "Time & attendance",
                s: "UKG migration in testing (go-live next month)",
                f: "UKG stays · Factorial complements, no disruption",
              },
              {
                c: "Payroll",
                s: "Payspace processes payroll",
                f: "Payspace stays · Factorial syncs employee data",
              },
              {
                c: "Reporting",
                s: "Qlik Sense dashboards (integrated with SAP)",
                f: "Built-in HR reports · Qlik can coexist",
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
    id: "path-forward",
    title: "Path forward",
    summary: "Demo · decision · investment",
    icon: <Calendar size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Your path forward</SectionLabel>
        <SlideTitle>Path forward · demo, scope, go-live</SlideTitle>
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-8 mt-2">
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Performance demo on Teams",
                body:
                  "A live Teams walkthrough with the performance lead, site HR heads, BPs, and training team. Show them: September doesn't have to be manual.",
              },
              {
                step: "2",
                title: "Build internal momentum",
                body:
                  "If recruitment sparks interest, bring the talent team into phase two. Align stakeholders before the HR director returns in August — a decision path, not an open question.",
              },
              {
                step: "3",
                title: "Decide & go-live",
                body: `Confirm pricing for ~${d.totalColaboradores.toLocaleString()} seats in demo · target ${d.goLiveTarget}`,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 border-l-4 border-primary/80 bg-white/5 border border-white/15 p-5"
              >
                <span className="text-[32px] font-bold opacity-50 shrink-0">{item.step}</span>
                <div>
                  <p className="text-[22px] font-bold mb-1">{item.title}</p>
                  <p className="text-[17px] font-normal opacity-75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="border border-white/20 bg-white/5 p-6">
              <p className="text-[16px] font-bold uppercase tracking-widest opacity-70 mb-3">One-time implementation</p>
              <p className="text-[42px] font-bold leading-none mb-2">
                {d.implantacaoFactorial_USD != null ? `$${d.implantacaoFactorial_USD}` : PRICING_PLACEHOLDER}
              </p>
              <p className="text-[15px] font-normal opacity-60">{d.implantacaoNota}</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <p className="text-[16px] font-bold uppercase tracking-widest opacity-70 mb-3">Monthly subscription</p>
              <p className="text-[42px] font-bold leading-none mb-2">
                {d.mensalFactorial_USD != null ? `$${d.mensalFactorial_USD}` : PRICING_PLACEHOLDER}
              </p>
              <p className="text-[18px] font-normal opacity-75">
                / month · {d.totalColaboradores.toLocaleString()} employees
              </p>
              <p className="text-[15px] font-normal opacity-65 mt-3 pt-3 border-t border-white/15">
                {d.pricingJustification}
              </p>
            </div>
            <div className="border border-primary/40 bg-primary/10 p-5">
              <p className="text-[16px] font-bold opacity-80 mb-1">{d.bundleName}</p>
              <p className="text-[15px] font-normal opacity-70">{d.vendedor} · {d.emailVendedor}</p>
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
        <p className="text-[22px] font-normal opacity-75 mb-6 max-w-[800px] -mt-4">
          September won't be manual again. This is what modern HR looks like — modular, proven, and ready for Malawi.
        </p>
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
