import React from "react";
import './App.css'
import Search from "./components/Search";
import ResultsGrid from './components/ResultsGrid';

function App() {
  const [results, setResults] = React.useState([])
  const [status, setStatus] = React.useState("idle");
  const [selectedItems, setSelectedItems] = React.useState([]); 
  
  return (
    <>
      <Search 
        setResults={ setResults } 
        status={ status } 
        setStatus={ setStatus } 
      />
      <ResultsGrid 
        searchResults={ results } 
        status={ status }
        selectedItems={ selectedItems }
        setSelectedItems={ setSelectedItems }
      />
    </>
  )
}

export default App
