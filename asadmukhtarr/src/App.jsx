import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Header from "./components/subcomponents/Header";
import Footer from "./components/subcomponents/Footer";
import Test from "./components/Test";
const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/test" element={<Test />} />
            </Routes>
            <Footer />
        </div>
    )
};
export default App;