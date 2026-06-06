import { ArrowRight } from "lucide-react";
import { journeyAsset, NEXT_STEPS } from "@/data/journeySteps";

export function JourneyNextSteps() {
  return (
    <section className="mt-14 border-t border-border pt-10">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The path forward</p>
        <h2 className="mt-2 text-2xl font-bold leading-tight md:text-3xl">From story to decision</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Three concrete next steps — from the first demo to go-live before September.
        </p>
      </div>

      <ol className="grid gap-5 md:grid-cols-3">
        {NEXT_STEPS.map((step, i) => (
          <li key={step.id} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background">
            <div className="relative aspect-video overflow-hidden bg-white">
              <img
                src={journeyAsset(step.image)}
                alt={step.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                {step.label}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {step.index}
                </span>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              {i < NEXT_STEPS.length - 1 && (
                <ArrowRight className="mt-4 hidden h-5 w-5 text-primary/40 md:block" aria-hidden />
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
