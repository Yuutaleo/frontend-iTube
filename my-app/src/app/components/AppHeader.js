// src/components/AppHeader.js
import React from 'react';
import logo from "../assets/logo.svg";

export default function AppHeader() {
  return (
    <header className="App-header">
      <img src={logo} alt="Itube Logo" className="youtube-logo" />
      <h1>Meu Aplicativo</h1>
    </header>
  );
}
