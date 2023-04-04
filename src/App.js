
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Checkout from './Components/Checkout';

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Router>
    <div className="app">
      <Routes>
      <Route path="/checkout" element={<><Header/><Checkout/></>}/>
      <Route path="/" element={<><Header/><Home/></>}/>
      
        
      
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
