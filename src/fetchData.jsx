import React from "react";
import data from "../public/db.json";

function FetchData() {
    return (
        <div className="popup-content">
            <div className="popup-text"> מתייחס ל-</div>
            {
                data.map((entry,i) => (
                    <div className="content-box">
                    <ul className="popup-info-list">
                        {
                            entry.text.map((item, j) => (
                                <li key={j} className="popup-info-item">{item}</li>
                            ))
                        }
                    </ul>
                    <div className="popup-text">שאלות שנשאל:</div>
                    <ul className="popup-questions-list">
                        {
                            entry.questions.map((question, k) => (
                                <li key={k} className="popup-question-item">{question}</li>
                            ))
                        }
                    </ul>
                    </div>
                ))}
        </div>
    );
}

export default FetchData;