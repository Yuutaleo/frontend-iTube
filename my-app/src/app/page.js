'use client'
import React, { useState } from 'react';
import Header from './components/Header';
import CommentList from './components/CommentList';
import Sidebar from './components/Sidebar';
import styles from './page.module.css';
import VideoSection from './components/VideoSection';

export default function App() {
  const videoId = 'AED6T5KjU-g'; 

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.videoSection}>
        <VideoSection videoId={videoId} />
          <CommentList />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
