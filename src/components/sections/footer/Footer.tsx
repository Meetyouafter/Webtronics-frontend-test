import React from 'react';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.container}>
    <div className={style.adress_container}>
      <img src="/images/logo.png" alt="logo" className={style.img} />
      <p className={`paragrath16px ${style.adress}`}>
        Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
      </p>
    </div>

    <div className={style.company_container}>
      <p className={`${style.title} ${style.company_title}`}>Company</p>
      <p className={`paragrath14px ${style.company}`}>About us</p>
      <p className={`paragrath14px ${style.company}`}>Steps</p>
      <p className={`paragrath14px ${style.company}`}>FAQs</p>
    </div>

    <div>
      <p className={`paragrath14px ${style.company} ${style.company_second}`}>Review</p>
      <p className={`paragrath14px ${style.company}`}>Gallery</p>
    </div>
    <div className={style.social}>
      <p className={`${style.title} ${style.social_title}`}>Social media</p>
      <div className={style.social_icons}>
        <img
          src="/icons/vector.svg"
          alt="twitter"
        />
        <img
          src="/icons/gitlub.svg"
          alt="gitlub"
        />
        <img
          src="icons/facebook.svg"
          alt="facebook"
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
