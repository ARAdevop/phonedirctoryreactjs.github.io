import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import App from "./App";
import "./Addsubscriber.css";
import ReactDom from "react-dom";

function app() {
    return(
        ReactDom.render( <App/>, document.getElementById('root'))
    );
    
    }
class Addsubscriber extends Component {

    render() {
        return (
            <div>
                <Header header="Add Subscriber" />
                <button className="button" onClick={app}>Back</button>
                <form className="subscriber-form">
                  <label className="label-control" htmlFor="name">Name:</label><br/>
                  <input id="name" type="text" className="input-control" name="name"></input><br/><br/>
                  <label htmlFor="phone" className="label-control">Phone:</label><br/>
                  <input id="phone" type="number" className="input-control" name="phone"></input><br/><br/>
                  <div className="subscriber-info-container">
                      <span className="subscriber-to-add-heading">Subscribers to be added : </span><br/><br/>
                      <span className="subscriber-info">Name:</span><br/>
                      <span className="subscriber-info">Phone:</span>
                  </div>
                  <button type="submit" className="button1">Add</button>
                </form>
            </div>
        )
    }
}
export default Addsubscriber;