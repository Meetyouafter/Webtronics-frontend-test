/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import reviewData from './reviewData';
import style from './Review.module.scss';

type ReviewersType = typeof reviewData

const Review = () => {
  const [reviewers, setReviewers] = useState<ReviewersType>(reviewData);
  const [currentSlide, setcurrentSlide] = useState(1);

  function nextReviewer() {
    const list = [...reviewers];
    list.push(list.shift()!);
    setReviewers([...list]);
    setcurrentSlide((currentSlide + 1) > 3 ? 1 : currentSlide + 1);
  }
  function prevReviewer() {
    const list = [...reviewers];
    list.unshift(list.pop()!);
    setReviewers([...list]);
    setcurrentSlide((currentSlide - 1) < 1 ? 3 : currentSlide - 1);
  }

  return (
    <section id="review" className={style.wrapper}>
      <h2 className={style.title}>Review</h2>
      <div className={style.content}>
        <div className={style.textSide}>
          <span>{reviewers[0].title}</span>
          <p className="paragrath16px">{reviewers[0].description}</p>
        </div>
        <div className={style.slidesWrap}>
          <div className={style.buttons}>
            <p className={style.firstNumber}>
              {currentSlide}
              /
              <span className={style.secondNumber}>{reviewers.length}</span>
            </p>
            <div className={style.buttonsWrap}>
              <div className={style.buttonBg}>
                <button onClick={prevReviewer} type="button">&lt;</button>
              </div>
              <div className={style.buttonBg}>
                <button onClick={nextReviewer} type="button">&gt;</button>
              </div>
            </div>
          </div>
          <div className={style.slides}>
            {reviewers.map(({ id, title, photo }, index) => (
              <div key={id} className={style.slideBg}>
                {index === 0 ? (
                  <img width={400} height={425} src={photo} alt={title} />
                ) : (
                  <img width={185} height={425} src={photo} alt={title} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
