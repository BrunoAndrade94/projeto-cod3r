import { Event } from "@/core";

export interface DashboardEventProps {
  event: Event;
}

export default function DashboardEvent(props: DashboardEventProps) {
  return (
    <div>
      <div>DASH</div>
    </div>
  );
}
