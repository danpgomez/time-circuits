import PlaceholderImage from "../PlaceholderImage";
import "./TimelineMovie.css";

function TimelineMovie({ 
    movie, 
    timeline, 
    setSelectedTimeline,
    timelines,
    setTimelines
}) {
    const src = `https://image.tmdb.org/t/p/original/${movie.posterPath}`;

    function deleteMovie() {
        const newMovies = timeline.movies.filter(timelineMovie => timelineMovie.id !== movie.id);
        updateTimelines(newMovies)
    }

    function updateMovieStatus(event) {
        const updatedMovie = {
            ...movie,
            status: event.target.value
        };

        const newMovies = timeline.movies.map(movie => {
            if (movie.id === updatedMovie.id) {
                return updatedMovie;
            } else {
                return movie;
            }
        });

        updateTimelines(newMovies);
    }

    function updateTimelines(newMovies) {
        const updatedTimeline = {
            ...timeline,
            movies: newMovies
        };

        setSelectedTimeline(updatedTimeline);

        const updatedTimelines = timelines.map(existingTimeline => {
            if (existingTimeline.id === timeline.id) {
                return updatedTimeline;
            } else {
                return existingTimeline;
            }
        });

        setTimelines(updatedTimelines);
    }

    return <article className="movie-card">
            {movie.posterPath ? <img src={src} alt={movie.title} className="movie-image" /> : <PlaceholderImage />}
            <h2>{movie.title}</h2>
            <h3>Date Added: {movie.dateAdded}</h3>
            <select 
                className="movie-status" 
                value={movie.status}
                onChange={event => updateMovieStatus(event)}
            >
                <option value="want-to-watch">Want to Watch</option>
                <option value="watching">Watching</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={deleteMovie}>Delete</button>
        </article>
}

export default TimelineMovie;
