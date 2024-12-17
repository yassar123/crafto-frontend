import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuoteCreationPage = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await fetch(
        "https://crafto.app/crafto/v1.0/media/assignment/upload",
        {
          method: "POST",
          body: formData,
        }
      );
  
  
      if (response.ok) {
        const data = await response.json();
  
        // Assuming the first element in the array contains the URL
        if (Array.isArray(data) && data.length > 0 && data[0].url) {
          return data[0].url;
        } else {
          alert("Unexpected response format!");
          return null;
        }
      } else {
        alert("Image upload failed!");
        return null;
      }
    } catch (error) {
      console.error("Error during upload:", error);
      alert("Image upload failed due to a network error!");
      return null;
    }
  };
  

  const handleSubmit = async () => {
    console.log("hello")
    const mediaUrl = await handleUpload();
    console.log(mediaUrl)
    if (!mediaUrl) return;

    const token = localStorage.getItem("token");
    console.log(token)
    const response = await fetch(
      "https://assignment.stage.crafto.app/postQuote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ text, mediaUrl }),
      }
    );
    if (response.ok) {
      alert("Quote created!");
      navigate("/quotes");
    } else {
      alert("Failed to create quote!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Create Quote</h1>
      <textarea
        placeholder="Enter quote text"
        className="border p-2 w-full mb-4 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="file"
        className="mb-4"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default QuoteCreationPage;
