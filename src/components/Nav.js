import React from 'react';
import logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'
class nav extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="nav">
           
            <div className="links">
               <img src={logo} alt="#"></img>
                <p>Features</p>
                <p>Pricing</p>
                <p>Resources</p>
            </div>
            <div className="auth">
                <button>Login</button>
                <button className="acitve">Sign up</button>
            </div>
            <FaBars onClick={this.props.togglebar} className="bars"></FaBars>
            
        </div>;
    }
}

export default nav;