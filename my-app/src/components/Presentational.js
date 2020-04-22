import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';


//Redux
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
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

//React
class Presentational extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			input: ''
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
		this.props.submitNewMessage(this.state.input);
		this.setState({
			input:''
		});
	}
	
	render(){
		const message = this.props.messages.map((i,idx) => <li key={idx}>{i}</li>);
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

//React-Redux

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
	
  render(){
    return(
		<Provider store={store}>
			<Container/>
		</Provider>)
  }
};


export default AppWrapper;