import React from "react";
import data from "../public/db.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [rightAnswer, setRightAnswer] = useState(null);
  const [lastPage, setLastPage] = useState(false);

  const checkingAnswer = (selectedAnswerIndex) => {
    setQuestionAnswered(true);
    setSelectedAnswer(selectedAnswerIndex);
    if (selectedAnswerIndex === data.allquestions[currQuestion].rightanswer) {
      setRightAnswer(true);
    } else {
      setRightAnswer(false);
    }
  };

  const nextQuestion = () => {
    if (currQuestion < data.allquestions.length - 1) {
      setCurrQuestion(currQuestion + 1);
      setQuestionAnswered(false);
      setSelectedAnswer(null);
      setRightAnswer(null);
    } else {
      setLastPage(true);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="practice-page">
      {lastPage && (
        <div className="final-page">
          <div className="question-page-header">
            <div className="general-title"> סיימתם את התירגול!</div>
            <div className="general-instruction last-page-text">
              אתם יכולים לחזור לתחילת הלומדה ע"י לחיצה על הכפתור
            </div>
            <button
              className="next-question-button next-question-text"
              onClick={() => {
                navigate("/");
              }}
            >
            חזרה לדף הבית
            </button>
          </div>
        </div>
      )}
      {!lastPage && (
        <>
          <div className="question-card">
            <button
              className="next-question-button next-question-text back-button"
              onClick={() => {
                navigate("/");
              }}
            >
            חזרה
            </button>
            <div className="question-page-header">
              <div className="question-number">
                {data.allquestions[currQuestion].questionnumber}
              </div>
              <div className="general-title">תרגול</div>
              <div className="general-instruction">
                {rightAnswer
                  ? "תשובה נכונה!"
                  : rightAnswer === false
                  ? "תשובה לא נכונה"
                  : "בחרו בתשובה הנכונה"}
              </div>
            </div>
          </div>

          <div className="content-box">
            <div className="question-text">
              {data.allquestions[currQuestion].questiontext}
            </div>

            <div className="answers-list">
              {data.allquestions[currQuestion].answers.map((answer, index) => (
                <div
                  key={index}
                  className={
                    selectedAnswer !== null
                      ? index === data.allquestions[currQuestion].rightanswer
                        ? "answer-item correct-answer"
                        : "answer-item wrong-answer"
                      : "answer-item"
                  }
                  onClick={() => !questionAnswered && checkingAnswer(index)}
                >
                  <div className="answer-text">{answer}</div>
                </div>
              ))}

              <button
                className="next-question-button next-question-text"
                style={{ visibility: questionAnswered ? "visible" : "hidden" }}
                onClick={nextQuestion}
              >
                שאלה הבאה
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Practice;
