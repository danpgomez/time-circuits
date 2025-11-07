import React from "react";
import './App.css'
import Search from "./components/Search";
import ResultsGrid from './components/ResultsGrid';

function App() {
  const [results, setResults] = React.useState([])
  
  return (
    <>
      <Search setResults={ setResults }/>
      <ResultsGrid searchResults={ results } />
    </>
  )
}

export default App
