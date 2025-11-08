import "./TimelinesList.css";

function TimelinesList({ timelines }) {
    return (
        <ul className="timelines-list">
            {timelines.map(timeline => <li key={timeline.id}>{timeline.name}</li>)}
        </ul>
    );
}

export default TimelinesList;
