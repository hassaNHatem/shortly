import React from 'react';
class MopileLinks extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="mop_links">
           
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                    <div className="just_a_line1"></div>
                    <p>Login</p>
                    <button>Sign Up</button>
        </div>;
    }
}

export default MopileLinks;