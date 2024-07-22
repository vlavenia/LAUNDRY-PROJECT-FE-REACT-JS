import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Enigma Laundry</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link to="/" color="foreground">
            Transaksi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/produk" aria-current="page">
            Produk
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/pelanggan">
            Pelanggan
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
export default Navbars;
