import React from "react";
import { Route, Routes } from "react-router-dom";
import Basses from "../../Pages/Basses";
import BrandDetailsInstrument from "../../Pages/BrandDetailsInstrument";
import Brands from "../../Pages/Brands";
import BrandsDetails from "../../Pages/BrandsDetails";
import Checkout from "../../Pages//Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import { InstrumentDetails } from "../../Pages/InstrumentDetails";
import { InstrumentGroupDetails } from "../../Pages/InstrumentGroupDetails";
import LoginPage from "../../Pages/Login/LoginPage";
import SearchResults from "../../Pages/SearchResults";
import Terms from "../../Pages/Terms/Terms";
import User from "../../Pages/User/User";
import CheckoutThanks from "../../Pages/CheckoutThanks";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/guitarer/:subcat" element={<InstrumentGroupDetails />} />
      <Route path="/guitarer/:subcat/:item" element={<InstrumentDetails />} />
      <Route path="/basser/:subcat" element={<InstrumentGroupDetails />} />
      <Route path="/basser/:subcat/:item" element={<InstrumentDetails />} />
      <Route path="/keyboards/:subcat" element={<InstrumentGroupDetails />} />
      <Route path="/keyboards/:subcat/:item" element={<InstrumentDetails />} />
      <Route path="/andrestrenge/:subcat" element={<InstrumentGroupDetails />} />
      <Route path="/andrestrenge/:subcat/:item" element={<InstrumentDetails />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/brands/:subcat" element={<BrandsDetails />} />
      <Route path="/brands/:subcat/:item" element={<BrandDetailsInstrument />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/bruger" element={<User />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/kasse" element={<Checkout />} />
      <Route path="/tak" element={<CheckoutThanks />} />



    </Routes>
  );
};

export default Router;
