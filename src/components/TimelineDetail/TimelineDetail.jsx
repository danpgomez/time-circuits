import TimelineMovie from "../TimelineMovie/TimelineMovie";
import "./TimelineDetail.css";
import TimelineProgress from "../TimelineProgress";

function TimelineDetail({ 
    timeline, 
    setSelectedTimeline,
    timelines,
    setTimelines,
}) {
    return (
        <>
            <h2 className="timeline-name">{timeline.name}</h2>
            {timeline.movies.length > 0 && <TimelineProgress movies={timeline.movies} />}
            <ul className="timeline-movie-list">
                {timeline.movies.map(movie => {
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
        </>
    );
}

export default TimelineDetail;
