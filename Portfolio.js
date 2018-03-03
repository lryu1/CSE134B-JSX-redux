import React from 'react';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     fname: '',
        //     email: ''};
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formValues: {},
            buttonClicked: false
        };
      }
    
      handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({formValues});
    }

    //onChange = (event) => this.setState({ value: event.target.value });
    // onChange(event) {
    //     const state=this.state;
    //     let ename=event.target.name;
    //     let evalue=event.target.value;
    //     state.ename=evalue;
    //     this.setState({state});
        
    // }

    // handleSubmit(event) {
    //     //event.preventDefault();
    //     //const { fname, email } = this.state;
    //     //this.setState({ value: this.element.value });
    //     //console.log("hello");
    //     event.preventDefault();
    //     //this.setState({ formValue[this.element.value });
    //     const state=this.state;
    //     let ename=event.target.name;
    //     let evalue=event.target.value;
    //     state.ename=evalue;
    //     this.setState({formValues[ename] = evalue});
        
    //   }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state.formValues);
        this.setState({buttonClicked: true});
           
    }

      render() {
        const buttonClicked = this.state.buttonClicked;
        while (!buttonClicked) {
            return (
                <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                        <label> Name:
                            <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                        </label><br />
                        <label> Email:
                            <input type="text" name="email" placeholder="Email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
                        </label><br />
                        <label> Gender:
                            <input type="text" name="gender" placeholder="Birthday" value={this.state.formValues["gender"]} onChange={this.handleChange.bind(this)} />
                        </label><br />
                        <label> Birthday:
                            <input type="text" name="birthday" placeholder="Gender" value={this.state.formValues["birthday"]} onChange={this.handleChange.bind(this)}/>
                        </label><br />
                            <input className="btn btn-primary" type="submit" value="Submit" />
                   </form>
                </div>
    
              );
        }
        return (
               
                    <h1>Name: {this.state.formValues["name"]} <br />
                     Email: {this.state.formValues["email"]} <br />
                     Gender: {this.state.formValues["gender"]} <br />
                     Birthday: {this.state.formValues["birthday"]}</h1>
        );

        }
        
        
        
      
  }

  export default MyForm;
