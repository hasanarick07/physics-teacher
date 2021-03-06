import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Register/Register";
import SignOut from "./Pages/SignOut/SignOut";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App bg-gray-500">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/signOut" element={<SignOut></SignOut>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
