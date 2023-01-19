import React from 'react';
import Button from '../../items/Button';
import style from './Title.module.scss';

const Title = () => (
  <div className={style.container}>
    <h1 className={style.first_title}>Front-End</h1>
    <p className={`paragrath16px ${style.first_description}`}>
      Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive
      bootcamps teach (and more).
    </p>
    <Button type="button" className="short_button title_button">Start my career change</Button>
    <h1 className={style.second_title}>Developer</h1>
    <h3 className={style.second_description}>Courses</h3>
  </div>
);

export default Title;
