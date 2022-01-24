import React, { Component } from 'react';



//Transform the App.js into a class-based component.

class AppClass extends Component {
    constructor(props){
        super(props)

// Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.        super(props)
        this.state={
            fullName:"Amina Hedhili",
            bio:"Mechatronics engineer",
            imgSrc:"myImage",
            profession:"student at GoMyCode",
            counter: 0,
            show:false
        }
    }
show=()=>{
    this.setState({show:!this.state.show})
}

handleChange= (e) => {
    this.setState({[e.target.name]:e.target.value})
  };

  add= () => {
    this.setState({counter:++this.state.counter})
  };
  componentDidMount() {
    setInterval(()=> this.setState({counter:this.state.counter+1})   , 1000)
   }

  render() {
    return <div>
       <br></br>
    {this.state.show && <p> {this.state.fullName}, I am a {this.state.bio} and {this.state.profession}</p>}

{/* Add a button that toggles the show state. When the show state is true, the person's profile will appear. */}

        <button onClick={this.show}>Show my profile</button>

{/* // Create a field that shows the time interval since the last component was mounted using the component 
lifecycle. Hint: use the setInterval method. */}
        <div>
            <h3>Time Interval is {this.state.counter}</h3>

        </div>
    </div>;
  }
}
export default AppClass

