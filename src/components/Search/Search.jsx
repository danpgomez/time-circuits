import { useState } from "react";

function Search({ setResults, status, setStatus, setSelectedTimeline }) {
    const [query, setQuery] = useState("");

    function handleChange(event) {
        setQuery(event.target.value);
        setSelectedTimeline("");
    }

    async function handleSearch(event) {
        setStatus("loading");
        event.preventDefault();
        const key = import.meta.env.VITE_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`;

        try {
            const response = await fetch(url);
            
            if (response.ok) {
                setStatus("success");
            }
            
            const json = await response.json();
            setResults(json.results);
        } catch (error) {
            console.log(error);
            setStatus("error");
        }

        setQuery("");
    }

    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <input
                name="query"
                value={query}
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
