import React, { FC } from 'react';
import technologiesData from './technologiesData';
import style from './Technologies.module.scss';

interface TechnologyProps {
  name: string,
  imageUrl: string,
}

const TechnologyRender: FC<TechnologyProps> = ({ name, imageUrl }) => (
  <div className={style.technology}>
    <img src={imageUrl} alt={name} />
    <h4>{name}</h4>
  </div>
);

const getTechnologies = technologiesData.map((technology) => (
  <TechnologyRender
    key={technology.name}
    name={technology.name}
    imageUrl={technology.imageUrl}
  />
));

const Technologies = () => (
  <section className={style.container}>
    {getTechnologies}
  </section>
);

export default Technologies;
