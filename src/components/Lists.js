import React from 'react';

class Lists extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="lists">
            {
                this.props.list.map((item,i)=>{
                    return( <div key={i} className="list">
                    <div className="full-link">
                    <p>{item.fulllink}</p>
                    </div>
                    <div className="shortened">
                        <p>{item.shortlink}</p>
                        <button onClick={() => {navigator.clipboard.writeText(item.shortlink)
                        alert('link copied!')
                        }}>Copy</button>
                    </div>
                </div>)
                })
           }
        </div>;
    }
}


export default Lists;