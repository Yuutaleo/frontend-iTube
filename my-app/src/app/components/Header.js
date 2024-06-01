import React from 'react';

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>


      <div className={styles.sidebar}></div>


      <a href='#home' className={styles.removersub}><img className={styles.logo} src="/images/logo2.svg" alt="Logo Itube"/></a>
      <input type="text" placeholder="Pesquisar" className={styles.searchBar} />
      <a href='#upload' className={styles.removersub}><div className={styles.uploadButton}>Upload</div></a>
      <a href='#perfil' className={styles.removersub}><div className={styles.profileButton}>Perfil</div></a>
    </header>
  );
}

