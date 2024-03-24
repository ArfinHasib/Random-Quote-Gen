// let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
   loader.hidden = false;
   quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
   quoteContainer.hidden = false;
   loader.hidden = true;
}

// Show New Quote
function newQuote() {
   showLoadingSpinner();
   // Pick a random quote from the apiQuotes array
   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

   if (!quote.author) {
      authorText.textContent = 'Unknown';
   } else {
      authorText.textContent = quote.author;
   }

   if (quote.text.length > 50) {
      quoteText.classList.add('long-quote');
   } else {
      quoteText.classList.remove('long-quote');
   }

   // Set quote, hide loader
   quoteText.textContent = quote.text;
   removeLoadingSpinner();
}

// Tweet Quote
function tweetQuote() {
   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
   window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

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
