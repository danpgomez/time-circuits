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
                return {
                    ...timeline,
                    movies: [...timeline.movies, ...selectedItems]
                };
            }

            return timeline;
        });

        setTimelines(updatedTimelines);
        // setSelectedItems([]);
        // setResults([]);
        setStatus("idle");
    }

    return (
        <form name="add-to-timeline-form" action="" onSubmit={event => addSelectedToTimeline(event)}>
            <select name="timeline-selection" id="timeline-selection">
                <option value="">-- Please select a Timeline --</option>
                {timelines.map(timeline => <option value={timeline.id} key={timeline.id}>{timeline.name}</option>)}
            </select>
            <button type="submit">Add to Timeline</button>
        </form>
    );
}

export default TimelineSelection;
