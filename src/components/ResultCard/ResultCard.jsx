import { useRef } from "react";
import "./ResultCard.css";
import "../PlaceholderImage";
import PlaceholderImage from "../PlaceholderImage";

function ResultCard({ result, setSelectedItems }) {
    const src = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
    const date = result.release_date.split("-")[0];
    const buttonRef = useRef();

    function handleSelected(event) {
        setSelectedItems(result.id);
        buttonRef.current.classList.toggle("selected");
        console.log(buttonRef.current.classList); // TODO: remove. For debugging purposes only.
    }

    return (
    <li className="result-item">
        <button onClick={event => handleSelected(event)} ref={buttonRef}>
            <article className="result-card">
                {result.poster_path ? <img src={src} alt={result.title} className="result-image"/> : <PlaceholderImage />}
                <h2>{result.title}</h2>
                <h3>{date}</h3>
            </article>
        </button>
    </li>
    )
}

export default ResultCard;
