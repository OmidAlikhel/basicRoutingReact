import React from "react";
import {
  Home,
  ProductDetail,
  Admin,
  ProductList,
  PageNotFound,
  Contact,
  ContactG,
  ContactIn,
  ContactUs,
} from "../pages/index";
import { Routes, Route, Navigate } from "react-router-dom";

const AllRoutes = () => {
  let admin = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />}></Route>
          <Route path="us" element={<ContactUs />}></Route>
          <Route path="*" element={<ContactG />}></Route>
        </Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route
          path="/admin"
          element={admin ? <Admin /> : <Navigate to="/" />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
