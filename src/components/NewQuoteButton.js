import React from 'react';
import QuotesInfo from './QuotesInfo';


class NewQuoteButton extends React.Component {
	constructor(props){
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		this.props.addNewQuote(QuotesInfo(this.props.state.data));
	}
		
	
	render(){
		return(
			<button id = 'new-quote' onClick = {this.handleClick}>New Quote</button>
		);
	}
	
};

export default NewQuoteButton;