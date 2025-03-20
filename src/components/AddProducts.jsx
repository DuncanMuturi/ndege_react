import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddProduct = () => {
  let [product_name, setProductName] = useState("");
  let [product_desc, setProductDesc] = useState("");
  let [product_cost, setProductCost] = useState("");
  let [product_photo, setProductPhoto] = useState("");
  // console.log(product_photo);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const checkUser = () => {
    if (!user) {
      localStorage.clear();
      return navigate("/signin");
    }
  };

  useEffect(() => checkUser(), [user]);

  let fileinputref = useRef(null);

  let [loading, SetLoading] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setSuccess("");
      SetLoading("Please wait as we submit your Data");

      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_desc", product_desc);
      data.append("product_cost", product_cost);
      data.append("product_photo", product_photo);

      const response = await axios.post(
        "https://ndege25.pythonanywhere.com/api/addproduct",
        data
      );

      SetLoading("");
      setSuccess(response.data.success);
      setProductCost("");
      setProductDesc("");
      setProductName("");
      fileinputref.current.value = "";
    } catch (error) {
      SetLoading("");
      setError(error.message);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-4">
        {/* <nav className="m-4">
        <Link className="btn btn-dark mx-2" to="/">
          Home
        </Link>
        <Link className="btn btn-dark mx-2" to="/addproduct">
          Add Product
        </Link>
        <Link className="btn btn-dark mx-2" to="/signin">
          Sign In
        </Link>
        <Link className="btn btn-dark mx-2" to="/signup">
          Sign Up
        </Link>
      </nav> */}
        <Navbar />
        <div className="col-md-6 card shadow p-4">
          <h2>Add Product</h2>
          <b className="text-warning">{loading}</b>
          <b className="text-danger">{error}</b>
          <b className="text-success">{success}</b>
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Enter Product Name"
              required
              className="form-control"
              onChange={(e) => setProductName(e.target.value)}
              value={product_name}
            />
            <br />
            {product_name}
            <textarea
              name="
          "
              id=""
              className="form-control"
              required
              placeholder="Product Description"
              value={product_desc}
              onChange={(e) => setProductDesc(e.target.value)}
            ></textarea>
            <br />
            <input
              type="number"
              placeholder="Product Cost"
              required
              className="form-control"
              value={product_cost}
              onChange={(e) => setProductCost(e.target.value)}
            />
            <br />
            <label htmlFor="" className="form-label">
              Product Photo
            </label>
            <br />
            <input
              type="file"
              required
              ref={fileinputref}
              className="form-control"
              onChange={(e) => setProductPhoto(e.target.files[0])}
            />
            <br />
            <button className="btn btn-primary">Add Product</button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddProduct;
