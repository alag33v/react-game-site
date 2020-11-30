const base_url = 'https://api.rawg.io/api/'

const getCurrentDay = () => {
  const day = new Date().getDate()
  
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}

const currentDay = getCurrentDay()
const currentMonth = getCurrentMonth()
const currentYear = new Date().getFullYear()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=+rating&page_size=12`
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12`
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const newGamesURL = () => `${base_url}${new_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`

export const gameDetailsURL = (gameId) => `${base_url}games/${gameId}`

export const gameScreenshotURL = (gameId) => `${base_url}games/${gameId}/screenshots`
