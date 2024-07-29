// Vertical Timeline
interface TimelineEvent {
  date?: string;
  event: string;
  side: "left" | "right";
  image?: string;
  description?: string;
}

interface VerticalTimelineProps {
  data: TimelineEvent[];
}
