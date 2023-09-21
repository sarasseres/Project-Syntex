'use client';

import React from 'react';

export const EventCard = () => {
  return (
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/event.jpg" alt="Album"/></figure>
  <div className="card-body w-full">
    <h2 className="card-title">New events!</h2>
    <p>Click the button to register.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Register</button>
    </div>
  </div>
</div>
  );
};
