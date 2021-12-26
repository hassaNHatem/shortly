import React from 'react';
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero';
import Field from './components/Field';
import Advanced from './components/Advanced';
import Lists from './components/Lists';
import Footer from './components/Footer';
import MoLinks from './components/MopileLinks'

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  barclicked: false,
  links:[]
}
} 
togglebar = ()=>{
  if(this.state.barclicked){
    this.setState({
      barclicked:false
    })
  }else{
    this.setState({
      barclicked:true
    })
  }
}

shorten = (link) =>{
  const axios = require('axios');
  axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`).then(resp => {

    console.log(resp.data);
    const obj = {
      shortlink:resp.data.result.short_link,
      fulllink:link
    }
    this.setState({
      links:[...this.state.links,obj]
    })
    console.log(this.state.links)

});
}
  render() {
    
     return (
     <><div className="main-component">
       <Nav togglebar={this.togglebar}></Nav>
       {this.state.barclicked?<MoLinks></MoLinks>:<></>}
       <Hero></Hero>
       </div>
       <Field shorten={this.shorten}></Field>
       <div className="full">
       <Lists list={this.state.links}></Lists>
       <Advanced></Advanced>
       <Footer></Footer>
       </div></>)
     
    
  }
}


export default App;
