const base_url = 'https://api.rawg.io/api/'

const popular_games2020 = `games?dates=2020-01-01,2020-12-31&ordering=-added&page_size=9`
const popular_games2010_2019 = `games?dates=2010-01-01,2019-12-31&ordering=-added&page_size=12`
const popular_games2000_2009 = `games?dates=2000-01-01,2009-12-31&ordering=-added&page_size=12`

export const popularGames2020URL = () => `${base_url}${popular_games2020}`
export const popularGames2010_2019URL = () => `${base_url}${popular_games2010_2019}`
export const popularGames2000_2009URL = () => `${base_url}${popular_games2000_2009}`

export const gameDetailsURL = (gameId) => `${base_url}games/${gameId}`
export const gameScreenshotURL = (gameId) => `${base_url}games/${gameId}/screenshots`

export const searchGameURL = (gameName) => `${base_url}games?search=${gameName}&page_size=6`