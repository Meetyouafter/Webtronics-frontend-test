import React, { useState } from 'react';
import './slider.scss';
import sliderData from './sliderData.js';

const SliderRender = ({ title, description }) => {
  const [isActiveQuestion, setIsActiveQuestion] = useState(false);

  const toggleQuestionStatus = () => setIsActiveQuestion(!isActiveQuestion);

  const element = !isActiveQuestion ? (
    <div className="questions_box question_close">
      <h4>{title}</h4>
    </div>
  ) : (
    <div className="questions_box question_open">
      <div className="title_box">
        <h4>{title}</h4>
        <p className="paragrath16px question_description">{description}</p>
      </div>
    </div>
  );

  return element;
};

const getSliders = () => sliderData.map((slide) => slide = 28);

const Slider = () => (
  <section>
    <h2>Courators</h2>
    <div className="">
      <div className="">
        <p className="paragrath16px ">Do you have any kind of questions? We are here to help.</p>
      </div>
      <div className="questions_container">{getSliders()}</div>
      ;
    </div>
  </section>
);

export default Slider;
