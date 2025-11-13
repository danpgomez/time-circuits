import { useState } from "react";
import "./Search.css";

function Search({ setResults, status, setStatus, setSelectedTimeline }) {
    const [query, setQuery] = useState("");

    function handleChange(event) {
        setQuery(event.target.value);
        setSelectedTimeline("");
    }

    async function handleSearch(event) {
        setStatus("loading");
        event.preventDefault();

        // Call our Netlify function instead of TMDb directly
        // This keeps the API key secure on the server
        const functionUrl = '/.netlify/functions/search-movies';

        try {
            const response = await fetch(functionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query })
            });

            const json = await response.json();
                        
            // Check if the request was successful
            if (response.ok && json.results) {
                // Filter out any adult films.
                const filteredResults = json.results.filter(result => !result.adult);
                setStatus("success");
                setResults(filteredResults);
            } else {
                // Handle errors from the function or TMDb
                console.error('Search error:', json.error || 'Unknown error');
                setStatus("error");
                setResults([]);
            }
        } catch (error) {
            console.error('Network error:', error);
            setStatus("error");
            setResults([]);
        }

        setQuery("");
    }

    return (
        <form onSubmit={(e) => handleSearch(e)} className="movie-search-form">
            <input
                name="query"
                value={query}
                placeholder="Back to the Future"
                onChange={event => {
                    handleChange(event);
                }}
            />
            <button 
                type="submit" 
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Searching...' : 'Search'}
            </button>
        </form>
    );
}

export default Search;
