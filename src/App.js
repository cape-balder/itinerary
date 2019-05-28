import React from 'react'
import './App.css'
import Map from './components/Map'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { updateMaker } from './stores/Locations'
import { LOCATION_DATAS, BTSLocationSet } from './assets/data'
import { measure, measureTotal } from './method/MeasureDistance'

import { Describe } from './styles/Describe'
import { Container } from './styles/Container'
import { Link } from './styles/Link'

class App extends React.Component {
  constructor(props) {
    super(props)
    // ถ้าไม่ bind จะ render รัวๆ
    this.handleClick = this.handleClick.bind(this)
  }
  // Chan
  // dispatch เข้ามาตอน connect
  handleClick(e) {
    this.props.dispatch(updateMaker(e))
  }

  // Chan
  // ComponentDid* --> อยู่ใน react life cycle
  // Didmount runt ก่อน render
  componentDidMount() {}
  // render จะดักฟังว่า prop มีการเปลี่ยนแปลง เมื่อ prop เปลี่ยนก็จะ rerender
  render() {
    const BTS_MAP = Object.keys(BTSLocationSet.marker)
    const { collections } = this.props
    return (
      <div className="App">
        <header className="App-header">
        {/* connect กะ redux อยู่แล้ว เลยไม่ใช้ clooections */}
          <Map height="768px" width="100%" disableUI markerable />
        </header>
        {/* // Chan */}
        {/* // Trigger */}
        {collections.type === 'connected-line' && (
          <Describe collections={collections}/>
        )}
        <Container>
          <div className="_transit-tag">
            BANGKOK
            <br />
            <span>2030</span>
          </div>
          <div className="_rails-container">
            {BTS_MAP.map(key => {
              // marker คือ value ของ key
              const marker = BTSLocationSet.marker[key]
              return (
                <Link label={marker.from} isActive={marker.from === collections.from} 
                  onClick = {() => this.handleClick(marker)} />
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
