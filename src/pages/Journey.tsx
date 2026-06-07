import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { JourneyTimeline, JourneyTimelineStrip } from "@/components/journey/JourneyTimeline";
import { JourneyStepPanel } from "@/components/journey/JourneyStepPanel";
import { JourneyDemoDialog } from "@/components/journey/JourneyDemoDialog";
import { JourneyNextSteps } from "@/components/journey/JourneyNextSteps";
import { JOURNEY_STEPS } from "@/data/journeySteps";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const Journey = () => {
  const [current, setCurrent] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);

  const step = JOURNEY_STEPS[current];
  const goTo = (i: number) => setCurrent(Math.max(0, Math.min(i, JOURNEY_STEPS.length - 1)));

  return (
    <div className="proposal-font min-h-[100dvh] bg-[hsl(347,15%,97%)] font-sans text-foreground">
      <header className="flex items-center justify-between border-b border-border bg-background px-4 py-3 md:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <Home size={16} />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <p className="text-sm font-semibold">{d.empresa} · HR Journey</p>
        <span className="text-sm tabular-nums text-muted-foreground">
          {current + 1} / {JOURNEY_STEPS.length}
        </span>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <div className="mb-6 md:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">A day in the life</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
            From manual chaos to September-ready
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Follow the HR year at Illovo — three sites, one September deadline — and see how each step looks with Factorial.
          </p>
        </div>

        <JourneyTimelineStrip steps={JOURNEY_STEPS} currentIndex={current} onSelect={goTo} />

        <div className="mt-4 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <JourneyTimeline steps={JOURNEY_STEPS} currentIndex={current} onSelect={goTo} />
          </aside>

          <main>
            <JourneyStepPanel step={step} onWatchDemo={() => setDemoOpen(true)} />

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                className="inline-flex items-center gap-1 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/40 disabled:opacity-30"
              >
                <ChevronLeft size={18} />
                Previous
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                disabled={current === JOURNEY_STEPS.length - 1}
                className="inline-flex items-center gap-1 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-30"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </main>
        </div>

        <JourneyNextSteps />
      </div>

      <JourneyDemoDialog step={step} open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default Journey;
