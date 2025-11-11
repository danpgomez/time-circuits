import "./TimelineSelection.css";

function TimelineSelection({
    selectedItems,
    setSelectedItems,
    timelines,
    setTimelines,
    setResults,
    setStatus
}) {
    function addSelectedToTimeline(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const selectedTimelineId = formData.get("timeline-selection");

        const updatedTimelines = timelines.map(timeline => {

            if (timeline.id === selectedTimelineId) {
                const existingIds = new Set(timeline.movies.map(movie => movie.id));
                const newMovies = selectedItems.filter(item => !existingIds.has(item.id));

                return {
                    ...timeline,
                    movies: [...timeline.movies, ...newMovies]
                };
            }

            return timeline;
        });

        setTimelines(updatedTimelines);
        setSelectedItems([]);
        // setResults([]);
        setStatus("idle");
    }

    return (
        <form name="add-to-timeline-form" className="add-to-timeline-form" action="" onSubmit={event => addSelectedToTimeline(event)}>
            <select name="timeline-selection" id="timeline-selection">
                <option value="">-- Select Timeline --</option>
                {timelines.map(timeline => <option value={timeline.id} key={timeline.id}>{timeline.name}</option>)}
            </select>
            <button type="submit">Add to Timeline</button>
        </form>
    );
}

export default TimelineSelection;
