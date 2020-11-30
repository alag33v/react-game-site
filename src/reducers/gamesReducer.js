const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: []
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popularGames: action.payload.popularGames,
        newGames: action.payload.newGames,
        upcomingGames: action.payload.upcomingGames
      }
    default:
      return {...state}
  }
}

export default gamesReducer