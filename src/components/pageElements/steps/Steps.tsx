import React, { FC } from 'react';
import stepsData from './stepsData';
import style from './Steps.module.scss';

interface StepsProps {
  name: string,
  title: string,
  description: string,
  index: number
}
const StepsRender: FC<StepsProps> = ({
  name, title, description, index,
}) => {
  const orientation = index % 2 === 0 ? style.wrapper_right : style.wrapper_left;

  return (
    <section className={orientation}>
      <div className={style.point} />
      <div className={style.arrow} />
      <div className={style.line} />
      <div className={style.wrapper_empty}>
        <div className={style.box}>
          <h4>{name}</h4>
          <h3>{title}</h3>
          <p className="paragrath16px">{description}</p>
        </div>
      </div>
    </section>
  );
};

const getSteps = () => stepsData.map((step, index) => (
  <StepsRender
    key={step.name}
    name={step.name}
    title={step.title}
    description={step.description}
    index={index}
  />
));

const Steps = () => (
  <div className={style.container}>
    <div className={style.progress_line} />
    {getSteps()}
  </div>
);

export default Steps;
