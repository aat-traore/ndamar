import './App.css';
import Navbar from './component/Navbar/Navbar';
import Button from './component/Button/Button';
import HeaderSlide from './component/Slides/HeaderSlide';
import Footer from './component/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/DashbordAdmin/Dashboard';
import{ Route, Routes }   from 'react-router-dom'
import Loading from './Pages/Laoding';

function App() {
  return (
    <>
     <Routes> 
     <Route   exact path='/' element={<Loading/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>      
      <Route path="/Login" element={<Login/>}></Route>      
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
p

      
     </Routes>
   
    
   
    </>
  );
}

export default App;
