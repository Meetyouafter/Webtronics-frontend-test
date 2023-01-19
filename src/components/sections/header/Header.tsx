import React from 'react';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.container}>
    <img src="/images/logo.png" alt="logo" />
    <div className={style.header_items}>
      <p className="paragrath16px">About</p>
      <p className="paragrath16px">Programs</p>
      <p className="paragrath16px">Steps</p>
      <p className="paragrath16px">Questions</p>
      <p className="paragrath16px">Get in touch</p>
    </div>
  </header>
);

export default Header;
