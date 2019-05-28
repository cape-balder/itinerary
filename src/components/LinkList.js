import React from 'react'
import { connect } from 'react-redux'

import { BTSLocationSet } from '../assets/data'
import { Link } from '../styles/Link'

class LinkList extends React.Component {
  componentDidMount() {}
  render() {

    const BTS_MAP = Object.keys(BTSLocationSet.marker)
    const { collections } = this.props

    return BTS_MAP.map(key => {
                // marker คือ value ของ key
                const marker = BTSLocationSet.marker[key]
                return (
                <Link label={marker.from} isActive={marker.from === collections.from} 
                    //onClick = {() => this.handleClick(marker)} 
                    />
                )
           });
  }
}

function mapStateToProps(state) {
  return {
    collections: state.locations.marker
  }
}

// export default LinkList
export default connect(mapStateToProps)(LinkList)
