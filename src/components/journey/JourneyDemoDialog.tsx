import { Play, Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { JourneyStep } from "@/data/journeySteps";

interface JourneyDemoDialogProps {
  step: JourneyStep | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JourneyDemoDialog({ step, open, onOpenChange }: JourneyDemoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{step?.moduleLabel ?? "Factorial demo"}</DialogTitle>
          <DialogDescription>{step?.title}</DialogDescription>
        </DialogHeader>

        {step?.demoVideoUrl ? (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
            <iframe
              src={step.demoVideoUrl}
              title={`${step.moduleLabel} demo`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/40 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Video className="h-7 w-7" />
            </div>
            <p className="text-base font-semibold text-foreground">Demo video coming soon</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Record a 15–30s Loom of {step?.moduleLabel ?? "this module"} and paste the embed link in
              <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">journeySteps.ts</code>.
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/80">
              <Play className="h-3.5 w-3.5" /> Placeholder · Phase 2
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
