import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';
export default class RSide extends Component {
    render() {
        return (
            <>
                <div className="rightside">
                    <div className="experience">
                        <h3><FontAwesomeIcon className="i" icon={faBriefcase} />Work Experience</h3>
                        <div className="item">
                            <h5>Frontend Developer</h5>
                            <p className="period"><FontAwesomeIcon className="i" icon={faCalendarAlt} />jan 2015- <span>Current</span></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque ipsam expedita
                                earum dolores deserunt quasi error? Veniam optio, voluptatibus sequi nam voluptatem aliquam
                                nihil maxime repellendus atque?</p>
                        </div>
                        <div className="item">
                            <h5>Web Developer</h5>
                            <p className="period"><FontAwesomeIcon className="i" icon={faCalendarAlt} />Mar 2012- Dec 2014</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque ipsam expedita
                                earum dolores deserunt quasi error? Veniam optio, voluptatibus sequi nam voluptatem aliquam
                                nihil maxime repellendus atque?</p>
                        </div>
                        <div className="item border-0">
                            <h5>Graphic Designer</h5>
                            <p className="period"><FontAwesomeIcon className="i" icon={faCalendarAlt} />Mar 2010- Jan 20112</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint </p>
                        </div>
                    </div>
                    <div className="education">
                        <h3><FontAwesomeIcon className="i" icon={faUniversity} />Education</h3>
                        <div className="item">
                            <h5>W3Schools.com</h5>
                            <p className="period"><FontAwesomeIcon className="i" icon={faCalendarAlt} />ForEver</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque ipsam expedita
                                earum dolores deserunt quasi error? Veniam optio, voluptatibus sequi nam voluptatem aliquam
                                nihil maxime repellendus atque?</p>
                        </div>
                        <div className="item">
                            <h5>ITI information Technology Institue</h5>
                            <p className="period"><FontAwesomeIcon className="i" icon={faCalendarAlt} />Jan 2020 - Jan 2021</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque ipsam expedita
                                earum dolores deserunt quasi error? Veniam optio, voluptatibus sequi nam voluptatem aliquam
                                nihil maxime repellendus atque?</p>
                        </div>
                        <div className="item border-0">
                            <h5>Faculty of copmuters and Information</h5>
                            <p className="period"><FontAwesomeIcon className="i" icon={faCalendarAlt} />Mar 2019- Jan 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
