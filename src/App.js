import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AddProduct from "./components/AddProducts";
import GetProducts from "./components/GetProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <h1>SokoGarden - Buy & Sell Online</h1>
        </header> */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/" element={<GetProducts />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
