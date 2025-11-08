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

    if (searchResults.length === 0) {
        return <p className="no-results-message">No results found</p>;
    }

    // TODO: use the selectedItems to create the movie timelines
    console.log(selectedItems);

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
