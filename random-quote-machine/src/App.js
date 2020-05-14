import React from 'react';
import './App.css';
import QuoteText from './components/QuoteText';
import NewQuoteButton from './components/NewQuoteButton';


class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = { 
			quoteText: 'We are what we repeatedly do.\n Excellence, then,\n is not an act, but a habit.',
			author: 'Will Durant', 
			data: null,
			colors: [
				"#16a085 !important",
				"#27ae60 !important",
				"#2c3e50 !important",
				"#f39c12 !important",
				"#e74c3c !important",
				"#9b59b6 !important",
				"#FB6964 !important",
				"#342224 !important",
				"#472E32 !important",
				"#BDBB99 !important",
				"#77B1A9 !important",
				"#73A857 !important"
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
		let backgroundColor = this.state.colors[Math.floor(Math.random()*12)];
		
	return (
		<div className = "wrapper">
			<div id = "quote-box">
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
