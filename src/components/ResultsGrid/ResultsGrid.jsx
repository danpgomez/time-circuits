import ResultCard from "../ResultCard";
import "./ResultsGrid.css";

function ResultsGrid({ searchResults }) {
    return (
       <ul className="results-grid">
        {searchResults.map(movie => {
            console.log(movie);
            return <ResultCard result={movie} />;
        })};
       </ul>
    );
}

export default ResultsGrid;
