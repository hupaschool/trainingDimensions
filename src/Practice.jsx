import React from "react";
import data from "../public/db.json";
import { useState } from "react";

const Practice = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const checkingAnswer = (selectedAnswerIndex) => {
    setQuestionAnswered(true);
    if (selectedAnswerIndex === data.allquestions[currQuestion].rightanswer) {
      alert("תשובה נכונה!");
    }
  };
  return (
    <div className="practice-page">
      <div className="question-card">
        <div className="question-page-header">
          <div className="question-number">
            {data.allquestions[currQuestion].questionnumber}
          </div>
          <div className="general-title">תרגול</div>
          <div className="general-instruction">בחרו בתשובה הנכונה</div>
        </div>
      </div>
      <div className="content-box">
        <div className="question-text">
          {data.allquestions[currQuestion].questiontext}
        </div>
        <div className="answers-list">
          {data.allquestions[currQuestion].answers.map((answer, index) => (
            <div key={index} id={index} className="answer-item">
              <div
                className="answer-text"
                onClick={() => {
                  checkingAnswer(index);
                }}
              >
                {answer}
              </div>
            </div>
          ))}
          <button
          className="next-question-button next-question-text"
          onClick={() => {
            if (currQuestion < data.allquestions.length - 1) {
              setCurrQuestion(currQuestion + 1);
              setQuestionAnswered(false);
            }
          }}
        >
          שאלה הבאה
        </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
