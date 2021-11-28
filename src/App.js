import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import subscriber from './subscriberdetail'; 
import Addsubscriber from './Addsubscriber';
import ReactDom from 'react-dom';
function add() {
  return(
      ReactDom.render( <Addsubscriber/>, document.getElementById('root'))
  );
  
  }
class App extends Component {
  deleteHandler(message){
    alert(message);
  } 
  
  render() {
    
    return (
      //while using jsx their must be a parent element or {}//
      //in jsx instead of class we use className.//
      //   {/*<div>
      /* <div className="header">
          Phone Directory</div>
        <button>Add</button>
        <br></br>
        <div>
          <span>Name</span>
          <span>Phone</span>
        </div> *//*inside{sum} java script is written inside this braces */
      /* <label htmlFor="name">Name : </label>
          <input id="name" type="text" placeholder="Type Here" defaultValue="Aditya raj awasthi"/> */
      //  </div >
      //javascript map()used to itrate over an array and inject data into the react components or elements .//
      //props help you to pass values from a parent component to a child component so that they can be accessed within the child component.
      <div className="reactphone">
        <Header header="[Phone Directory ] Created by:-'Aditya'" learner="Aditya Raj Awasthi" wife="Stuti Aditya Raj Awasthi" />
        <button className="button1" onClick={add} >Add</button>
        <div className="flexcontain">
          <span className="namehead">Name</span><br/>

          <span className="phonehead">Phone</span>

        </div>
        {
          subscriber.map(sub => {
            return <div key={sub.id} className="flexcontain">
              <span className="namehead">{sub.name}</span>
              <span className="phonehead">{sub.phone}</span>
              <button className="button"onClick={this.deleteHandler.bind(this,"Delete Clicked")}>{sub.Delete}</button>
             {/*bind() creates a bound function that has the same body as the original function.*/}
            </div>
          })
        }
      </div>









      // React.createElement("div", { id: "phone" },
      // React.createElement("p",null,"React Js : MY first course completely.")

    );
  }
}



export default App;
