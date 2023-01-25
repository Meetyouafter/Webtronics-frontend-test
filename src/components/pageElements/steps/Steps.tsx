import React, { FC } from 'react';
import stepsData from './stepsData';
import style from './Steps.module.scss';

interface StepsProps {
  name: string,
  title: string,
  description: string,
  index: number
}
const Step: FC<StepsProps> = ({
  name, title, description, index,
}) => {
  const orientation = index % 2 === 0 ? style.wrapper_right : style.wrapper_left;
  const pointBox = index % 2 === 0 ? style.point_box_left : style.point_box_right;
  const arrowDirection = index % 2 === 0 ? 'leftArrow' : 'rightArrow';
  const leftArrow = index % 2 === 0
    ? <img src={`/icons/${arrowDirection}.svg`} alt="arrow" className={style.arrow} />
    : '';
  const rightArrow = index % 2 !== 0
    ? <img src={`/icons/${arrowDirection}.svg`} alt="arrow" className={style.arrow} />
    : '';

  return (
    <div className={orientation}>
      <div className={pointBox}>
        {leftArrow}
        <div className={style.point} />
        {rightArrow}
      </div>
      <div className={style.wrapper_empty}>
        <div className={style.box}>
          <h4>{name}</h4>
          <h3>{title}</h3>
          <p className="paragrath16px">{description}</p>
        </div>
      </div>
    </div>
  );
};

const getSteps = () => stepsData.map((step, index) => (
  <Step
    key={step.name}
    name={step.name}
    title={step.title}
    description={step.description}
    index={index}
  />
));

const Steps = () => (
  <section className={style.container}>
    <h2 className={style.title}>Steps</h2>
    <div className={style.progress_line} />
    {getSteps()}
  </section>
);

export default Steps;
