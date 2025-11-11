import "./TimelinesList.css";

function TimelinesList({ timelines, setSelectedTimeline, setStatus }) {
    function handleSelectTimeline(timeline) {
        setStatus("idle");
        setSelectedTimeline(timeline);
    }

    if (timelines.length === 0) {
        return <div className="timelines-list timelines-list--empty">
            <p className="timelines-list__message">
                No timelines yet. Create one to get started!
            </p>
        </div>
    }

    return (
        <div className="timelines-list">
            <h2 className="timelines-list__heading">My Timelines:</h2>
            <ul className="timelines-list__items">
                {timelines.map(timeline => {
                    return <li key={timeline.id} className="timelines-list__item">
                        <button
                            className="timelines-list__button"
                            onClick={() => handleSelectTimeline(timeline)}
                        ><span className="timelines-list__name">{timeline.name}</span>
                        <span className="timelines-list__count">{timeline.movies.length}</span>
                        </button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default TimelinesList;
