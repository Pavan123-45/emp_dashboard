import React from 'react'
import style from "./design.module.css"
import contact from "./img/contact.png"
import moptro_logo from "./img/moptro_logo.png"
import home_logo from "./img/home.jpg"
import listContacat_logo from "./img/listContact.jpg"
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {

    const weekdayProgress = {
        Monday: 30,
        Tuesday: 60,
        Wednesday: 20,
        Thursday: 40,
        Friday: 80,
      };

  return (
    <div className={style.dashboard}>
        <Link to={"/"}><img src={contact} alt="contact_logo" className={style.contact} /></Link>
        
        <img src={moptro_logo} alt='moptro_logo' className={style.moptro_logo}></img>
         <div className={style.dashboardContainer}>
            <div className={style.dashboardTextContainer}>
                <p  className={style.dashboardText}>Employee Productivity Dashdoard</p>
            </div>
            <div className={style.progress}>
            {Object.entries(weekdayProgress).map(([weekday, progress]) => (
        <div key={weekday} className="progress-container">
            <div className="progress-wrapper">
            <span className="progress-label" >{`${progress}%`}</span>
            <ProgressBar now={progress} label={`${progress}%`} variant={style.progressBar} />
            <p className={style.weekText}>Productivity on {weekday}</p>
          </div>
        </div>
      ))}
    </div>
         </div>

      
        <div className={style.footer}>
        <Link to={"/home"}><img src={home_logo} alt='home_logo'className={style.home_logo}></img></Link>
        <Link to={"/users"}><img src={listContacat_logo}  alt="listContact_logo" className={style.listContacat_logo} /></Link>
        </div>
    </div>
  )
}

export default Dashboard
