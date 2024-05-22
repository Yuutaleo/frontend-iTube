import styles from "./page.module.css";
import React from 'react';
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className="Video">
        <header className="Video-p">
          <h2>Meu Video do Youtube</h2>
          <VideoPlayer videoId="xrK55xzXHeY" />
        </header>

      </div>
      
    </main>
  );
}
