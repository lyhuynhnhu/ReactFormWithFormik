import React from 'react'
import './Parent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div class="copyright">
                © 2019 Uber Technologies Inc. All Rights Reserved.
                <div class="notice">
                    Terms of Use<p>|</p>
                    Legal Notices<p>|</p>
                    Privacy  Security
                </div>
            </div>
            <div class="social">
                <span style={{fontSize: "48px", color: "Dodgerblue"}}>
                    <FontAwesomeIcon icon={faFacebookSquare} size="xs" />
                </span>
                <span style={{fontSize: "48px", color: "steelblue"}}>
                    <FontAwesomeIcon icon={faLinkedin} size="xs" />
                </span>
                <span style={{fontSize: "48px", color: "tomato"}}>
                    <FontAwesomeIcon icon={faYoutubeSquare} size="xs" />
                </span>
            </div>
        </footer>
    )
}

export default Footer