'use client'
import styles from "./page.module.css";
import VideoSection from './components/VideoSection';
import TextInput from './components/TextInput';
import React, { useState } from 'react';


export default function Home() {
  const videoId = 'xrK55xzXHeY'; // Substitua pelo ID do vídeo do YouTube
  const videoTitle = 'Top 5 Points from Xu xin!';
  const videoDescription = "5 de mar. de 2022  #XuXin 😛";
  const [inputText, setInputText] = useState('');
  const handleTextChange = (text) => {
    setInputText(text);
  };

  return (
    
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <TextInput onTextChange={handleTextChange} />
      </header>
      <div>
      <VideoSection videoId={videoId} title={videoTitle} description={videoDescription} />
      </div>
      <div>
        as
      </div>
    </div>
  );
}
