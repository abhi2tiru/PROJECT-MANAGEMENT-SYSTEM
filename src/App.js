import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Navbar from "./Navbar";
import AddProduct from './component/AddProduct';
import Home from './component/Home';
import EditProduct from './component/EditProduct';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
