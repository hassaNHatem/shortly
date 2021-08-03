import React from 'react';
import img from '../images/bg-boost-desktop.svg'
import img2 from '../images/logo.svg'
import face from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import pint from '../images/icon-pinterest.svg'
import tweet from '../images/icon-twitter.svg'
class Footer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    render() {
        return <section className="main-footer">
            <div className="boost">
                <h2>Boost your links today</h2>
                <button>Get Started</button>
            </div>
            <div className="footer">
                <h1>Shorty</h1>
                <div className="features">
                    <h5>Features</h5>
                    <p>link shortening</p>
                    <p>Branded Links</p>
                    <p>Analytics</p>
                </div>
                <div className="resources">
                    <h5>Resources</h5>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>
                <div className="Company">
                    <h5>Company</h5>
                    <p>about</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contacts</p>
                </div>
                <div className="linked">
                    <img src={face}></img>
                    <img src={tweet}></img>
                    <img src={pint}></img>
                    <img src={insta}></img>
                </div>
            </div>
        </section>
    }
}
export default Footer