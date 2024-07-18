import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFoundPage from "./Components/404";
import Register from "./Pages/Registar";
import Verify from "./Pages/Verify";
import Secure from "./Components/Secure";
import Shop from "./Pages/Shop";
import AddCategory from "./Admin/Add-category";
import AdminSecure from "./Admin/AdminSecure";
import Login from "./Pages/Login";
import Admin from "./Admin";
import CategoaryItem from "./Admin/CategoaryItem";
import Users from "./Admin/Users";
import Product from "./Admin/Product";
import AddProduct from "./Admin/AddProduct";
import EditProduct from "./Admin/EditProduct";
import ShopList from "./Pages/ShopList";
import ProductInfo from "./Pages/Product";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route
            path="/product/:id"
            element={
              <Secure>
                <ProductInfo />
              </Secure>
            }
          />
          <Route path="/shop/list/:tag" element={<ShopList />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/new" element={<Register />} />
          <Route
            path="/admin/add-category"
            element={
              <Secure>
                <AdminSecure>
                  <AddCategory />
                </AdminSecure>
              </Secure>
            }
          />
          <Route
            path="/admin"
            element={
              <Secure>
                <AdminSecure>
                  <Admin />
                </AdminSecure>
              </Secure>
            }
          />
          <Route
            path="/admin/users"
            element={
              <Secure>
                <AdminSecure>
                  <Users />
                </AdminSecure>
              </Secure>
            }
          />
          <Route
            path="/admin/products"
            element={
              <Secure>
                <AdminSecure>
                  <Product />
                </AdminSecure>
              </Secure>
            }
          />
          <Route
            path="/admin/products/add"
            element={
              <Secure>
                <AdminSecure>
                  <AddProduct />
                </AdminSecure>
              </Secure>
            }
          />
          <Route
            path="/admin/category-item"
            element={
              <Secure>
                <AdminSecure>
                  <CategoaryItem />
                </AdminSecure>
              </Secure>
            }
          />
          <Route
            path="/admin/products/edit/:id"
            element={
              <Secure>
                <AdminSecure>
                  <EditProduct />
                </AdminSecure>
              </Secure>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
