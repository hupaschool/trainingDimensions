import lowerBlob from '/lowerBlob.svg';
import higherBlob from '/higherBlob.svg';
import strippedCircle from '/strippedCircle.svg';
import plusSign from '/plusSign.svg';

const MainPage = () => {
    return ( 
        <div className="all-pages">
            <div className="first-page">
                first page
            </div>
            <div className="second-page">
                second page
            </div>
            <div className="third-page">
                third page
                <div className="blob-design">
                    <img src= {lowerBlob} className= "blob" id='lower-blob' alt="lower blob"/>
                    <img src= {higherBlob} className= "blob" id='higher-blob' alt="higher blob"/>
                    <img src= {strippedCircle} id='stripped-circle' alt="stripped circle"/>
                    <img src= {plusSign} id='plus-sign' alt="plus sign"/>
                </div>
            </div>
        </div>
     );
}
 
export default MainPage;