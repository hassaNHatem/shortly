import React from 'react';
import img from '../images/illustration-working.svg'
class Hero extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="hero-main">
            <div className="disc">
                <h1>More than just</h1><h1> shorter links</h1>
                <p>build your brand's recognition and get detailed<br></br>insight on how your links are performing</p>
                <button>get started</button>
            </div>
            <div className="img">
                <img  src={img}></img>
            </div>
        </div>;
    }
}



export default Hero;