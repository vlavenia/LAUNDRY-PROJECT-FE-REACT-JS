import { Card, CardBody } from "@nextui-org/react";
import "./App.css";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen">
        <div className="bg-[#f4f6f6] grid grid-cols-6 grid-rows-6 h-full  w-full gap-6 p-6">
          <Sidebar />
          <Header />
          {/* //table Transaksi */}
          <div className="p-3 shadow-xl col-span-5 row-span-3 bg-white rounded-3xl flex flex-nowrap">
            <Table aria-label="Example static collection table overscroll-auto">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Footer />
        </div>
      </div>
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
