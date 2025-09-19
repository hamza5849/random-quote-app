import { useState, useEffect } from "react";
import { quotes as localQuotes } from "../data/quotes";

function Quote() {
  const [quote, setQuote] = useState(localQuotes[0].content);
  const [author, setAuthor] = useState(localQuotes[0].author);
  const [loading, setLoading] = useState(true);

  const fetchQuoteFromAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      if (!response.ok) throw new Error("API failed");

      const data = await response.json();
      setQuote(data[0].q);
      setAuthor(data[0].a);
      setLoading(false);
    } catch (error) {
      console.warn("API failed, using local quotes", error);
      const random = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      setQuote(random.content);
      setAuthor(random.author);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuoteFromAPI();
  }, []);

  return (
    <div className="w-96 h-80 p-8 bg-white rounded-2xl shadow-2xl text-center flex flex-col justify-between">
      <p className="text-lg md:text-xl italic mb-4 text-gray-800">
        {loading ? "" : `"${quote}"`}
      </p>
      <p className="text-md md:text-lg font-semibold mb-6 text-gray-600">
        {loading ? "" : `- ${author}`}
      </p>
      <button
        onClick={fetchQuoteFromAPI}
        className="bg-purple-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors duration-300"
      >
        New Quote
      </button>
    </div>
  );
}

export default Quote;
