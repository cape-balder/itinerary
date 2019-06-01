import React from 'react'
import './App.css'
import Map from './components/Map'


import Describe from './styles/Describe'
import { Container } from './styles/Container'
import LinkList from './styles/LinkList'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // Chan
  // ComponentDid* --> อยู่ใน react life cycle
  // Didmount runt ก่อน render
  componentDidMount() {}
  // render จะดักฟังว่า prop มีการเปลี่ยนแปลง เมื่อ prop เปลี่ยนก็จะ rerender
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* connect กะ redux อยู่แล้ว เลยไม่ใช้ clooections */}
          <Map height="768px" width="100%" disableUI markerable />
        </header>
        {/* // Chan */}
        {/* // Trigger */}
        <Describe/>   
        <Container>
          <div className="_transit-tag">
            BANGKOK
            <br />
            <span>2030</span>
          </div>
          <div className="_rails-container">
            <LinkList/>
          </div>
        </Container>
      </div>
    )
  }
}

export default App
