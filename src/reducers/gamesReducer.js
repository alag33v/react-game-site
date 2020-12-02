const initialState = {
  popularGames2000_2009: [],
  popularGames2010_2019: [],
  popularGames2020: [],
  searchedGames: []
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popularGames2000_2009: action.payload.popularGames2000_2009,
        popularGames2010_2019: action.payload.popularGames2010_2019,
        popularGames2020: action.payload.popularGames2020
      }
    case "FETCH_SEARCHED":
      return {
        ...state,
        searchedGames: action.payload.searchedGames
      }
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searchedGames: []
      }
    default:
      return {...state}
  }
}

export default gamesReducer