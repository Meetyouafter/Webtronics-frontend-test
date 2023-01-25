import React from 'react';
import Mentors from '../../pageElements/mentors/Mentors';
import Technologies from '../../pageElements/technology/Technologies';
import Steps from '../../pageElements/steps/Steps';
import Questions from '../../pageElements/questions/Questions';
import Gallery from '../../pageElements/gallery/Gallery';
import Contact from '../../pageElements/contact/ContactUs';
import style from './AboutUs.module.scss';
import Review from '../../pageElements/review/Review';

const AboutUs = () => (
  <section className={style.container}>
    <h2 className={style.title}>About Us</h2>
    <Mentors />
    <Technologies />
    <Steps />
    <Questions />
    <Review />
    <Gallery />
    <Contact />
  </section>
);

export default AboutUs;
