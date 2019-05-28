import React from 'react'
import styled from 'styled-components'
import { measureTotal } from '../method/MeasureDistance'
import { connect } from 'react-redux'

const DescribeStyle = styled.div`
position: absolute;
top: 10vh;
right: 2vw;
height: 70vh;
width: 280px;
background: white;
z-index: 2;
border-radius: 7px;
text-align: left;
overflow-y: scroll;
._pad {
  padding: 20px;
}
h3 {
  margin: 0;
  font-size: 15px;
}
h1 {
  margin: 0;
  font-size: 22px;
  ._blog-color {
    width: 20px;
    height: 20px;
    margin-right: 2px;
    display: inline-block;
    vertical-align: middle;
  }
}
ul {
  margin-top: 8px;
  padding-left: 22px;
  li {
  }
}
`

const Describe = (props) =>
{
    return (
        <DescribeStyle>
            <div className="_pad">
            <h1>
                <span
                className="_blog-color"
                style={{ background: props.collections.bg }}
                />{' '}
                {props.collections.from}
            </h1>
            <div style={{ marginTop: '7px' }}>
                <h3>รวมทั้งหมด {props.collections.coordinate.length}สถานี</h3>
                <h3>
                ระยะทางประมาณ {measureTotal(props.collections.coordinate)} กม.
                </h3>
            </div>

            <ul>
                {props.collections.coordinate.map(mark => (
                <li>{mark.name}</li>
                ))}
            </ul>
            </div>
        </DescribeStyle>
    );
}

function mapStateToProps(state) {
  return {
    collections: state.locations.marker
  }
}

// export default Map
export default connect(mapStateToProps)(Describe)