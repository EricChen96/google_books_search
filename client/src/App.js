import NavBar from "./components/Nav/NavBar";
import TitleBox from "./components/TitleBox/TitleBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        <NavBar />
        <TitleBox />
      </div>

    </Router>
  );
}

export default App;
