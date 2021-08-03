import React from 'react';

class Field extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        inputval:''
    };
}

    render() {
        console.log(this.state.inputval)
        return <section>
            
             <div className="Field">
            
           <div className="input-container">   <input type="text" onChange={(e)=>{this.setState({inputval:e.target.value})  }} placeholder="shorten a link here..."></input></div>
           <button onClick={()=>{this.props.shorten(this.state.inputval)}}>Shorten it!</button>
            </div>

        
        </section>;
    }
}



export default Field;