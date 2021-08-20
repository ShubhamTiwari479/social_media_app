import './App.css';
//import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import SignIn from './components/Signin';
import PrimarySearchAppBar from './components/navBar';
import ImgMediaCard from './components/massage';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path="/">
          <PrimarySearchAppBar />
        </Route>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/massage">
          <ImgMediaCard />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
      </Router>

    </div>
  );
}

export default App;
