import lowerBlob from './assets/lowerBlob.svg';
import higherBlob from './assets/higherBlob.svg';
import strippedCircle from './assets/strippedCircle.svg';
import plusSign from './assets/plusSign.svg';
import schoolLogo from './assets/schoolLogo.svg';
import bigFive from './assets/bigFive.svg';
import arrowDown from './assets/arrowDown.svg';

const MainPage = () => {
    return ( 
        <div className="all-pages">
            <div className="first-page">
                <img src= {schoolLogo} className= "school-logo" alt="school logo"/>
                <div className='first-page-content'>
                    <img src={bigFive} className='big-five' alt='big five'/>
                    <div className='first-page-text' id= "lomdat">לומדת</div>
                    <div className='first-page-text' id= "memadei">ממדי</div>
                    <div className='first-page-text' id= "hadracha">ההדרכה</div>
                    <img src = {arrowDown} className='arrow-down' alt='arrow down'/>


                </div>
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