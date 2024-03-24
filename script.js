// let apiQuotes = [];

// Show New Quote
function newQuote() {
   // Pick a random quote from the apiQuotes array
   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
   console.log(quote);
}

// Get Quotes form the API
// async function getQuotes() {
//    const apiUrl = 'https://type.fit/api/quotes';

//    try {
//       const response = await fetch(apiUrl);
//       apiQuotes = await response.json();
//       console.log(apiQuotes);
//       newQuote();
//    } catch (error) {
//       console.log(error);
//    }
// }

newQuote();
