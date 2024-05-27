// src/components/VideoDetails.js
'use client'
import React from 'react';

export default function VideoDetails({ title, description }) {
  return (
    <div className="video-details">
      <h1 className="video-title">{title}</h1>
      <p className="video-description">{description}</p>
    </div>
  );
}
