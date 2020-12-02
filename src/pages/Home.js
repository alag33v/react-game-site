import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {loadGames} from '../actions/gamesAction'
import Game from '../components/Game'
import GameDetails from '../components/GameDetails'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import {fadeIn} from '../animations'
import styled from 'styled-components'

const Home = () => {
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  
  const {popularGames2020, popularGames2010_2019, popularGames2000_2009, searchedGames} = useSelector(state => state.games)
  
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId}/>}
        </AnimatePresence>
        {searchedGames.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searchedGames.map(game => <Game name={game.name} released={game.released}
                                               image={game.background_image}
                                               id={game.id} key={game.id}/>)}
            </Games>
          </div>
        ) : ''}
        <h2>Popular Games 2020</h2>
        <Games>
          {popularGames2020.map(game => <Game name={game.name} released={game.released} image={game.background_image}
                                              id={game.id} key={game.id}/>)}
        </Games>
        <h2>Popular Games 2010 - 2019</h2>
        <Games>
          {popularGames2010_2019.map(game => <Game name={game.name} released={game.released}
                                                   image={game.background_image} id={game.id} key={game.id}/>)}
        </Games>
        <h2>Popular Games 2000 - 2009</h2>
        <Games>
          {popularGames2000_2009.map(game => <Game name={game.name} released={game.released}
                                                   image={game.background_image} id={game.id} key={game.id}/>)}
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
  @media (max-width: 780px) {
    padding: 0 25px;
    h2 {
      text-align: center;
    }
  }
`

const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 35px;
  grid-row-gap: 60px;
  min-height: 80vh;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`

export default Home