import ResultCard from "../ResultCard";
import "./ResultsGrid.css";

function ResultsGrid({
    searchResults,
    status,
    selectedItems,
    setSelectedItems
}) {

    if (status == "error" || !searchResults) {
        return <p className="error-message">Oops! Something went wrong"</p>;
    }

    if (status == "success" && searchResults.length === 0) {
        return <p className="no-results-message">No results found</p>;
    }

    return (
        <ul className="results-grid">
            {searchResults.map(movie => {
                return <ResultCard 
                    result={movie} 
                    key={movie.id} 
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems} 
                />;
            })}
        </ul>
    );
}

export default ResultsGrid;
