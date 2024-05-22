
'use client'
import React from 'react';

export default function VideoDetails({ title, description }) {
  return (
    <div className="video-details">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}