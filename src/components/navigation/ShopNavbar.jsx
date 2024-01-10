import { Avatar, Navbar } from "flowbite-react";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import SearchBar from "../SearchBar";
import "../../customcss/custom.css";
import { Link } from "react-router-dom";

const ShopNavbar = () => {
  return (
    <Navbar
      variant="gradient"
      className="sticky top-0 left-0 w-full bg-app_main z-50"
    >
      <Link className="flex items-between mr-auto" to={"/"}>
        <img
          src="https://davosinthedesert.us/wp-content/uploads/2023/02/davos-logo-v3.png"
          className="davos_icon flex ml-auto"
          alt="Davos Logo"
        />
      </Link>
      <Navbar.Collapse>
        <SearchBar />
        <Avatar className="rounded-full" />
        <Link
          className="flex justify-center items-center p-2 rounded-full border-white hover:cursor-pointer"
          to={"/cart"}
        >
          <ShoppingCartIcon />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ShopNavbar;
