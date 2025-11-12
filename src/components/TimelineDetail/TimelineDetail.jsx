import TimelineMovie from "../TimelineMovie/TimelineMovie";
import "./TimelineDetail.css";
import TimelineProgress from "../TimelineProgress";

function TimelineDetail({
    timeline,
    setSelectedTimeline,
    timelines,
    setTimelines,
}) {

    const wantToWatchMovies = timeline.movies.filter(movie => movie.status === "want-to-watch");
    const watchingMovies = timeline.movies.filter(movie => movie.status === "watching");
    const completedMovies = timeline.movies.filter(movie => movie.status === "completed");

    return (
        <>
            <h2 className="timeline-name">{timeline.name}</h2>
            {timeline.movies.length > 0 && <TimelineProgress movies={timeline.movies} />}
            <section className="timeline-section timeline-section__want-to-watch">
                <div className="timeline-section__header">
                    <h3 className="timeline-section__heading">Want to Watch</h3>
                    <h4 className="timeline-section__subheading">Destination Time</h4>
                </div>
                {wantToWatchMovies.length === 0 && <p>No pending movies yet.</p>}
                <ul className="timeline-movie-list">
                    {wantToWatchMovies.map(movie => {
                        return <li key={movie.id}>
                            <TimelineMovie
                                movie={movie}
                                timeline={timeline}
                                setSelectedTimeline={setSelectedTimeline}
                                timelines={timelines}
                                setTimelines={setTimelines}
                            />
                        </li>
                    })}
                </ul>
            </section>
            <section className="timeline-section timeline-section__watching">
                <div className="timeline-section__header">
                    <h3 className="timeline-section__heading">Currently Watching</h3>
                    <h4 className="timeline-section__subheading">Present Time</h4>
                </div>
                {watchingMovies.length === 0 && <p>Not watching any movies at the moment.</p>}
                <ul className="timeline-movie-list">
                    {watchingMovies.map(movie => {
                        return <li key={movie.id}>
                            <TimelineMovie
                                movie={movie}
                                timeline={timeline}
                                setSelectedTimeline={setSelectedTimeline}
                                timelines={timelines}
                                setTimelines={setTimelines}
                            />
                        </li>
                    })}
                </ul>
            </section>
            <section className="timeline-section timeline-section__completed">
                <div className="timeline-section__header">
                    <h3 className="timeline-section__heading">Completed</h3>
                    <h4 className="timeline-section__subheading">Last Time Departed</h4>
                </div>
                {completedMovies.length === 0 && <p>No completed movies yet.</p>}
                <ul className="timeline-movie-list">
                    {completedMovies.map(movie => {
                        return <li key={movie.id}>
                            <TimelineMovie
                                movie={movie}
                                timeline={timeline}
                                setSelectedTimeline={setSelectedTimeline}
                                timelines={timelines}
                                setTimelines={setTimelines}
                            />
                        </li>
                    })}
                </ul>
            </section>
        </>
    );
}

export default TimelineDetail;
