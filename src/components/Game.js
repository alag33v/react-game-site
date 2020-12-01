import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {loadDetails} from '../actions/detailsAction'
import {smallImage} from '../utils'
import {motion} from 'framer-motion'
import styled from 'styled-components'

const Game = ({name, released, image, id}) => {
  const dispatch = useDispatch()
  const loadDetailsHandler = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = '8px'
    dispatch(loadDetails(id))
  }
  
  const StringPathId = id.toString()
  
  return (
    <StyledGame layoutId={StringPathId} onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${StringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${StringPathId}`} src={smallImage(image, 640)} alt={name}/>
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  min-height: 30vh;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    max-width: 100%;
    height: 35vh;
    display: block;
    object-fit: cover;
  }
`

export default Game