import React from 'react';

let newQuoteData = null;


class NewQuoteButton extends React.Component {
	constructor(props){
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount(){
		fetch( "http://quotes.stormconsultancy.co.uk/random.json")
			.then(response => response.json())
			.then(data => (newQuoteData = data));
	}
	
	
	handleClick(){
		
		fetch( "http://quotes.stormconsultancy.co.uk/random.json")
			.then(response => response.json())
			.then(data => (newQuoteData = data));
		
		this.props.addNewQuote(newQuoteData);
	}
		
	
	render(){
		
		return(
			<button id = 'new-quote' onClick = {this.handleClick}>New Quote</button>
		);
	}
	
};

export default NewQuoteButton;