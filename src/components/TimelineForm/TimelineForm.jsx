function TimelineForm({ setTimelines }) {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newTimeline = {
            id: crypto.randomUUID(),
            name: formData.get("timeline-name"),
            movies: []
        };
        setTimelines(newTimeline);
    }

    return <form action="" className="timeline-form" onSubmit={event => handleSubmit(event)}>
        <h2>Create a Timeline</h2>
        <label htmlFor="timeline-name">Timeline Name</label>
        <input
            type="text"
            id="timeline-name"
            name="timeline-name"
            placeholder="Action Films"
        />
        <button>Create Timeline</button>
    </form>
}

export default TimelineForm;
