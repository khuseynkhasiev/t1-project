import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import MyCart from "./pages/MyCart/MyCart";
import NotFound from "./pages/NotFound/NotFound";
import OneProduct from "./pages/OneProduct/OneProduct";
import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/one-product/:id" element={<OneProduct />}></Route>
                <Route path="/my-cart" element={<MyCart />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
