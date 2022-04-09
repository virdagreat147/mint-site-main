import Background from './bg.png';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Coin from '.coin.gif'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`,backgroundSize: "cover"}}>
      <header className="App-header">
      <Router><Navbar /></Router>
      </header>
    </div>
  );
}

export default App;
