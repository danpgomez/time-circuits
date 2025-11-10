import "./TimelinesList.css";

function TimelinesList({ timelines, setSelectedTimeline }) {
    function handleSelectTimeline(timeline) {
        setSelectedTimeline(timeline);
    }

    return (
        <ul className="timelines-list">
            {timelines.map(timeline => {
                return <li key={timeline.id}>
                    <button
                        onClick={() => handleSelectTimeline(timeline)}
                    >{timeline.name}
                    </button>
                </li>
            })}
        </ul>
    );
}

export default TimelinesList;
