import React from 'react'
import logo from './logo.svg'
import './App.css'
import Map from './components/Map'

const INIT_LOCATION = {
  from: 'Neo4Map',
  fromTerminal: {
    coordinate: {
      lat: '13.740596',
      lng: '100.562926'
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map
          collection={INIT_LOCATION}
          height="768px"
          width="100%"
          zoom="6"
          disableUI
          markerable
        />
      </header>
    </div>
  )
}

export default App
