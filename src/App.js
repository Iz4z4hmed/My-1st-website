// import logo from './logo.svg';
import './App.css';
// import Middle from './component/Middle';
import Navbody from './component/Navbody';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './component/Login';
import Professional from './component/Professional';
import Step1 from './component/Step1';


function App() {
  return (
    <>
    <div className='flex-container'>

      <Router>
        <Routes>

          <Route exact path='/' element={<Navbody />} />
          <Route path='/login' element={<Login />} />
          <Route path='/professional' element={<Professional/>} />
          <Route path='/step1' element={<Step1 />} />
        </Routes>
      </Router>
    </div>

    </>
  );
}

export default App;
