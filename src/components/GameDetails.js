import {useSelector} from 'react-redux'
import {motion} from 'framer-motion'
import styled from 'styled-components'

const GameDetails = () => {
  const {game, screenshots, isLoading} = useSelector(state => state.details)
  
  return (
    <>
      {!isLoading && (
        <CardShadow>
          <Details>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map(data => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt=""/>
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map(screen => (
                <img src={screen.image} alt="" key={screen.id}/>
              ))}
            </div>
          </Details>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  position: fixed;
  overflow-y: scroll;
  min-height: 100vh;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`

const Details = styled(motion.div)`
  width: 80%;
  color: #000;
  background-color: #fff;
  border-radius: 15px;
  padding: 25px 75px;
  left: 10%;
  position: absolute;
  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Info = styled(motion.div)`
  text-align: center;
`

const Platforms = styled(motion.div)`
  display: flex;
  h3 {
    margin-right: 60px;
    &:last-child {
    margin-right: 0;
    }
  }
  img {
    margin-left: 35px;
  }
`

const Media = styled(motion.div)`
  margin-top: 25px;
  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`

const Description = styled(motion.div)`
  margin: 50px 0;
`

export default GameDetails