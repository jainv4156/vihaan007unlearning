import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import Login from './components/Login';
import Studentpage from './components/Studentpage'; '
import 
function App() {
  const [user,setUser]=useState
  return (
    <div className="App">
      <Login/>
      <User/>
      <Studentpage/>
      
    </div>
  );
}

export default App;
