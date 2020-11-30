import {Route} from 'react-router-dom'
import Home from './pages/Home'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Route path={['/game/:id', "/"]} component={Home}/>
    </div>
  );
}

export default App