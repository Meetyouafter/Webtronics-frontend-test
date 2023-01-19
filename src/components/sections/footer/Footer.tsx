import React from 'react';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.container}>
    <div>
      <img src="/images/logo.png" alt="logo" />
      <p className="paragrath16px">
        Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
      </p>
    </div>

    <div>
      <p className={style.title}>Company</p>
      <p className="paragrath14px">About us</p>
      <p className="paragrath14px">Steps</p>
      <p className="paragrath14px">FAQs</p>
    </div>

    <div>
      <p className="paragrath14px">Review</p>
      <p className="paragrath14px">Gallery</p>
    </div>
    <div className={style.social}>
      <p className={`${style.title} ${style.social_title}`}>Social media</p>
      <div className={style.social_icons}>
        <img
          src="icons/facebook.svg"
          alt="facebook"
        />
        <img
          src="/icons/gitlub.svg"
          alt="gitlub"
        />
        <img
          src="/icons/twitter.svg"
          alt="twitter"
        />
        <img
          src="/icons/linkedin.svg"
          alt="linkedin"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
