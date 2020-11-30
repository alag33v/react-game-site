import {useSelector} from 'react-redux'
import {motion} from 'framer-motion'
import styled from 'styled-components'

const GameDetails = () => {
  const {game, screenshots} = useSelector(state => state.details)
  
  return (
    <div className="card-shadow">
      <div className="details">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map(data => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt=""/>
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshots.results.map(screen => (
            <img src={screen.image} alt="" key={screen.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameDetails