import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Signin from './Components/Singin';
import Signup from './Components/Singup';
import Addproduct from './Components/Addproduct';
import Getproducts from './Components/Getproducts';
import Mpesapayment from './Components/Mpesapayment';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here */}
      <Navbar/>
      <header>
        <h1 className='bg-dark text-danger'>Welcome to Sokogarden</h1>
      </header>
      {/* Navigations */}
      <nav>
        <Link to="/signin" className='btn btn-outline-secondary'>Signin</Link>
        <Link to="/signup" className='btn btn-outline-secondary m-2'>Signup</Link>
        <Link to="/Addproduct" className='btn btn-outline-secondary'>Addproduct</Link>
        <Link to="/" className='btn btn-outline-secondary m-2'>Getproducts</Link>
        
      </nav>
      {/* Routes goes here */}
      <Routes>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/' element={<Getproducts/>} />
        <Route path='/mpesa' element={<Mpesapayment/>} />
      </Routes>

      {/* footer goes here */}
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
