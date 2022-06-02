import './App.css';
import Navigation from './shared/Navigation';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import Layout from './frontend/Layout';
import Home from './frontend/Home';
import About from './frontend/About';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import User from './admin/User';
import ProductDetails from './frontend/ProductDetails';
import SignIn from './frontend/SignIn';
import Signup from './frontend/Signup';
import Products from './admin/Products';
import AddProducts from './admin/AddProducts';
import AddCategory from './admin/AddCategory';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/ProductDetails" element={<ProductDetails/>}></Route>
          <Route path='/signIn' element={<SignIn/>}></Route>
          <Route path='/signUp' element={<Signup/>}></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
          <Route path="/admin/user" element={<User/>}></Route>
          <Route path="/admin/products" element={<Products/>}></Route>
          <Route path="/admin/products/addProducts" element={<AddProducts/>}></Route>
          <Route path="/admin/addCategory" element={<AddCategory/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
