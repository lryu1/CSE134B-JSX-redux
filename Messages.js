import React, { Component } from "react";
import TodoItems from "./TodoItems";

 
class Messages extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
          };
     
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
       
      addItem(e) {
        var itemArray = this.state.items;
 
        if (this._inputElement.value !== "") {
          itemArray.unshift({
              text: this._inputElement.value,
              key: Date.now()
          });
       
          this.setState({
            items: itemArray
          });
       
          this._inputElement.value = "";
        }
       
        console.log(itemArray);
         
        e.preventDefault();
     
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
  render() {
    return (
        <div>
        <h1>
            Messages
            </h1>
      <div className="messagesMain">
        <div className="header">
          <form onSubmit={this.addItem}>     
          <input ref={(a) => this._inputElement = a} 
                  placeholder="enter message">
          </input>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
      </div>
    );
  }
}
 
export default Messages;
