import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails";
import PreorderManagement from "./pages/preorderManagement";
import Header from "./component/header";
import Footer from "./component/footer";

// Define Product type
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

// Define Preorder type
export interface Preorder {
  id: string;
  productId: string;
  customerName: string;
  email: string;
}

// Define context type
interface AppContextType {
  products: Product[];
  preorders: Preorder[];
}

// Create context
export const AppContext = createContext<AppContextType | undefined>(undefined);

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    // Mock data for three iPhones
    {
      id: "1",
      name: "iPhone 14 Pro",
      description: "6.1-inch display, A16 Bionic chip, Dynamic Island.",
      price: 999,
    },
    {
      id: "2",
      name: "iPhone 14",
      description: "6.1-inch display, A15 Bionic chip, dual-camera system.",
      price: 799,
    },
    {
      id: "3",
      name: "iPhone SE (3rd Gen)",
      description: "4.7-inch display, A15 Bionic chip, Touch ID.",
      price: 429,
    },
  ]);

  const [preorders, setPreorders] = useState<Preorder[]>([]);

  // Fetch data from mock APIs
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://673e9c9ea9bc276ec4b4ff64.mockapi.io/product");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchPreorders = async () => {
      try {
        const response = await fetch("https://673e9c9ea9bc276ec4b4ff64.mockapi.io/preorder");
        const data: Preorder[] = await response.json();
        setPreorders(data);
      } catch (error) {
        console.error("Error fetching preorders:", error);
      }
    };

    fetchProducts();
    fetchPreorders();
  }, []);

  return (
    <AppContext.Provider value={{ products, preorders }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/preorders" element={<PreorderManagement />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
