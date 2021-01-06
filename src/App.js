import './App.css';
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container className="App">
      <Header/>
      <Articles/>
    </Container>
  );
}

export default App;
