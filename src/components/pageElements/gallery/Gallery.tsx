import React from 'react';
import style from './Gallery.module.scss';

const Gallery = () => (
  <section className={style.primary_container}>
    <h2 className={style.title}>Gallery</h2>
    <div className={style.container}>
      <p className={`paragrath16px ${style.first_description}`}>
        By the end of this course, you will be able to develop and publish your
        very own Google Chrome extension! In this course we will focus on coding
        exercises and projects.
      </p>
      <img
        src="/images/gallery/developer 1.png"
        alt="programmist"
        className="first_img"
      />
      <img
        src="/images/gallery/developer 3.png"
        alt="programmist"
        className={style.third_img}
      />
      <img
        src="/images/gallery/developer 4.png"
        alt="programmist"
        className={style.fourth_img}
      />
      <img
        src="/images/gallery/developer 2.png"
        alt="programmist"
        className={style.second_img}
      />
      <p className={`paragrath16px ${style.second_description}`}>
        If you would like to learn web development and get a job in the tech
        industry, you are going to LOVE this course! Learn HTML, CSS,
        JavaScript, Bootstrap and more with over 15 hours of HD video tutorials!
        This course was designed to be extremely beginner friendly. We will
        begin with the very basics of HTML and build a simple web page.
      </p>
    </div>
  </section>
);

export default Gallery;
