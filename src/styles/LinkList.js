import React from 'react'
import { connect } from 'react-redux'
import { BTSLocationSet } from '../assets/data'
import { Link } from './Link'
import { updateMaker } from '../stores/Locations'

import axios from 'axios'
import { fetchData } from '../stores/BTSLocationSet'




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
    if (markerSet == null) return null

    const BTS_MAP = Object.keys(markerSet)
    return BTS_MAP.map(key => {
                // marker คือ value ของ key
                const marker = markerSet[key]
                return (
                <Link label={marker.from} isActive={marker.from === collections.from} 
                    onClick = {() => this.handleClick(marker)} 
                    />
                )
           });
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
