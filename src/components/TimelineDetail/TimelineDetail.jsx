import TimelineMovie from "../TimelineMovie/TimelineMovie";
import "./TimelineDetail.css";

function TimelineDetail({ 
    timeline, 
    setSelectedTimeline,
    timelines,
    setTimelines,
}) {
    return (
        <>
            <h3>{timeline.name}</h3>
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
