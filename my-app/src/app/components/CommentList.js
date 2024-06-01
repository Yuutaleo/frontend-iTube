import React from 'react';
import Comment from './Comment';
import styles from '../styles/CommentList.module.css';

export default function CommentList() {
  return (
    <div className={styles.commentList}>
      <h2>17 comentários</h2>
      <Comment />
      <Comment />
      <Comment />
      {/* Adicione mais <Comment /> conforme necessário */}
    </div>
  );
}
