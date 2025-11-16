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

const MainPage = () => {
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
            className="blob"
            id="lower-blob"
            alt="lower blob"
          />
          <img
            src={higherBlob}
            className="blob"
            id="higher-blob"
            alt="higher blob"
          />
          <img
            src={strippedCircle}
            id="stripped-circle"
            alt="stripped circle"
          />
          <img src={plusSign} id="plus-sign" alt="plus sign" />
        </div>
        <div className="third-page-content">
          <div className="third-page-header">
            <div className="third-page-title">5 ממדי</div>
            <div className="third-page-title">ההדרכה</div>
            <div className="third-page-text">לחצו על כל ממד הדרכה לפירוט</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
