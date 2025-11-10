import { useRef } from "react";
import "./ResultCard.css";
import "../PlaceholderImage";
import PlaceholderImage from "../PlaceholderImage";

function ResultCard({ result, selectedItems, setSelectedItems }) {
    const src = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
    const date = result.release_date.split("-")[0];
    const buttonRef = useRef();

    function handleSelected() {
        buttonRef.current.classList.toggle("selected");
        let isSelected = buttonRef.current.classList.contains("selected");
        const selectedMovie = {
            id: result.id,
            title: result.title,
            posterPath: result.poster_path,
            status: "want-to-watch",
            rating: null,
            dateAdded: new Date().toLocaleDateString() 
        }
        
        if (isSelected && !selectedItems.includes(selectedMovie.id)) {
            setSelectedItems([...selectedItems, selectedMovie]);
        } else {
            const filteredSelectedItems = [...selectedItems].filter(item => item.id !== result.id);
            setSelectedItems(filteredSelectedItems);
        }
    }

    return (
    <li className="result-item">
        <button onClick={handleSelected} ref={buttonRef}>
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
