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
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{step?.moduleLabel ?? "Factorial demo"}</DialogTitle>
          <DialogDescription>{step?.title}</DialogDescription>
        </DialogHeader>

        {step && step.demoVideos.length > 0 ? (
          <div className="flex max-h-[70vh] flex-col gap-5 overflow-y-auto">
            {step.demoVideos.map((video) => (
              <div key={video.url} className="flex flex-col gap-2">
                {step.demoVideos.length > 1 && (
                  <p className="text-sm font-semibold text-foreground">{video.label}</p>
                )}
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
                  <iframe
                    src={video.url}
                    title={`${step.moduleLabel} · ${video.label}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/40 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Video className="h-7 w-7" />
            </div>
            <p className="text-base font-semibold text-foreground">Demo video coming soon</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Add a demo link for {step?.moduleLabel ?? "this module"} in
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
