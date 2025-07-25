import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ShoppingItemsProvider } from "./context/ShoppingItemsContext";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import AWSBackground from "./components/AWSBackground";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import OrderSummary from "./pages/OrderSummary";
import OrderHistory from "./pages/OrderHistory";
import AdminLogin from "./pages/AdminLogin";
import LearnMore from "./pages/LearnMore";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";
import ShippingInfo from "./pages/ShippingInfo";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

export default function App() {
    return (
        <ThemeProvider>
            <ShoppingItemsProvider>
                <ShoppingCartProvider>
                    <div className="d-flex flex-column min-vh-100">
                        <AWSBackground />
                        <Navbar />
                        <Container className="mb-4 flex-grow-1">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/store" element={<Store />} />
                                <Route path="/admin-login" element={<AdminLogin />} />
                                <Route path="/admin" element={<ProtectedAdminRoute />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/shipping" element={<Shipping />} />
                                <Route path="/payment" element={<Payment />} />
                                <Route path="/order-summary" element={<OrderSummary />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/order-history" element={<OrderHistory />} />
                                <Route path="/learn-more" element={<LearnMore />} />
                                <Route path="/privacy" element={<PrivacyPolicy />} />
                                <Route path="/terms" element={<Terms />} />
                                <Route path="/returns" element={<Returns />} />
                                <Route path="/shipping-info" element={<ShippingInfo />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/support" element={<Support />} />
                            </Routes>
                        </Container>
                        <Footer />
                        <ToastContainer 
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                </ShoppingCartProvider>
            </ShoppingItemsProvider>
        </ThemeProvider>
    );
}

function ProtectedAdminRoute() {
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";
  if (!isAuthenticated) {
    window.location.replace("/admin-login");
    return null;
  }
  return <Admin />;
}
