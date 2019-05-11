import React from 'react'
import './App.css'
import Map from './components/Map'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { updateMaker } from './stores/Locations'
import { LOCATION_DATAS, MRT_BLUE } from './assets/data'

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Link = styled.a`
  z-index: 3;
  background: white;
  padding: 14px;
  border-radius: 12px;
  margin: 0 6px;
  cursor: pointer;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.props.dispatch(updateMaker(e))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Map height="768px" width="100%" disableUI markerable />
        </header>
        <Container>
          {LOCATION_DATAS.map(place => (
            <Link onClick={() => this.handleClick(place)}>{place.from}</Link>
          ))}
          <Link onClick={() => this.handleClick(MRT_BLUE)}>MRT_BLUE_LINE</Link>
        </Container>
      </div>
    )
  }
}

export default connect()(App)
