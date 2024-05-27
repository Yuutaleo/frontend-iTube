// src/components/VideoSection.js
'use client'
import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoDetails from './VideoDetails';

export default function VideoSection({ videoId, title, description }) {
  return (
    <div className="video-section">
      <VideoPlayer videoId={videoId} />
      <VideoDetails title={title} description={description} />
    </div>
  );
}
