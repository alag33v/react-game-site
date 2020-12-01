import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {loadGames} from '../actions/gamesAction'
import Game from '../components/Game'
import GameDetails from '../components/GameDetails'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import styled from 'styled-components'

const Home = () => {
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  
  const {popularGames, newGames, upcomingGames} = useSelector(state => state.games)
  
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId}/>}
        </AnimatePresence>
        <h2>Popular Games</h2>
        <Games>
          {popularGames.map(game => <Game name={game.name} released={game.released} image={game.background_image}
                                          id={game.id} key={game.id}/>)}
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map(game => <Game name={game.name} released={game.released} image={game.background_image}
                                           id={game.id} key={game.id}/>)}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(game => <Game name={game.name} released={game.released} image={game.background_image}
                                      id={game.id} key={game.id}/>)}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0 50px;
  h2 {
    padding: 50px 0;
  }
`

const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 35px;
  grid-row-gap: 60px;
  min-height: 80vh;
`

export default Home