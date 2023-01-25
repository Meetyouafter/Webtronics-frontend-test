import React, { FC } from 'react';
import technologiesData from './technologiesData';
import style from './Technologies.module.scss';

interface TechnologyProps {
  name: string,
  imageUrl: string,
}

const Technology: FC<TechnologyProps> = ({ name, imageUrl }) => (
  <div className={style.border_container}>
    <div className={style.empty_container}>
      <div className={style.technology}>
        <img src={imageUrl} alt={name} />
        <h4 className={style.tehnology_description}>{name}</h4>
      </div>
    </div>
  </div>
);

const getTechnologies = technologiesData.map((technology) => (
  <Technology
    key={technology.name}
    name={technology.name}
    imageUrl={technology.imageUrl}
  />
));

const Technologies = () => (
  <section className={style.container}>
    <h2 className={style.title}>Programming tehnologies</h2>
    <p className={`paragrath16px ${style.description}`}>
      By the end, you’ll have the portfolio and interview skills you need to start your new career.
    </p>
    <div className={style.technologies}>
      {getTechnologies}
    </div>
  </section>
);

export default Technologies;
