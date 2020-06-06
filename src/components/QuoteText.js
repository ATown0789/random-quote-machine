import React from 'react';



class QuoteText extends React.Component {
	
	render(){
		
		return(
			<div className = 'textCont'>
							<h2 id = "text">{this.props.data.quoteText}</h2>
							<p id = 'author'>-{this.props.data.author}</p>
						</div>
		);
	}	
	
};

export default QuoteText;