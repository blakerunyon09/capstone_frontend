import Main from './components/Main'
import Login from './components/LoginRegister/Login'
import SignUp from './components/LoginRegister/SignUp'
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
 