import './App.css';
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import {Container} from "react-bootstrap";
import {Route, Switch, Redirect} from "react-router-dom"
import Article from "./components/Articles/Article/Article";

const App = props => {
  return (
    <Container className="App">
      <Header/>
      <Switch>
          <Route exact path='/' component={Articles}/>
          <Route exact path='/:id' component={Article}/>
      </Switch>
    </Container>
  )
}

export default App
