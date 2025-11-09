import { useRef } from "react";
import "./TimelineForm.css";

function TimelineForm({ timelines, setTimelines }) {
    const dialogRef = useRef();

    function handleTimelineFormDisplay() {
        if (!dialogRef.current.open) {
            dialogRef.current.showModal();
        }
    }

    function closeDialog() {
        if (dialogRef.current.open) {
            dialogRef.current.close();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newTimeline = {
            id: crypto.randomUUID(),
            name: formData.get("timeline-name"),
            movies: []
        };
        setTimelines([...timelines, newTimeline]);
        closeDialog();
    }

    return <>
        <button className="new-timeline-button" onClick={handleTimelineFormDisplay}>New Timeline</button>
        <dialog className="timeline-dialog" id="timeline-dialog" ref={dialogRef}>
            <form action="" className="timeline-form" onSubmit={event => handleSubmit(event)}>
                <h2>Create a Timeline</h2>
                <label htmlFor="timeline-name">Timeline Name</label>
                <input
                    type="text"
                    id="timeline-name"
                    name="timeline-name"
                    placeholder="Action Films"
                />
                <button type="submit" className="dialog-submit-btn">Create Timeline</button>
                <button type="button" className="dialog-close-btn" onClick={closeDialog}>Close</button>
            </form>
        </dialog>
    </>
}

export default TimelineForm;
