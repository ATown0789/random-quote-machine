

const QuotesInfo = (quotes) => {
	
	let indexQuote = Math.floor(Math.random()*1644);
	if(quotes[indexQuote].author  == null)	
		quotes[indexQuote].author = 'Anonymous'
	return quotes[indexQuote];
}


export default QuotesInfo;


