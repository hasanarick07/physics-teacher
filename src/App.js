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

function App() {
  return (
    <div className="App bg-green-600">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
