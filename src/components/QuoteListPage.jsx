import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const QuoteListPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuotes();
  }, [offset]);

  const fetchQuotes = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://assignment.stage.crafto.app/getQuotes?limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      setQuotes(data.data || []);
    }
  };

  return (
    <div className="p-4">
      <button
        className="fixed top-10 right-10 bg-blue-500 text-white p-4 rounded-full"
        onClick={() => navigate("/create-quote")}
      >
        +
      </button>
      <div className="grid gap-4">
        {quotes.map((quote) => (
          <div key={quote.id} className="w-1/2 bg-white shadow-lg p-4 rounded-lg">
          <div className="w-1/2 rounded overflow-hidden">
            <img
              src={quote.mediaUrl}
              alt="Quote media"
              className="object-cover w-full h-full"
            />
            <div className="bg-black bg-opacity-50 text-white p-2 absolute bottom-0 w-full">
              {quote.text}
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {quote.username} • {new Date(quote.created_at).toLocaleString()}
          </p>
        </div>
        
        ))}
      </div>
      <Pagination offset={offset} setOffset={setOffset} limit={limit} />
    </div>
  );
};

export default QuoteListPage;
