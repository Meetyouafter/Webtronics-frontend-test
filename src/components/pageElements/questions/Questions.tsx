/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Questions.module.scss';
import questionsData from './questionsData.js';

interface QuestionProps {
  title: string,
  description: string,
}

const QuestionsRender: FC<QuestionProps> = ({ title, description }) => {
  const [isActiveQuestion, setIsActiveQuestion] = useState(false);

  const toggleQuestionStatus = () => setIsActiveQuestion(!isActiveQuestion);

  const element = !isActiveQuestion ? (
    <div className={`${style.box} ${style.close}`}>
      <h4>{title}</h4>
      <img
        src="/icons/minus.svg"
        className={style.icon}
        alt="show"
        onClick={toggleQuestionStatus}
        onKeyDown={toggleQuestionStatus}
      />
    </div>
  ) : (
    <div className={`${style.box} ${style.open}`}>
      <div className={style.title_box}>
        <h4>{title}</h4>
        <p className={`paragrath16px ${style.description}`}>{description}</p>
      </div>
      <img
        src="/icons/plus.svg"
        className={style.icon}
        alt="disable"
        onClick={toggleQuestionStatus}
        onKeyDown={toggleQuestionStatus}
      />
    </div>
  );

  return element;
};

const getQuestions = () => questionsData.map((question) => (
  <QuestionsRender
    key={uuidv4()}
    title={question.title}
    description={question.description}
  />
));

const Questions = () => (
  <section>
    <h2>Frequently Asked Questions</h2>
    <div className={style.wrapper}>
      <div className={style.symbol}>
        <p className={`paragrath16px ${style.help}`}>Do you have any kind of questions? We are here to help.</p>
        <img src="/images/question.png" alt="question" />
      </div>
      <div className={style.container}>{getQuestions()}</div>
    </div>
  </section>
);

export default Questions;
