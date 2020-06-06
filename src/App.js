import React from 'react';
import './App.css';
import QuoteText from './components/QuoteText';
import NewQuoteButton from './components/NewQuoteButton';
import { Transition, TransitionGroup, SwitchTransition} from 'react-transition-group';

const duration = 2000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

let indexCount = 0;

class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = { 
			quoteText: 'We are what we repeatedly do.\n Excellence, then,\n is not an act, but a habit.',
			author: 'Will Durant', 
			data: null,
			style:{},
			yesNo: true,
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
	
	
	addNewQuote(newQuoteData){
		if(indexCount < this.state.colors.length)
		indexCount++;
		else
		indexCount = 0;
		
		this.setState({
			yesNo: !this.state.yesNo,
			quoteText: newQuoteData.quote,
			author: newQuoteData.author,
			style: {backgroundColor: this.state.colors[indexCount],
					transition: "all 1s ease",
					WebkitTransition: "all 1s ease",
					MozTransition: "all 1s ease"}
		})	
	}
	
	
	render(){	
		let inProp = this.state.yesNo;
	return (
		<div className = "wrapper" style = {this.state.style}>
			<div id = "quote-box">
				<div className = 'textCont'>
					<h1>Random Quote Machine</h1>
					<SwitchTransition>
					<Transition key = {inProp} timeout={duration} exit = {false} unmountOnExit = {true}>
					{state => (
					<div style={{
						...defaultStyle,
						...transitionStyles[state]
					}}>
						<QuoteText data = {this.state}/>
					</div>
					)}
				</Transition>
				</SwitchTransition>
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
