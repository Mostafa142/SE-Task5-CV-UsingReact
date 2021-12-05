/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import pic from './../profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome, faEnvelope, faPhoneAlt, faStar, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
class LSide extends Component {
    render() {
        return (
            <>
                <div className="leftside">
                    <div className="information">
                        <div className="image"><img src={pic} />
                        </div>
                        <ul className="list-unstyled m-0">
                            <li><FontAwesomeIcon className="i" icon={faBriefcase} /><span>FullStack Developer</span></li>
                            <li><FontAwesomeIcon className="i" icon={faHome} /><span>Menoufya, Egypt</span></li>
                            <li><FontAwesomeIcon className="i" icon={faEnvelope} /><span>mostafafathi705@gmail.com</span></li>
                            <li><FontAwesomeIcon className="i" icon={faPhoneAlt} /><span>+201066924393</span></li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h5><FontAwesomeIcon className="i" icon={faStar} />Skills</h5>
                        <div className="skill">
                            <label >HTML</label>
                            <div className="progress rounded-pill">
                                <div className="progress-bar one bg-info rounded-pill" role="progressbar"
                                    aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">98%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <label>CSS</label>
                            <div className="progress  rounded-pill">
                                <div className="progress-bar two bg-info rounded-pill" role="progressbar"
                                    aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <label>bootstrap</label>
                            <div className="progress  rounded-pill">
                                <div className="progress-bar three bg-info rounded-pill" role="progressbar" style={{ width: "95 % " }}
                                    aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <label>JavaScript</label>
                            <div className="progress rounded-pill">
                                <div className="progress-bar four bg-info rounded-pill" role="progressbar" style={{ width: "75 %" }}
                                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <label >React Js</label>
                            <div className="progress rounded-pill">
                                <div className="progress-bar five bg-info rounded-pill" role="progressbar" style={{ width: "70 %" }}
                                    aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <div className="title">
                            <h5><FontAwesomeIcon className="i" icon={faGlobeEurope} />Languages</h5>
                        </div>
                        <div className="language">
                            <label>Arabic</label>
                            <div className="progress rounded-pill">
                                <div className="progress-bar bg-info w-100 rounded-pill" role="progressbar" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="language">
                            <label>English</label>
                            <div className="progress rounded-pill">
                                <div className="progress-bar bg-info w-75 rounded-pill" role="progressbar" aria-valuenow="75"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="language">
                            <label>German</label>
                            <div className="progress rounded-pill">
                                <div className="progress-bar bg-info w-25 rounded-pill" role="progressbar" aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LSide;