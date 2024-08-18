
import './App.css';
// import './component/component.css'
// import Cloths from './component/Cloths/Cloths';
// import './component/component.css'  
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Promise1 from './component/promise/Promise1';
import Login from './component/Login/Login';
import Sign from './component/Sign/Sign';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cloths from './component/Cloths/Cloths';
import Protected from './component/Protected';
import Washselection from './component/Washselction/Washselection';
import Adress from './component/Adress&bill/Adress';
import { useState } from 'react';
function App() {
  const [count,setcount]=useState(false)
  return (
  <>
  <BrowserRouter>
  {console.log(count)}
  <Navbar setcount={setcount} count={count}/>
  <Routes>
    <Route  element={<Protected/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/promise' element={<Promise1/>}/>
    <Route path='/clothes' element={<Cloths/>}/>
    <Route path='/wash' element={<Washselection/>}/>
    <Route path='/address' element={<Adress/>}/>
    </Route>
    <Route path='/sign' element={<Sign/>}/>
    <Route path='/login' element={<Login setcount={setcount} count={count}/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;
