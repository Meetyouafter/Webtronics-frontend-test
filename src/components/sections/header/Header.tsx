import React from 'react';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.container}>
    <img src="/images/logo.png" alt="logo" className={style.logo} />
    <div className={style.header_items}>
      <a href="/" className={`paragrath16px ${style.link}`}>About</a>
      <a href="/" className={`paragrath16px ${style.link}`}>Programs</a>
      <a href="/" className={`paragrath16px ${style.link}`}>Steps</a>
      <a href="/" className={`paragrath16px ${style.link}`}>Questions</a>
      <a href="/" className={`paragrath16px ${style.link}`}>Get in touch</a>
    </div>
  </header>
);

export default Header;
