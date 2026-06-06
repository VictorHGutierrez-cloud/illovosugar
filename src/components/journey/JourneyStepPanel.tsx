import { ArrowRight, PlayCircle, Sparkles, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { journeyAsset, type JourneyStep } from "@/data/journeySteps";

interface JourneyStepPanelProps {
  step: JourneyStep;
  onWatchDemo: () => void;
}

export function JourneyStepPanel({ step, onWatchDemo }: JourneyStepPanelProps) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-white">
        <img
          key={step.gif}
          src={journeyAsset(step.gif)}
          alt={step.title}
          className="h-[260px] w-full object-contain p-4 md:h-[340px]"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
          Step {step.index}
        </span>
      </div>

      <div className="flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{step.character}</p>
        <h2 className="mt-2 text-2xl font-bold leading-tight text-foreground md:text-3xl">{step.title}</h2>
        <p className="mt-2 text-base text-muted-foreground">{step.moment}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <BeforeAfterCard variant="today" text={step.painToday} />
          <BeforeAfterCard variant="factorial" text={step.withFactorial} />
        </div>

        {step.quote && (
          <blockquote className="mt-5 border-l-4 border-primary/50 pl-4 text-sm italic text-foreground/80">
            &ldquo;{step.quote}&rdquo;
            <footer className="mt-1 text-xs font-medium not-italic text-muted-foreground">
              — Tamanda Chikopa, qualification call
            </footer>
          </blockquote>
        )}

        <button
          type="button"
          onClick={onWatchDemo}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <PlayCircle className="h-5 w-5" />
          Watch demo · {step.moduleLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function BeforeAfterCard({ variant, text }: { variant: "today" | "factorial"; text: string }) {
  const isToday = variant === "today";
  return (
    <div
      className={cn(
        "rounded-xl border p-4",
        isToday ? "border-border bg-muted/50" : "border-primary/30 bg-primary/[0.06]",
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        {isToday ? (
          <TriangleAlert className="h-4 w-4 text-muted-foreground" />
        ) : (
          <Sparkles className="h-4 w-4 text-primary" />
        )}
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-wider",
            isToday ? "text-muted-foreground" : "text-primary",
          )}
        >
          {isToday ? "Today" : "With Factorial"}
        </span>
      </div>
      <p className={cn("text-sm leading-relaxed", isToday ? "text-foreground/70" : "text-foreground/90")}>
        {text}
      </p>
    </div>
  );
}
