window.onload = getNewQuote;

let quotebutton = document.getElementById('quotebutton');
quotebutton.onclick = addQuote;
// mag NIET addNewQuote zijn hier
// anders wordt het maar 1 keer uitgevoerd, namelijk na het laden van de html pagina
// en het moet telkens wanneer er op de button wordt gedrukt uitgevoerd worden

let getNewQuoteRequest = new XMLHttpRequest();
// 0
// The request is not initialized.
// After you have created the XMLHttpRequest object, but before you have called the open() method.
let newQuoteRequest = new XMLHttpRequest();

function getNewQuote () {
	getNewQuoteRequest.open("GET", "ManageQuoteServlet", true);
	// 1
	// The request has been set up.
	// After you have called the open() method, but before you have called send().
	getNewQuoteRequest.onreadystatechange = showQuotes;
	// mag NIET showQuotes() zijn
	// want dat wordt het maar 1 keer uitgevoerd
	// en het moet telkens wanneer de readystate van het xhr veranderd worden uitgevoerd
	getNewQuoteRequest.send();
	// 2
	// The request has been sent.
	// After you have called send().
}

// 3
// The request is in process.
// After the browser has established a communication with the server, but before the server has completed the response.

// 4
// The request is completed.
// After the request has been completed, and the response data has been completely received from the server.

// callback function
function showQuotes () {
	if (getNewQuoteRequest.readyState == 4) {
		if (getNewQuoteRequest.status == 200) {
			let quote = JSON.parse(getNewQuoteRequest.responseText);

			let quoteDiv = document.getElementById("quote");
			let quoteParagraph = quoteDiv.childNodes[0];
			let quoteText = document.createTextNode(quote.text); // kan ook quote["text"]

			if (quoteParagraph == null) {
				quoteParagraph = document.createElement('p');
				quoteParagraph.appendChild(quoteText);
				quoteDiv.appendChild(quoteParagraph);
			} else {
				quoteParagraph.removeChild(quoteParagraph.childNodes[0]);
				quoteParagraph.appendChild(quoteText);
			}
			setTimeout(getNewQuote, 1000);
		}
	}
}

function addQuote () {
	let quoteText = document.getElementById("quotetext").value;
	// encodeURIComponent om UTF-8 te gebruiken en speciale karakters om te zetten naar code
	let information = "quote=" + encodeURIComponent(quoteText);
	newQuoteRequest.open("POST", "ManageQuoteServlet", true);
	// belangrijk dat dit gezet wordt anders kan de servlet de informatie niet interpreteren!!!
	// protocol header information
	newQuoteRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	newQuoteRequest.send(information);
}
