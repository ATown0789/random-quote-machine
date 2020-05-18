import React from 'react';
import './App.css';
import QuoteText from './components/QuoteText';
import NewQuoteButton from './components/NewQuoteButton';
import {TransitionGroup} from 'react-transition-group';

let indexCount = 0;

class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = { 
			quoteText: 'We are what we repeatedly do.\n Excellence, then,\n is not an act, but a habit.',
			author: 'Will Durant', 
			data: null,
			style:{},
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
		if(indexCount < this.state.colors.length)
		indexCount++;
		else
		indexCount = 0;
		
		this.setState({
			quoteText: newQuote.text,
			author: newQuote.author,
			style: {backgroundColor: this.state.colors[indexCount],
					transition: "all 1s ease",
					WebkitTransition: "all 1s ease",
					MozTransition: "all 1s ease"}
		})	
	}
	
	componentDidMount(){
		fetch("https://type.fit/api/quotes")
			.then(response => response.json())
			.then(data => this.setState({data}));
	}
	
	
	
	
	
	render(){		
	return (
		<div className = "wrapper" style = {this.state.style}>
			<div className="transition" id = "quote-box">
				<div className = 'textCont'>
					<h1>Random Quote Machine</h1>
					<QuoteText state = {this.state}/>
				</div>
				<div className = 'buttonTweetCont'>
					<a id = "tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+ encodeURIComponent('"' + this.state.quoteText + '"\r\n- ' + this.state.author)}>
					<i className="fab fa-twitter"></i>
					</a>
					<NewQuoteButton state = {this.state} addNewQuote = {this.addNewQuote}/>
				</div>
			</div>
		</div>
			
	)}

}

export default App;
