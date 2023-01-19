import React, { FC } from 'react';
import mentorsData from './mentorsData';
import style from './Mentors.module.scss';

interface MentorProps {
  name: string,
  description: string,
  index: number,
}

const MentorRender: FC<MentorProps> = ({ name, description, index }) => (
  <div className={style.box}>
    <div className={style.avatar_wrapper}>
      <div className={style[`avatar${index + 1}`]} />
    </div>
    <h4>{name}</h4>
    <p className={`paragrath14px ${style.description}`}>
      {description}
    </p>
  </div>
);

const getMentors = mentorsData
  .map((mentor, index) => (
    <MentorRender
      key={mentor.name}
      name={mentor.name}
      description={mentor.description}
      index={index}
    />
  ));

const Mentors = () => (
  <section className={style.container}>
    {getMentors}
  </section>
);

export default Mentors;
