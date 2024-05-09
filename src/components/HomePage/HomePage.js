import React from "react";
import { Navbar, Accordion } from "../index";
import { accordionData } from "../../content";
import "./HomePage.css";
import girlImg from "../../assets/images/girl.png";
import Alogo from "../../assets/images/a.png";
import spark from "../../assets/images/spark.png";
import gorocket from "../../assets/images/gorocket.png";
import Numicon from "../../assets/images/Numicon.png";
import Dollarimage from "../../assets/images/Dollarimage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer/Footer";

function HomePage() {
  return (<>
    <div className="homepage">
      <Navbar />
      <div className="landing-section">
        <div className="top-headings">
          <h3 className="top-heading-1">Success stories</h3>
          <h1 className="top-heading-2">
            Every success journey <br /> we’ve encountered.
          </h1>
        </div>
        <div className="about-section">
          <div className="left-about-section">
          <img src={girlImg} alt="Girl Image" className="girl-img" />
            <div className="about-box-1">
            <img src={spark} alt="Spark Image" className="sparkImage" />
              <img src={Numicon} alt="Numicon Image" className="numicon" />
              <br />
              <p className="box-1-text-par">
                Achieved reduction in <br />
                project execution time
                <br /> by optimising team
                <br /> availability
              </p>
            </div>
            <div className="about-box-2">
              <div className="about-box-2-D">
                <img src={gorocket} alt="Gorocket Image" className="gorocket-icon" />
                <p>
                  <br />
                  <span className="days">10 DAYS</span> <br /> <span className="Staff-text">Staff Deployment</span>
                </p>
              </div>
            </div>
            <div className="about-box-3">
              <p>
                <span><img src={Dollarimage} alt="Dollar Image" className="dollar-img" /></span><span className="Mill-text">MILLION</span>
              </p>
              <br />
              <p className="Reduced-client">
                Reduced client expenses
                <br /> by saving on hiring and <br />
                employee costs.
              </p>
            </div>
          </div>
          <div className="right-about-section">
            <h3 className="about-heading">
              Enhance fortune 50 company’s insights teams research capabilities
            </h3>
            <div className="dots"></div>
            <button className="Expolre-btn">Explore More      <FontAwesomeIcon icon={faArrowRight} className="fonticon"/> </button>
          </div>
        </div>
      </div>
      <div className="questions-section">
        <div className="questions-left-section">
          <div className="question-headings">
            <h3 className="question-heading-1">What's on your mind</h3>
            <h1 className="question-heading-2">Ask Questions</h1>
          </div>
          <img src={Alogo} alt="Alogo" className="Alogo" />
        </div>
        <div className="questions-right-section">
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion key={title} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
      <div><Footer/></div>
      
    </div>
    </>
  );
}

export default HomePage;