import { useState } from "react"; // React hook to manage state
import { quotes } from "../data/quotes"; // Import the local quotes array

function Quote() {
  // useState hooks to store the current quote and author
  const [quote, setQuote] = useState(quotes[0].content); // Initialize with the first quote
  const [author, setAuthor] = useState(quotes[0].author);

  // Function to select a random quote from the array
  const fetchQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)]; // Math.random() selects random index
    setQuote(random.content); // Update quote state
    setAuthor(random.author); // Update author state
  };

  return (
    // Outer div: center card with padding, white background, rounded corners, shadow, text centered
    <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-2xl text-center">
      
      {/* Quote text */}
      <p className="text-lg md:text-xl italic mb-4 text-gray-800">
        "{quote}"
      </p>

      {/* Quote author */}
      <p className="text-md md:text-lg font-semibold mb-6 text-gray-600">
        - {author}
      </p>

      {/* Button to get a new random quote */}
      <button
        onClick={fetchQuote} // Call fetchQuote when button is clicked
        className="bg-purple-500 text-white px-6 py-2 rounded-full shadow-lg 
                   hover:bg-purple-600 transition-colors duration-300"
      >
        New Quote
      </button>
    </div>
  );
}

export default Quote; // Export the component so App.jsx can import it
