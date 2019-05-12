import { MRT_PURPLE, MRT_PURPLE_COLOR } from './RAILS/Purple'
import { MRT_BLUE, MRT_BLUE_COLOR } from './RAILS/Blue'
import { MRT_GREY, MRT_GREY_COLOR } from './RAILS/Grey'
import { MRT_YELLOW, MRT_YELLOW_COLOR } from './RAILS/YELLOW'
import { MRT_ARL, MRT_ARL_COLOR } from './RAILS/ARL'
import { MRT_ORANGE, MRT_ORANGE_COLOR } from './RAILS/ORANGE'
import { MRT_CYAN, MRT_CYAN_COLOR } from './RAILS/CYAN'
import { MRT_BROWN, MRT_BROWN_COLOR } from './RAILS/BROWN'
import { MRT_PINK, MRT_PINK_COLOR } from './RAILS/PINK'
import { SARL_WEST, SARL_WEST_COLOR } from './RAILS/SARL_WEST'
import { SARL_NORTH, SARL_NORTH_COLOR } from './RAILS/SARL_NORTH'
import {
  SARL_TRANSIT_ORANGE,
  SARL_TRANSIT_ORANGE_COLOR
} from './RAILS/SARL_TRANSIT_ORANGE'
import {
  SARL_TRANSIT_MAKKASAN,
  SARL_TRANSIT_MAKKASAN_COLOR
} from './RAILS/SARL_TRANSIT_MAKKASAN'
import { BTS_NORTH, BTS_NORTH_COLOR } from './RAILS/BTS_NORTH'
import { BTS_SOUTH, BTS_SOUTH_COLOR } from './RAILS/BTS_SOUTH'
import { BTS_EAST, BTS_EAST_COLOR } from './RAILS/BTS_EAST'
import { BRT, BRT_COLOR } from './RAILS/BRT'

export const BTSLocationSet = {
  center: { lat: 13.72906, lng: 100.53616 },
  markerColor: {
    ...BRT_COLOR,
    ...MRT_BLUE_COLOR,
    ...MRT_GREY_COLOR,
    ...MRT_PURPLE_COLOR,
    ...MRT_YELLOW_COLOR,
    ...MRT_ARL_COLOR,
    ...MRT_ORANGE_COLOR,
    ...MRT_CYAN_COLOR,
    ...MRT_BROWN_COLOR,
    ...MRT_PINK_COLOR,
    ...SARL_WEST_COLOR,
    ...SARL_NORTH_COLOR,
    ...SARL_TRANSIT_ORANGE_COLOR,
    ...SARL_TRANSIT_MAKKASAN_COLOR,
    ...BTS_NORTH_COLOR,
    ...BTS_SOUTH_COLOR,
    ...BTS_EAST_COLOR
  },
  marker: {
    ...BTS_NORTH,
    ...BTS_SOUTH,
    ...BTS_EAST,
    ...BRT,
    ...MRT_BLUE,
    ...MRT_ARL,
    ...MRT_BROWN,
    ...MRT_PURPLE,
    ...MRT_GREY,
    ...MRT_YELLOW,
    ...MRT_ORANGE,
    ...MRT_CYAN,
    ...MRT_PINK,
    ...SARL_WEST,
    ...SARL_NORTH,
    ...SARL_TRANSIT_ORANGE,
    ...SARL_TRANSIT_MAKKASAN
  }
}

export const DEFAULT_LOCATION = {
  type: 'marker',
  from: 'KOHLIFE.COM',
  fromTerminal: {
    coordinate: {
      lat: '13.740596',
      lng: '100.562926'
    }
  }
}

export const LOCATION_DATAS = [
  {
    type: 'marker',
    from: 'Chiangmai',
    fromTerminal: {
      coordinate: {
        lat: '18.796143',
        lng: '98.979263'
      }
    }
  },
  {
    type: 'marker',
    from: 'Bangkok',
    fromTerminal: {
      coordinate: {
        lat: '13.740596',
        lng: '100.562926'
      }
    }
  },
  {
    type: 'marker',
    from: 'Phuket',
    fromTerminal: {
      coordinate: {
        lat: '7.878978',
        lng: '98.398392'
      }
    }
  }
]
