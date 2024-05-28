'use client'
import React from 'react';
import styles from "../styles/VideoDetails.module.css";

export default function VideoDetails({ title, description }) {
  return (
    <div className={styles.videoDetails}>
      <h1 className={styles.videoTitle}>{title}</h1>
      <p className={styles.videoDescription}>{description}</p>
    </div>
  );
}
