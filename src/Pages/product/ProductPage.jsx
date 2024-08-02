import React, { useEffect, useState } from "react";
// import "./App.css";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { axiosInstance } from "../../lib/axios";

function ProductPage() {
  const [product, setProduct] = useState([]);

  let token = localStorage.getItem("token");

  const getCustomer = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProduct(response.data.data);
      console.log(`Response`, response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div className="h-screen">
      <div className="bg-[#f4f6f6] grid grid-cols-6 grid-rows-6 h-full  w-full gap-6 p-6">
        <Sidebar />
        <Header Headertitle="Product" subtitle="Create your Product Easily" />
        {/* //table Transaksi */}
        <div className="p-3  shadow-xl col-span-5 row-span-3 bg-white rounded-3xl flex flex-nowrap">
          <Table aria-label="Example static collection table overscroll-auto">
            <TableHeader>
              <TableColumn>Product Name</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Type</TableColumn>
            </TableHeader>
            <TableBody>
              {product.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
