import React from 'react'
import './App.css'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map height="768px" width="100%" zoom="6" disableUI markerable />
      </header>
    </div>
  )
}

export default App
