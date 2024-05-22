
'use client'

import React from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer({ videoId }) {
  const opts = {
    
    height: '400',
    width: '700',
    playerVars: {
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
