import { EventCard } from './event.Card';

export const Event = () => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </main>
  );
};
