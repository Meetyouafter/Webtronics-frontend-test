import React, { FC } from 'react';
import mentorsData from './mentorsData';
import style from './Mentors.module.scss';

interface MentorProps {
  name: string,
  description: string,
  index: number,
}

const Mentor: FC<MentorProps> = ({ name, description, index }) => {
  const paddingTop = index % 2 === 0 ? 'padding_box' : 'box';

  return (
    <div className={style[paddingTop]}>
      <div className={style.avatar_wrapper}>
        <div className={style[`avatar${index + 1}`]} />
      </div>
      <h4>{name}</h4>
      <p className={`paragrath14px ${style.description}`}>
        {description}
      </p>
    </div>
  );
};

const getMentors = mentorsData
  .map((mentor, index) => (
    <Mentor
      key={mentor.name}
      name={mentor.name}
      description={mentor.description}
      index={index}
    />
  ));

const Mentors = () => (
  <section className={style.container}>
    <div className={style.avatars}>
      <h3>Mentors</h3>
      <img src="/icons/line.svg" alt="line" />
      <div className={style.mentors}>
        {getMentors}
      </div>
    </div>
    <p className={`paragrath16px ${style.mentor_description}`}>
      Front-end engineers work closely with designers to make websites beautiful, functional,
      and fast. This Career Path will teach you not only the necessary languages and
      technologies, but how to think like a front-end engineer, too.
    </p>
  </section>
);

export default Mentors;
