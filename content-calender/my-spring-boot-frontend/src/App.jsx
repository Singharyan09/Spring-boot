import { useState, useEffect } from "react";
import "./index.css";

// Replace with your Spring Boot endpoint, e.g., http://localhost:8080/api/content
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      console.log("API Response:", result); // Log to console
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-sky-100">
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">
        Spring Boot API Practice
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={fetchData}
      >
        Refresh Data
      </button>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data.length > 0 && (
        <ul className="list-disc pl-5">
          {data.map((item) => (
            <li key={item.id} className="mb-2 p-4 bg-white rounded shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
