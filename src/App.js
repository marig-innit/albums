import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Signin from './Components/Singin';
import Signup from './Components/Singup';
import AddBook from './Components/AddBook';
import GetBooks from './Components/GetBooks';
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
        <h1 className='bg-dark text-white'>Welcome to BookRack Store</h1>
      </header>
      {/* Navigations */}
      {/* <nav>
        <Link to="/signin" className='btn btn-outline-secondary'>Signin</Link>
        <Link to="/signup" className='btn btn-outline-secondary m-2'>Signup</Link>
        <Link to="/Addproduct" className='btn btn-outline-secondary'>AddBook</Link>
        <Link to="/" className='btn btn-outline-secondary m-2'>GetBooks</Link>
        
      </nav> */}
      {/* Routes goes here */}
      <Routes>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/addproduct' element={<AddBook/>} />
        <Route path='/' element={<GetBooks/>} />
        <Route path='/mpesa' element={<Mpesapayment/>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
