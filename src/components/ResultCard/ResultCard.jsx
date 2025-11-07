import "./ResultCard.css";
import "../PlaceholderImage";
import PlaceholderImage from "../PlaceholderImage";

function ResultCard({ result }) {
    const src = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
    const date = result.release_date.split("-")[0];

    return <article className="result-card" key={result.id}>
        {result.poster_path ? <img src={src} alt={result.title} className="result-image"/> : <PlaceholderImage />}
        <h2>{result.title}</h2>
        <h3>{date}</h3>
    </article>
}

export default ResultCard;
