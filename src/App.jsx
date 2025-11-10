import React from "react";
import './App.css'
import Search from "./components/Search";
import ResultsGrid from './components/ResultsGrid';
import TimelineForm from "./components/TimelineForm";
import TimelinesList from "./components/TimelinesList";
import TimelineSelection from "./components/TimelineSelection";

function App() {
  const [results, setResults] = React.useState([])
  const [status, setStatus] = React.useState("idle");
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [timelines, setTimelines] = React.useState([]);

  console.log(timelines);
  
  return (
    <>
      <header>
        <Search
          setResults={setResults}
          status={status}
          setStatus={setStatus}
        />
        <TimelineForm timelines={timelines} setTimelines={setTimelines}/>
      </header>
      <main>
        {
          selectedItems.length > 0 && 
          <TimelineSelection 
            selectedItems={selectedItems} 
            setSelectedItems={setSelectedItems}
            timelines={timelines} 
            setTimelines={setTimelines} 
            setResults={setResults}
            setStatus={setStatus}
          />
        }
        <TimelinesList timelines={timelines}/>

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
