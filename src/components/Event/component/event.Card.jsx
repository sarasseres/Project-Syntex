'use client';

import React from 'react';
import Image from 'next/image';

export const EventCard = ({ desc, location, name }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image src="/event.jpg" width={200} height={200} alt="event-image"></Image>
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <p>{location}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  );
};
