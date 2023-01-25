import React, { useState, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Questions.module.scss';
import questionsData from './questionsData.js';

interface QuestionProps {
  title: string,
  description: string,
  id: number,
}

const Question: FC<QuestionProps> = ({ title, description, id }) => {
  const [isActiveQuestion, setIsActiveQuestion] = useState(false);
  const [isActiveFirstQuestion, setIsActiveFirstQuestion] = useState(true);

  const toggleQuestionStatus = () => setIsActiveQuestion(!isActiveQuestion);
  const toggleFirstQuestionStatus = () => setIsActiveFirstQuestion(!isActiveFirstQuestion);

  if (id === 1) {
    const element = isActiveQuestion ? (
      <div className={`${style.box} ${style.close}`}>
        <h4>{title}</h4>
        <img
          src="/icons/minus.svg"
          className={style.icon}
          alt="show"
          onClick={id === 1 ? toggleQuestionStatus : toggleFirstQuestionStatus}
          onKeyDown={id === 1 ? toggleQuestionStatus : toggleFirstQuestionStatus}
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
  }
  const element = !isActiveQuestion ? (
    <div className={`${style.box} ${style.close}`}>
      <h4>{title}</h4>
      <img
        src="/icons/minus.svg"
        className={style.icon}
        alt="show"
        onClick={toggleQuestionStatus}
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
      />
    </div>
  );
  return element;
};

const getQuestions = () => questionsData.map((question, index) => (
  index === 0 ? (
    <Question
      key={uuidv4()}
      title={question.title}
      description={question.description}
      id={question.id}
    />
  )
    : (
      <Question
        key={uuidv4()}
        title={question.title}
        description={question.description}
        id={question.id}
      />
    )
));

const Questions = () => (
  <section className={style.primary_container}>
    <h2 className={style.title}>Frequently Asked Questions</h2>
    <div className={style.wrapper}>
      <div className={style.symbol}>
        <p className={`paragrath16px ${style.help}`}>Do you have any kind of questions? We are here to help.</p>
        <img src="/images/question.png" alt="question" className={style.question_label} />
      </div>
      <div className={style.container}>{getQuestions()}</div>
    </div>
  </section>
);

export default Questions;
