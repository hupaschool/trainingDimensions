import lowerBlob from "./assets/lowerBlob.svg";
import higherBlob from "./assets/higherBlob.svg";
import strippedCircle from "./assets/strippedCircle.svg";
import plusSign from "./assets/plusSign.svg";
import schoolLogo from "./assets/schoolLogo.svg";
import bigFive from "./assets/bigFive.svg";
import arrowDown from "./assets/arrowDown.svg";
import pupilsDimension from "./assets/pupilsDimension1.svg";
import courseDimension from "./assets/courseDimension.svg";
import higherDimension from "./assets/higherDimension.svg";
import physicalDimension from "./assets/physicalDimension.svg";
import hierarchyDimension from "./assets/heirarchyDimension.svg";
import pupilsGlasses from "./assets/pupilsGlasses.svg";
import higherGlasses from "./assets/higherGlasses.svg";
import courseGlasses from "./assets/courseGlasses.svg";
import physicalGlasses from "./assets/physicalGlasses.svg";
import hierarchyGlasses from "./assets/hierarchyGlasses.svg";
import React, { useState } from "react";
import data from "../public/db.json";

const MainPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currTopic, setCurrTopic] = useState("");
  const handlePopup = (popupid) => {
    setPopupVisible(true);
    setCurrTopic(popupid);
  };

  return (
    <div className="all-pages">
      <div className="first-page">
        <img src={schoolLogo} className="school-logo" alt="school logo" />
        <div className="first-page-content">
          <img src={bigFive} className="big-five" alt="big five" />
          <div className="first-page-text" id="lomdat">
            לומדת
          </div>
          <div className="first-page-text" id="memadei">
            ממדי
          </div>
          <div className="first-page-text" id="hadracha">
            ההדרכה
          </div>
          <img src={arrowDown} className="arrow-down" alt="arrow down" />
        </div>
      </div>
      <div className="second-page">
        <div className="second-page-title">מבוא</div>
        <div className="sub-title">מהם ממדי ההדרכה?</div>
        <div className="second-page-text">
          הצגה, הערכה ותחקור של קורס ייעשו בראי מימדי ההדרכה. <br></br>
          בחייל האוויר קיימים חמישה ממדים<br></br>
          שמאפיינים את כלל הצירים המרכזיים<br></br>
          המשפיעים על איכות וטיב ההכשרה.<br></br>
          הממדים הם:<br></br>
        </div>
        <div className="all-training-dimensions">
          <img
            src={pupilsDimension}
            className="training-dimension"
            alt="pupils dimension"
          />
          <img
            src={courseDimension}
            className="training-dimension"
            alt="course dimension"
          />
          <img
            src={higherDimension}
            className="training-dimension"
            alt="higher dimension"
          />
          <img
            src={physicalDimension}
            className="training-dimension"
            alt="physical dimension"
          />
          <img
            src={hierarchyDimension}
            className="training-dimension"
            alt="heirarchy dimension"
          />
        </div>
        <div className="second-page-text">
          ממדי ההדרכה הם כלי מתודולוגי<br></br>
          לאבחון, פיתוח, ניהול והערכת הדרכה<br></br>
          בצה’’ל.
        </div>
        <img
          src={arrowDown}
          className="arrow-down second-arrow"
          alt="arrow down"
        />
      </div>
      <div className="third-page">
        <div className="blob-design">
          <img
            src={lowerBlob}
            className={`blob lower-blob ${currTopic}`}
            id="lower-blob"
            alt="lower blob"
          />
          <img
            src={higherBlob}
            className={`blob higher-blob ${currTopic}`}
            id="higher-blob"
            alt="higher blob"
          />
          <img
            src={strippedCircle}
            className={`stripped-circle ${currTopic}`}
            id="stripped-circle"
            alt="stripped circle"
          />
          <img
            src={plusSign}
            id="plus-sign"
            alt="plus sign"
            className={`plus-sign ${currTopic}`}
          />
        </div>
        <div className="third-page-content">
          {popupVisible && (
            <div className="popup-page">
              <div className="popup-page-title">
                {currTopic == "pupils-glasses"
                  ? "חניכים"
                  : currTopic == "higher-glasses"
                  ? "סגל"
                  : currTopic == "course-glasses"
                  ? "תוכנית הכשרה"
                  : currTopic == "physical-glasses"
                  ? "סביבה פיזית"
                  : currTopic == "hierarchy-glasses"
                  ? "סביבה ארגונית"
                  : ""}
              </div>
              <div className="popup-content">
                <div className="popup-text popup-subtitles"> מתייחס ל- </div>
                <ul className="topic-content-list">
                  {data[currTopic].text.map((item, index) => (
                    <li key={index} className="popup-text topic-content-item">
                        {item}
                    </li>
                  ))}
                </ul>
                <div className="popup-text popup-subtitles"> שאלות שנשאל: </div>
                <ul className="topic-questions-list">
                    {data[currTopic].questions.map((item, index) => (
                      <li key={index} className="popup-text topic-questions-item">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}

          <div className="third-page-header">
            <div className="third-page-title" style={{ display: popupVisible ? "none" : "block" }}>
              5 ממדי
            </div>
            <div
              className="third-page-title"
              style={{ display: popupVisible ? "none" : "block" }}
            >
              ההדרכה
            </div>
            <div
              className="third-page-text"
              style={{ display: popupVisible ? "none" : "block" }}
            >
              לחצו על כל ממד הדרכה לפירוט
            </div>
          </div>
          <div className="all-glasses" style={{ display: popupVisible ? "none" : "flex" }}>
            <div
              className="glasses"
              id="pupils-glasses"
              onClick={() => {
                handlePopup("pupils-glasses");
              }}
            >
              <img src={pupilsGlasses} alt="pupils glasses" />
              <div className="glasses-name">חניכים</div>
            </div>
            <div
              className="glasses"
              id="higher-glasses"
              onClick={() => {
                handlePopup("higher-glasses");
              }}
            >
              <img src={higherGlasses} alt="higher glasses" />
              <div className="glasses-name">סגל</div>
            </div>
            <div
              className="glasses"
              id="course-glasses"
              onClick={() => {
                handlePopup("course-glasses");
              }}
            >
              <img src={courseGlasses} alt="course glasses" />
              <div className="glasses-name">תוכנית הכשרה</div>
            </div>
            <div
              className="glasses"
              id="physical-glasses"
              onClick={() => {
                handlePopup("physical-glasses");
              }}
            >
              <img src={physicalGlasses} alt="physical glasses" />
              <div className="glasses-name">סביבה פיזית</div>
            </div>
            <div
              className="glasses"
              id="hierarchy-glasses"
              onClick={() => {
                handlePopup("hierarchy-glasses");
              }}
            >
              <img src={hierarchyGlasses} alt="hierarchy glasses" />
              <div className="glasses-name">סביבה ארגונית</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
