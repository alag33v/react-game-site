import axios from 'axios'
import {popularGames2020URL, popularGames2010_2019URL, popularGames2000_2009URL, searchGameURL} from '../api'

export const loadGames = () => async (dispatch) => {
  const popularGames2000_2009Data = await axios.get(popularGames2000_2009URL())
  const popularGames2010_2019Data = await axios.get(popularGames2010_2019URL())
  const popularGames2020Data = await axios.get(popularGames2020URL())
  
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames2000_2009: popularGames2000_2009Data.data.results,
      popularGames2010_2019: popularGames2010_2019Data.data.results,
      popularGames2020: popularGames2020Data.data.results
    }
  })
}

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchGameData = await axios.get(searchGameURL(gameName))
  
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searchedGames: searchGameData.data.results
    }
  })
}