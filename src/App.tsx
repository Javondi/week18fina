import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from './pages/productDetails';
import PreorderManagement from './pages/preorderManagement';
import Header from './component/header';
import Footer from './component/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/preorders" element={<PreorderManagement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;