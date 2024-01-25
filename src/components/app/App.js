import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import Products from "../products/Products";
import Login from "../login/Login";
import Register from '../register/Register';
import Table from "../table/Table";


//

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/ProductsDatabase/home" element={<Home />} />
        <Route path="/ProductsDatabase/products" element={<Products />} />
        <Route path="/ProductsDatabase/login" element={<Login />} />
        <Route path="/ProductsDatabase/register" element={<Register />} />
        <Route path="/ProductsDatabase/yourProducts" element={<Table />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
