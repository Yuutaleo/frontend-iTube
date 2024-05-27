// src/components/TextInput.js
"use client"
import React, { useState } from 'react';

export default function TextInput({ onTextChange }) {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        placeholder="Pesquisar"
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
}
