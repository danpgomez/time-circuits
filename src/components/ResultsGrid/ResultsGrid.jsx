import ResultCard from "../ResultCard";
import "./ResultsGrid.css";

function ResultsGrid({ searchResults, status }) {

    if (status == "error" || !searchResults) {
        return <p className="error-message">Oops! Something went wrong"</p>;
    }

    if (searchResults.length === 0) {
        return <p className="no-results-message">No results found</p>;
    }

    return (
       <ul className="results-grid">
        {searchResults.map(movie => {
            return <ResultCard result={movie} />;
        })}
       </ul>
    );
}

export default ResultsGrid;
