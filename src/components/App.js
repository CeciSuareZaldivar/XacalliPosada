//import logo from './logo.svg';
//import './App.css';
import Services from './Services.js'
import Prices from './Prices.js';
import Carrousel_background from './carrousel_background.js';
import Reservation from './reservation.js';

function App() {
  return (
    <div className="App">
      <Carrousel_background/>
      <Reservation/>
      <Services />
      <Prices />
    </div>
  );
}

export default App;
