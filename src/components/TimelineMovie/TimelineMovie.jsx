import { useRef } from "react";
import PlaceholderImage from "../PlaceholderImage";
import "./TimelineMovie.css";

function TimelineMovie({ movie }) {
    console.log(movie);
    const src = `https://image.tmdb.org/t/p/original/${movie.posterPath}`;
    const buttonRef = useRef();

    function handleSelected() {
        console.log(buttonRef);
    }

    return <button onClick={handleSelected} ref={buttonRef}>
            <article className="movie-card">
                {movie.posterPath ? <img src={src} alt={movie.title} className="movie-image"/> : <PlaceholderImage />}
                <h2>{movie.title}</h2>
                <h3>{movie.dateAdded}</h3>
            </article>
        </button>
}

export default TimelineMovie;
