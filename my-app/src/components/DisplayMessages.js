import React from 'react';

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


export default DisplayMessages;