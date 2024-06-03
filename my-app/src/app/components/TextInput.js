"use client"
import React, { useState } from 'react';
import styles from "../styles/TextInput.module.css";

export default function TextInput({ onTextChange }) {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <div className={styles.textInputContainer}>
      <input
        type="text"
        placeholder="Pesquisar"
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
}
