import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import OtpVerification from "./pages/OtpVerification";
import AdminPage from "./pages/AdminPage";
import Pricing from "./pages/Pricing";
import BuyList from "./pages/BuyList";
import CompanyProfile from "./pages/CompanyProfile";
import ChemicalDetail from "./pages/Chemicaldetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <Header />
              <Pricing/>
              <Footer />
            </>
          }
        />
        <Route
          path="/buying"
          element={
            <>
              <Header />
              <BuyList />
              <Footer />
            </>
          }
        />
        <Route
          path="/company-profile"
          element={
            <>
              <Header />
              <CompanyProfile />
              <Footer />
            </>
          }
        />
        <Route
          path="/product-detail"
          element={
            <>
              <Header />
              <ChemicalDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <CreateAccount />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/forgot-password"
          element={
            <>
              <Header />
              <ForgotPassword />
              <Footer />
            </>
          }
        />
        <Route
          path="/verify-otp"
          element={
            <>
              <Header />
              <OtpVerification />
              <Footer />
            </>
          }
        />
        <Route
          path="/create-password"
          element={
            <>
              <Header />
              <CreateNewPassword />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
