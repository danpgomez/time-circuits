import TimelineMovie from "../TimelineMovie/TimelineMovie";
import "./TimelineDetail.css";

function TimelineDetail({ timeline }) {
    return (
        <>
            <h3>{timeline.name}</h3>
            <ul className="timeline-movie-list">
                {timeline.movies.map(movie => <li><TimelineMovie movie={movie}/></li>)}
            </ul>
        </>
    );
}

export default TimelineDetail;
