import React from 'react';
import './App.css';
import QuoteText from './components/QuoteText';
import NewQuoteButton from './components/NewQuoteButton';


class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = { 
			quoteText: 'We are what we repeatedly do.\n Excellence, then,\n is not an act,\n but a habit.',
			author: 'Will Durant', 
			data: null,
			colors: [
				"#16a085",
				"#27ae60",
				"#2c3e50",
				"#f39c12",
				"#e74c3c",
				"#9b59b6",
				"#FB6964",
				"#342224",
				"#472E32",
				"#BDBB99",
				"#77B1A9",
				"#73A857"
			]
		}
		
		this.addNewQuote = this.addNewQuote.bind(this)
	}
	
	addNewQuote(newQuote){
		
		this.setState({
			quoteText: newQuote.text,
			author: newQuote.author
		})
		
	}
	
	componentDidMount(){
		fetch("https://type.fit/api/quotes")
			.then(response => response.json())
			.then(data => this.setState({data}));
	}
	
	render(){
		console.log(this.state.data)
	return (
		<div id = "quote-box">
			<div className = 'textCont'>
				<h1>Random Quote Machine</h1>
				<QuoteText state = {this.state}/>
			</div>
			<div className = 'buttonTweetCont'>
				<a id = "tweet-quote" href='https://twitter.com/intent/tweet'>Tweet Quote
				</a>
				<NewQuoteButton state = {this.state} addNewQuote = {this.addNewQuote}/>
			</div>
		</div>
			
	)}

}

export default App;
