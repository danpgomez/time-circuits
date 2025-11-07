import ResultCard from "../ResultCard";
import "./ResultsGrid.css";

function ResultsGrid({ searchResults, status }) {

    if (status == "error") {
        return "Oops! Something went wrong";
    }

    return (
       <ul className="results-grid">
        {searchResults.map(movie => {
            return <ResultCard result={movie} />;
        })};
       </ul>
    );
}

export default ResultsGrid;
