import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import PrivateRoute from "./hooks/PrivateRoute";
import MainLayout from "./Layouts/MainLayout";
import SelectedProducts from "./pages/SelectedProducts";
import AddToCart from "./pages/AddToCart";

const App = () => {
  const token = localStorage.getItem("token");
  console.log(token, "token");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="select-product" element={<SelectedProducts />} />
              <Route path="add-to-cart" element={<AddToCart />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
