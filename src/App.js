
import './App.css';
import Home from './HOME/Home';
//react router
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login/SignIn';
import SignUp from './Login/SignUp';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
    </div>
  );
}

export default App;
