import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = createStore(messageReducer);


class DisplayMessages extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			input: '',
			messages: []
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
		
	}
	
	handleChange(event){
		this.setState({
			input: event.target.value
		});	
	}
	
	submitMessage() {
		this.setState({
			input:'',
			messages: [...this.state.messages, this.state.input]
		});
	}
	
	render(){
		console.log(this.state)
		const message = this.state.messages.map(i => <li>{i}</li>);
		return(
			<div>
				<h2> Type in a new message:</h2>
				<input 
					onChange = {this.handleChange}
					value = {this.state.input}
				/>
				<button onClick = {this.submitMessage}>Submit Message</button>
				<ul>{message}</ul>			
			</div>
		);
	}
};

class AppWrapper extends React.Component {
  // render the Provider here
  render(){
    return(
  <Provider store={store}>
      <DisplayMessages/>
  </Provider>)
  }
  // change code above this line

};


export default AppWrapper;