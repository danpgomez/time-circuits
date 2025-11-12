import React from "react";
import './App.css'
import Search from "./components/Search";
import ResultsGrid from './components/ResultsGrid';
import TimelineForm from "./components/TimelineForm";
import TimelinesList from "./components/TimelinesList";
import TimelineSelection from "./components/TimelineSelection";
import TimelineDetail from "./components/TimelineDetail/TimelineDetail";

function App() {
  const [results, setResults] = React.useState([])
  const [status, setStatus] = React.useState("idle");
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [timelines, setTimelines] = React.useState([]);
  const [selectedTimeline, setSelectedTimeline] = React.useState("");

  return (
    <>
      <header>
        <h1 id="logo">Time Circuits</h1>
        <div className="controls">
          <div className="controls-timeline-creation">
            <TimelineForm timelines={timelines} setTimelines={setTimelines} />
            <Search
              setResults={setResults}
              status={status}
              setStatus={setStatus}
              setSelectedTimeline={setSelectedTimeline}
            />
          </div>
        </div>
      </header>
      <nav className="timeline-bar">
        <TimelinesList
          timelines={timelines}
          setSelectedTimeline={setSelectedTimeline}
          setStatus={setStatus}
        />
      </nav>
      {timelines.length > 0 && selectedItems.length > 0 &&
        <section className="action-bar">
          <TimelineSelection
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            timelines={timelines}
            setTimelines={setTimelines}
            setResults={setResults}
            setStatus={setStatus}
          />
        </section>
      }
      <main>

        {selectedTimeline && <TimelineDetail
          timeline={selectedTimeline}
          setSelectedTimeline={setSelectedTimeline}
          timelines={timelines}
          setTimelines={setTimelines}
        />}

        {(status == "error" || !results) && <p className="error-message">Oops! Something went wrong</p>}
        {(status == "success" && results.length === 0) && <p className="error-message">No results found</p>}

        {(status == "success" && results.length !== 0) && <ResultsGrid
          searchResults={results}
          status={status}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />}
      </main>
    </>
  )
}

export default App
