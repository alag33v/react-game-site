import {useDispatch} from 'react-redux'
import {loadDetails} from '../actions/detailsAction'
import {motion} from 'framer-motion'
import styled from 'styled-components'

const Game = ({name, released, image, id}) => {
  const dispatch = useDispatch()
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id))
  }
  
  return (
    <StyledGame onClick={loadDetailsHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name}/>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  min-height: 30vh;
  img {
    width: 100%;
    max-width: 100%;
    height: 35vh;
    display: block;
    object-fit: cover;
  }
`

export default Game