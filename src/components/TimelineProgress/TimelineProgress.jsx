import "./TimelineProgress.css";

function TimelineProgress({ movies }) {

    const watchedMovies = movies.filter(movie => movie.status === "completed").length;
    const progress = Math.round(watchedMovies/movies.length * 100);
           
    return <p className="timeline-progress">{progress}% completed</p>
}

export default TimelineProgress;
