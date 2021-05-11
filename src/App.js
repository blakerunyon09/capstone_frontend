import Main from './components/Main'
import Login from './components/LoginRegister/Login'
import SignUp from './components/LoginRegister/SignUp'
import FetchTest from './components/FetchTest'
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
        <Route exact path="/app">
          <Main />
        </Route>
        <Route exact path="/fetchtest">
          <FetchTest />
        </Route>
      </BrowserRouter>
    </Router>
  ); 
}

export default App;
 