import { Container } from "@mui/material";
import "./App.css";
import HeroBanner from "./components/Layout/HeroBanner";
import Navbar from "./components/Navbar/Navbar";
import ListProperty from "./components/Layout/ListProperty";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar></Navbar>
        <HeroBanner></HeroBanner>
        <ListProperty></ListProperty>
      </Container>
    </div>
  );
}

export default App;
