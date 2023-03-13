// import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header>Online Store</header>
    <NavBar />
      <Router>
        <Routes>
          <Route path='/'/>
          <Route path='/cart'/>
        </Routes>
        <Products />
      </Router>
    </div>
  );
}

export default App;
