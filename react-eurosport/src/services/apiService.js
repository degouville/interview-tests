import axios from 'axios'
import { countBy } from 'lodash'
import config from '../config'

const { apiUrl } = config
const countWinsAndLosses = ({ data, ...player }) => ({
  ...player,
  data: {
    wins: countBy(data.last, Math.floor)[1],
    losses: countBy(data.last, Math.floor)[0],
    ...data
  },
})


export default {
  async fetchPlayers() {
    const { data } = await axios.get(apiUrl)
    const { players } = data
    return players
      .map(countWinsAndLosses)
  }
}
