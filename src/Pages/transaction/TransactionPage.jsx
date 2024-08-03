import React, { useEffect, useState } from "react";
// import "./App.css";
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
import { format, parseISO } from "date-fns";
import SkeletonTable from "../../components/SkeletonTable";
import searchfile from "../../assets/searchfile.png";

function TransactionPage() {
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let token = localStorage.getItem("token");

  const getTransaction = async () => {
    try {
      const response = await axiosInstance.get("/bills", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransaction(response.data.data);
      setIsLoading(false);
      console.log(`[RESPONSE]`, response.data.data);
      console.log(`[RESPONSE data]`, response.data.data[0].customer.name);
    } catch (error) {
      console.log("====");
      console.log("[ERROR]", error);
      console.log("====");
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className="h-screen">
      <div className="bg-[#f4f6f6] grid grid-cols-6 grid-rows-6 h-full  w-full gap-6 p-6">
        <Sidebar />
        <Header
          Headertitle="Transaction"
          subtitle="Track your transaction with interactive dashboard"
        />
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
                <TableColumn>Customer Name</TableColumn>
                <TableColumn>Product</TableColumn>
                <TableColumn>Bill Date</TableColumn>
                <TableColumn className="text-center w-[45px]">
                  Action
                </TableColumn>
              </TableHeader>

              <TableBody>
                {transaction.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{item.customer.name}</TableCell>
                    <TableCell>{item.billDetails[idx].product.name}</TableCell>
                    <TableCell>
                      {format(
                        parseISO(item.billDate),
                        " dd-MMM-yyyy"
                      ).toUpperCase()}
                    </TableCell>
                    <TableCell>
                      <Button className="rounded-md">
                        <img src={searchfile} className="w-[25px] h-[25px]" />
                      </Button>
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

export default TransactionPage;
