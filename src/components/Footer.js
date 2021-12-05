import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default class Footer extends Component {
    render() {
        return (
            <>

                <footer>
                    <p>Find me On Social Media.</p>
                    <ul className="list-unstyled">
                        <li><ReactBootStrap.Nav.Link className="a  p-1" href="https://www.facebook.com/mostafa.fathi.92167" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </ReactBootStrap.Nav.Link></li>
                        <li><ReactBootStrap.Nav.Link className="a  p-1" href="https://twitter.com/Mos__tafa_1" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </ReactBootStrap.Nav.Link></li>

                        <li><ReactBootStrap.Nav.Link className="a  p-1" href="https://www.instagram.com/mos__tafa_1/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </ReactBootStrap.Nav.Link></li>


                        <li><ReactBootStrap.Nav.Link className="a  p-1" href="https://www.linkedin.com/in/mostafa-fathi-a962a820b/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </ReactBootStrap.Nav.Link></li>


                        <li><ReactBootStrap.Nav.Link className="a p-1" href="https://github.com/Mostafa142" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </ReactBootStrap.Nav.Link></li>
                        <li><ReactBootStrap.Nav.Link className="a p-1" href="https://www.youtube.com/channel/UC3mieVkPWLi3tTEECgibgJw" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} />
                        </ReactBootStrap.Nav.Link></li>
                    </ul>
                    <p>Designed by <span>Mostafa Fathi</span></p>
                </footer>
            </>
        )
    }
}
