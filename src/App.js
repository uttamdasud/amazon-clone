
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
    <div className="App">
      <Header />
      <Home />
    </div>
    </Router>
  );
}

export default App;
  