const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Generate New Quotes
function newQuote() {
   // pick a random quote from apiQuotes array
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

   // Check if author field is blank and replace it with 'Unknown'
   if (!quote.author) {
      authorText.textContent = 'Unknown';
   } else {
      authorText.textContent = quote.author;
   }

   // Check Quote length to determine styling
   if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
   } else {
      quoteText.classList.remove('long-quote');
   }

   // set quote text
   quoteText.textContent = quote.text;
}

// Get Quotes from the api
async function getQuotes() {
   const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
   try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
   } catch (err) {
      console.log(err);
   }
}

// Tweet Quote
function tweetQuote() {
   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;

   // Open a new window to post the quote on twitter/x
   window.open(twitterUrl, '_blank');
}

// Generate new quote by clicking the new quote btn
newQuoteBtn.addEventListener('click', newQuote);

// Tweet new quote
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();
