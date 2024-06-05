
import { Route, Routes } from 'react-router-dom';
import "./App.module.css"
import Newuser from './components/Newuser';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}>Home</Route>
        <Route path='/newuser' Component={Newuser}>Home</Route>
        <Route path='/search' Component={Search}>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
