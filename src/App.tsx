import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import MyCart from "./components/Pages/MyCart/MyCart";
import NotFound from "./components/Pages/NotFound/NotFound";
import OneProduct from "./components/Pages/OneProduct/OneProduct";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/one-product/:id" element={<OneProduct />}></Route>
            <Route path="/my-cart" element={<MyCart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}

export default App;
