import React from 'react';
import card1 from '../images/icon-brand-recognition.svg'
import card2 from '../images/icon-detailed-records.svg'
import card3 from '../images/icon-fully-customizable.svg'
class Advanced extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="adv">
            <div className="head">
                <h3>Advanced Statistics</h3>
                <p>Track how your links are performing across the web with</p>
                <p>our advanced Statistics dashboard</p>
            </div>
            
            <div className="cards">
            <div className="justaline"></div>
            <div className="justaline2"></div>

                <div className="card1 card">
                <div className="img card_icon"> <img src={card1}></img></div>
                <div className="rest">
                 <h2>Brand recognition</h2>
                 <p>boost your brand recognition with <br></br> each click. generic links dont mean a<br></br> thing,Branded links help instil<br></br>confidance in your content</p>
                 </div>
                </div>

                <div className="card2 card">
                <div className="img card_icon"> <img src={card2}></img></div>
                <div className="rest">
                 <h2>Detailed Records</h2>
                 <p>Gain insight into who is clicking your<br/>links,knowing when and where<br/>people engage with your content<br/>helps inform better decisions</p>
                  </div>  
                </div>

                <div className="card3 card">
                <div className="img card_icon"> <img src={card3}></img></div>
                <div className="rest">
                 <h2>Fully Customizable</h2>
                 <p>Improve brand awareness and<br/>content discoverability through<br/>customizeable links , supercharging<br/>audience engagement</p>
                 </div>
                </div>

            </div>
        </div>;
    }
}



export default Advanced;