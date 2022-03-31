import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home" className='home-page-text'> Home </Link>
          <Routes>
            <Route path='/home' element={ <Home /> } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
