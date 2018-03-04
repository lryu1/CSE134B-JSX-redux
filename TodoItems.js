import React, { Component } from "react";

 
class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
 
    //this.createTasks = this.createTasks.bind(this);
  }
  //delete(key) {
   // this.props.delete(key);
  //}
 
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
    //return <li onClick={() => this.delete(item.key)} 
      //        key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.reverse().map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
}
 
export default TodoItems;
