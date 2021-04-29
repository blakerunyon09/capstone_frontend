import Login from './components/Login'
import Main from './components/Main'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Router>
      <BrowserRouter>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/app">
          <Main />
        </Route>
      </BrowserRouter>
    </Router>
  ); 
}

export default App;
 