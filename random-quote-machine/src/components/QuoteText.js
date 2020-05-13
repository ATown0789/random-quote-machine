import React from 'react';


class QuoteText extends React.Component {
	render(){
		return(
			<div className = 'textCont'>
				<h2 id = "text">{this.props.state.quoteText}</h2>
				<p id = 'author'>-{this.props.state.author}</p>
			</div>
		);
	}
	
};

export default QuoteText;