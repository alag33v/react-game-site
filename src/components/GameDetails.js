import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../utils'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import steam from '../images/steam.svg'
import playstation from '../images/playstation.svg'
import xbox from '../images/xbox.svg'
import nintendo from '../images/nintendo.svg'
import apple from '../images/apple.svg'
import gamepad from '../images/gamepad.svg'
import starEmpty from '../images/star-empty.svg'
import starFull from '../images/star-full.svg'

const GameDetails = ({pathId}) => {
  const history = useHistory()
  
  const exitDetailsHandler = (e) => {
    const element = e.target
    
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto"
      document.body.style.marginRight = '0'
      history.push('/')
    }
  }
  
  const getStars = () => {
    const stars = []
    const rating = Math.round(game.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} alt=""/>)
      } else {
        stars.push(<img key={i} src={starEmpty} alt=""/>)
      }
    }
    return stars
  }
  
  const getPlatform = (platform) => {
    switch (platform) {
      case "PC":
        return steam
      case "PlayStation 4":
        return playstation
      case "Xbox One":
        return xbox
      case "Nintendo Switch":
        return nintendo
      case "IOS":
        return apple
      default:
        return gamepad
    }
  }
  
  const {game, screenshots, isLoading} = useSelector(state => state.details)
  
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailsHandler}>
          <Details layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map(data => (
                    <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}/>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt=""/>
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map(screen => (
                <img src={smallImage(screen.image, 1280)} alt="" key={screen.id}/>
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
  z-index: 5;
  overflow-y: scroll;
  min-height: 100vh;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightskyblue;
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
  z-index: 10;
  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
  @media (max-width: 950px) {
    padding: 10px 30px 25px;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  
  img {
    width: 26px;
    height: 26px;
    display: inline-block;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    text-align: center;
    h3 {
     text-align: center;
    }
    p {
      text-align: center;
    }
    img {
      margin: 0 auto;
    }
  }
`

const Info = styled(motion.div)`
  text-align: center;
  padding-left: 50px;
  h3 {
    text-align: right;
  }
  @media (max-width: 950px) {
    padding-left: 0;
    h3 {
     text-align: center;
    }
  }
`

const Platforms = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 40px;
    height: 40px;
    margin-left: 35px;
    margin-bottom: 20px;
    display: inline-block;
  }
  @media (max-width: 950px) {
    justify-content: center;
    img {
      margin: 0 25px 20px;
    }
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
  @media (max-width: 780px) {
    margin: 25px 0;
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 500px) {
    p {
      font-size: 14px;
    }
  }
`

export default GameDetails