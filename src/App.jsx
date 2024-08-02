import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/auth/LoginPage";
import RegisterPage from "./Pages/auth/RegisterPage";
import CustomerPage from "./Pages/customer/CustomerPage";
import TransactionPage from "./Pages/transaction/TransactionPage";
import ProductPage from "./Pages/product/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/transaction" element={<TransactionPage/>} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );

  // return (
  //   <>
  //     <RegisterPage/>
  //   </>
  //   // <Router>
  //   //   <Routes>
  //   //     {/* <Navbars /> */}
  //   //     <Route path="/login-page" element={<LoginPage />} />
  //   //     <Route path="/" element={<HomePage />} />
  //   //     <Route path="/produk" element={<Produk />} />
  //   //     <Route path="/detail-transaksi" element={<DetailTransaksiPages />} />
  //   //     <Route path="/pelanggan" element={<Pelanggan />} />
  //   //     <Route path="*" element={<NotFound />} />
  //   //   </Routes>
  //   //   {/* <Footers /> */}
  //   // </Router>
  // );
}

export default App;
