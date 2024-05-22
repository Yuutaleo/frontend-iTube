import './page.module.css';
import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import VideoDetails from './components/VideoDetails';

export default function Home() {
  const videoId = 'xrK55xzXHeY'; // Substitua pelo ID do vídeo do YouTube
  const videoTitle = 'Top 5 Points from Xu xin!';
  const videoDescription = "102.596 visualizações  5 de mar. de 2022  #XuXin #WTT #TableTennis Xu Xin cloudwalked his way to these points 😛☁️#WTTSingaporeSmash #WTTGrandSmash #AGrandNewLegacyBegins #WTT #TableTennis #XuXin Download the new WTT app and follow us on social media for a full 360 update on all things WTT!";

  return (
    <div className="App">
      <header className="App-header">
        <div className="video-container">
          <VideoPlayer videoId={videoId} />
          <VideoDetails title={videoTitle} description={videoDescription} />
        </div>
      </header>
    </div>
  );
}
