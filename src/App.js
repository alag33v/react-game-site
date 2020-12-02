import {Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <Route path={['/game/:id', '/']} component={Home}/>
    </div>
  );
}

export default App