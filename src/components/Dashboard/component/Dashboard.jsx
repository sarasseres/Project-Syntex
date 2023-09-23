'use client';

import { createContext, useState } from 'react';
import { EventCard } from '@/components/Event/component/event.Card';

export const NoteDataContext = createContext();
export function Dashboard({ DashboardData }) {
  const [notes, setNotes] = useState(DashboardData);
  return (
    <div>
      <section className=" gap-6 ">
        {DashboardData.map(({ description, location, name, id }) => {
          return <EventCard key={id} id={id} desc={description} location={location} name={name} />;
        })}
      </section>
    </div>
  );
}
