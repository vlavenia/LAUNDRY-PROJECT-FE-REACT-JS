import React, { useEffect, useState } from "react";
import "../../App.css";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { axiosInstance } from "../../lib/axios";
import SkeletonTable from "../../components/SkeletonTable";
import Editicon from "../../assets/Editicon.svg"
import Deleteicon from "../../assets/Deleteicon.svg"
import ActionButton from "../../components/ActionButton";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  let token = localStorage.getItem("token");

  const getCustomer = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProduct(response.data.data);
      setIsLoading(false)
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
          {isLoading ? (
            Array(4)
              .fill(null)
              .map((d, i) => {
                return <SkeletonTable />;
              })
          ) : (
            <Table aria-label="Example static collection table overscroll-auto">
              <TableHeader>
                <TableColumn>Product Name</TableColumn>
                <TableColumn>Price</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn className=" w-[45px] text-center">
                  Action
                </TableColumn>
              </TableHeader>
              <TableBody>
                {product.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>
                      <ActionButton/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
