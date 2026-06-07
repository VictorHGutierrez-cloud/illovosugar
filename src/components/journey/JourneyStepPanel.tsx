import { ArrowRight, PlayCircle, Sparkles, TriangleAlert } from "lucide-react";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { cn } from "@/lib/utils";
import { journeyAsset, type JourneyStep } from "@/data/journeySteps";

interface JourneyStepPanelProps {
  step: JourneyStep;
  onWatchDemo: () => void;
}

export function JourneyStepPanel({ step, onWatchDemo }: JourneyStepPanelProps) {
  const screenshotCount = step.screenshots?.length ?? 0;
  const singleScreenshot = screenshotCount === 1;

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-sm md:min-h-[480px]">
        <ExpandableImage
          key={step.image}
          src={journeyAsset(step.image)}
          alt={step.title}
          title={step.title}
          className="h-full w-full"
          imgClassName="h-full w-full object-contain p-4 md:p-8"
        />
        <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-primary px-3.5 py-1.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
          Step {step.index}
        </span>
      </div>

      <div className="flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{step.character}</p>
        <h2 className="mt-2 text-3xl font-bold leading-tight text-foreground md:text-4xl">{step.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{step.moment}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <BeforeAfterCard variant="today" text={step.painToday} />
          <BeforeAfterCard variant="factorial" text={step.withFactorial} />
        </div>

        {step.quote && (
          <blockquote className="mt-6 border-l-4 border-primary/50 pl-4 text-base italic text-foreground/80">
            &ldquo;{step.quote}&rdquo;
            <footer className="mt-1 text-sm font-medium not-italic text-muted-foreground">
              — Illovo HR team, qualification call
            </footer>
          </blockquote>
        )}

        {step.demoVideos.length > 0 && (
          <button
            type="button"
            onClick={onWatchDemo}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <PlayCircle className="h-5 w-5" />
            Watch demo · {step.moduleLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}

        {step.screenshots && step.screenshots.length > 0 && (
          <div
            className={cn(
              "mt-8 grid gap-5",
              singleScreenshot ? "grid-cols-1" : "sm:grid-cols-2",
            )}
          >
            {step.screenshots.map((shot) => (
              <figure key={shot.file} className="flex flex-col gap-2">
                <div
                  className={cn(
                    "overflow-hidden rounded-xl border border-border bg-muted/30 shadow-sm",
                    singleScreenshot ? "aspect-[16/9] min-h-[220px]" : "aspect-[4/3] min-h-[200px]",
                  )}
                >
                  <ExpandableImage
                    src={journeyAsset(shot.file)}
                    alt={shot.label}
                    title={shot.label}
                    className="h-full w-full"
                    imgClassName="h-full w-full object-contain p-2"
                  />
                </div>
                <figcaption className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BeforeAfterCard({ variant, text }: { variant: "today" | "factorial"; text: string }) {
  const isToday = variant === "today";
  return (
    <div
      className={cn(
        "rounded-xl border p-5",
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
      <p className={cn("text-[15px] leading-relaxed", isToday ? "text-foreground/70" : "text-foreground/90")}>
        {text}
      </p>
    </div>
  );
}
