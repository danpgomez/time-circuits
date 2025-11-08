import React from "react";
import './App.css'
import Search from "./components/Search";
import ResultsGrid from './components/ResultsGrid';
import TimelineForm from "./components/TimelineForm";
import TimelinesList from "./components/TimelinesList";

function App() {
  const [results, setResults] = React.useState([])
  const [status, setStatus] = React.useState("idle");
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [timelines, setTimelines] = React.useState([]);
  const [showTimelineForm, setShowTimelineForm] = React.useState(false);

  function handleTimelineFormDisplay() {
    setShowTimelineForm(!showTimelineForm);
  }
  
  return (
    <>
      <header>
        <Search
          setResults={setResults}
          status={status}
          setStatus={setStatus}
        />
        <button className="new-timeline-button" onClick={handleTimelineFormDisplay}>New Timeline</button>
        {showTimelineForm && <TimelineForm timelines={timelines} setTimelines={setTimelines} />}
      </header>
      <main>
        <TimelinesList timelines={timelines}/>
        <ResultsGrid
          searchResults={results}
          status={status}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </main>
    </>
  )
}

export default App
