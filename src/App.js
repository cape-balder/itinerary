import React from 'react'
import './App.css'
import Map from './components/Map'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { updateMaker } from './stores/Locations'
import { LOCATION_DATAS, BTSLocationSet } from './assets/data'

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  z-index: 2;
  width: 100%;
  background: #3c3c3c94;
  padding: 28px 0 20px;
  ._rails-container {
    border-left: 3px solid white;
    max-width: 684px;
    margin-left: 16px;
  }
`
const Link = styled.a`
  z-index: 3;
  background: white;
  padding: 8px;
  border-radius: 12px;
  margin: 0 4px;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 12px;
  &:hover,
  &:focus {
    box-shadow: 0 0 7px grey;
  }
  &._active {
    background: #ffc800;
  }
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
    const BTS_MAP = Object.keys(BTSLocationSet.marker)
    const { collections } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <Map height="768px" width="100%" disableUI markerable />
        </header>
        <Container>
          {LOCATION_DATAS.map(place => (
            <Link
              className={place.from === collections.from ? '_active' : ''}
              onClick={() => this.handleClick(place)}
            >
              {place.from}
            </Link>
          ))}
          <div className="_rails-container">
            {BTS_MAP.map(key => {
              const marker = BTSLocationSet.marker[key]
              return (
                <Link
                  className={marker.from === collections.from ? '_active' : ''}
                  onClick={() => this.handleClick(marker)}
                >
                  {marker.from}
                </Link>
              )
            })}
          </div>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    collections: state.locations.marker
  }
}
export default connect(mapStateToProps)(App)
