import axios from 'axios'
import {gameDetailsURL, gameScreenshotURL} from '../api'

export const loadDetails = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id))
  const screenshotsData = await axios.get(gameScreenshotURL(id))
  
  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data
    }
  })
}