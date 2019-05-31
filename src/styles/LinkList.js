import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

import { BTSLocationSet } from '../assets/data'
import { fetchData } from '../stores/BTSLocationSet'
import { Link } from './Link'
import { updateMaker } from '../stores/Locations'


class LinkList extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.dispatch(updateMaker(e))
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/marker`)
    .then(
      (res) => { 
        this.props.dispatch(fetchData(res.data))
      },
	    (err) => { console.log(err)  }
    )
  }

  render() {
    
      const { collections, markerSet } = this.props
      console.log(markerSet)

      //if(markerSet != null) {
          const BTS_MAP = Object.keys(BTSLocationSet.marker)

          return BTS_MAP.map(key => {
                      // marker คือ value ของ key
                      const marker = BTSLocationSet.marker[key]
                      return (
                      <Link label={marker.from} isActive={marker.from === collections.from} 
                          onClick = {() => this.handleClick(marker)} 
                          />
                      )
                });
      //} else { 
        //return null 
      //}
  }
}

function mapStateToProps(state) {
  return {
    collections: state.locations.marker,
    markerSet: state.BTSLocationSet.routeData
  }
}

// export default LinkList
export default connect(mapStateToProps)(LinkList)
