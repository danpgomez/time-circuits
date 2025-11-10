import ResultCard from "../ResultCard";
import "./ResultsGrid.css";

function ResultsGrid({
    searchResults,
    selectedItems,
    setSelectedItems
}) {

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
