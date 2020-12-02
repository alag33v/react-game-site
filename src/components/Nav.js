import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {fetchSearch} from '../actions/gamesAction'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')
  
  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }
  
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }
  
  const clearSearched = () => {
    dispatch({type: "CLEAR_SEARCHED"})
  }
  
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo"/>
        <h1>Meta Games</h1>
      </Logo>
      <form className="search">
        <input type="text" onChange={inputHandler} value={textInput} placeholder="Search games"/>
        <button type="submit" onClick={submitSearch}>Search</button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  text-align: center;
  padding: 30px 50px;
  input {
    font-size: 24px;
    width: 550px;
    max-width: 100%;
    margin-top: 10px;
    padding: 7px 25px;
    border: none;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    outline: none;
  }
  button {
    font-size: 24px;
    color: #fff;
    background-color: lightskyblue;
    padding: 7px 20px;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 780px) {
    input {
      text-align: center;
    }
    button {
      width: 550px;
      max-width: 100%;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`

const Logo = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  img {
    height: 30px;
    width: 30px;
    display: inline-block;
    margin-right: 20px;
    max-width: 100%;
  }
`

export default Nav