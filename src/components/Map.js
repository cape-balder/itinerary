import React from 'react'
import MapCell from './MapRoot'
import styled from 'styled-components'
import { latLongFinder } from '../method/LatLongFinder'

const INIT_LOCATION = {
  from: 'Neo4Map',
  fromTerminal: {
    coordinate: {
      lat: '13.740596',
      lng: '100.562926'
    }
  }
}

const Map = ({
  collection,
  zoom,
  markerable,
  height,
  width,
  mapType,
  disableUI,
  mapStyling,
  noPath,
  adjust
}) => {
  const location =
    collection !== undefined ? latLongFinder(collection) : INIT_LOCATION

  let Height = height !== undefined ? height : '610px'
  let Width = width !== undefined ? width : '356px'
  let Position = adjust !== undefined ? 'static' : 'fixed'

  const MapContainer = styled.div`
    vertical-align: top;
    display: inline-block;
    position: ${Position};
    height: ${Height};
    width: ${Width};
  `
  return (
    <MapContainer>
      <MapCell
        location={location.coordinate}
        fromLocation={location.from}
        toLocation={location.to}
        zoom={zoom}
        markerable={markerable}
        mapType={mapType}
        disableUI={disableUI}
        mapStyling={mapStyling}
        noPath={noPath}
        containerElement={
          <div style={{ height: `${height}`, width: `${width}` }} />
        }
      />
    </MapContainer>
  )
}

export default Map
