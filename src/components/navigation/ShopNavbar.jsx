import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import SearchBar from "../SearchBar";
import DropDownButton from "../buttons/DropDownButton";
import UserContext from "../../contexts/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link } from "react-router-dom";
import davos_icon from "../../assets/images/davos_icon.png";
import { useContext, useEffect, useState } from "react";
import SuccessModal from "../modals/SuccessModal";
import clearSessionCookie from "../../services/clearSessionCookie";
import DavosInTheDesertAnchor from "../anchors/DavosInTheDesertAnchor";
import "../../customcss/custom.css";

const ShopNavbar = ({ signInModal }) => {
  const [openNav, setOpenNav] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [successModal, setSuccessModal] = useState();

  const signIn = () => {
    console.log("sign in called.");
    signInModal();
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser();
        // User signed out we need to remove cookie from their cookies
        clearSessionCookie().then((data) => console.log(data));
        setSuccessModal(`${user.username} has successfully signed out.`);
        setTimeout(() => {
          console.log("Calling sign in...");
          signIn();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
    setUser();
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col my-2">
      <Typography
        key="search"
        as="li"
        variant="small"
        color="blue-gray"
        className="flex w-full justify-center p-1 font-normal"
      >
        <SearchBar className="w-2/3"></SearchBar>
      </Typography>
      <Typography
        key="search"
        as="li"
        variant="large"
        color="blue-gray"
        className="flex w-full justify-evenly hover:bg-gray-200 p-1 font-normal"
      >
        <Link className="flex items-center" to="/apparel/womens">
          <div className="flex items-center">Women's Apparel</div>
        </Link>
      </Typography>
      <Typography
        key="search"
        as="li"
        variant="large"
        color="blue-gray"
        className="flex w-full justify-evenly hover:bg-gray-200 p-1 font-normal"
      >
        <Link className="flex items-center" to="/apparel/mens">
          <div className="flex items-center">Men's Apparel</div>
        </Link>
      </Typography>
      <Typography
        key="search"
        as="li"
        variant="small"
        color="blue-gray"
        className="flex w-full justify-evenly p-1 font-normal"
      >
        <div className="hover:drop-shadow-[0_1.2px_1.2px_rgba(120,120,120)]">
          <DavosInTheDesertAnchor />
        </div>
        <div className="hover:drop-shadow-[0_1.2px_1.2px_rgba(120,120,120)]">
          <DavosInTheDesertAnchor />
        </div>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      variant="gradient"
      className="sticky bg-app_main top-0 z-10 border-none h-[76px] max-w-full rounded-none py-1 px-4 lg:px-8 lg:py-1 z-20"
    >
      <div className="flex h-full items-center justify-between text-blue-gray-900">
        <Link className="h-full w-fit cursor-pointer" to="/">
          <div className="flex items-center relative rounded-md w-full h-full hover:scale-105 hover:drop-shadow-[0_1.2px_1.2px_rgba(120,120,120)] bg-cover bg-no-repeat">
            <img
              className="object-scale-down h-14 min-w-[50%] object-center"
              src={davos_icon}
              alt="Davos In The Desert"
            ></img>
            <div className="flex w-fit h-fit">
              <div className="bg-transparent flex flex-col w-fit h-full divide-y divide-white leading-4 tracking-tight -ml-2">
                <div className="flex justify-between text-white text-[27px] leading-tight -mb-[3px]">
                  <p>S</p>
                  <p>H</p>
                  <p>O</p>
                  <p>P</p>
                </div>
                <div className="flex shrink-0 w-fit whitespace-pre">
                  <p className="flex shrink-0 text-sm w-fit text-center text-white text-nowrap">
                    IN{" "}
                  </p>
                  <p className="flex shrink-0 text-sm w-fit text-center text-white text-nowrap">
                    THE{" "}
                  </p>
                  <p className="flex shrink-0 text-sm w-fit text-center text-white text-nowrap">
                    DESERT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-4 font">
          <div className="hidden lg:inline-block">
            <SearchBar />
          </div>

          {user ? (
            <div className="flex justify-evenly gap-4 drop-down">
              <DropDownButton onClick={logOut} />
            </div>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block bg-app_accent-600 active:drop-shadow-[0_2px_2px_rgba(95,95,95)] shadow hover:drop-shadow-[0_3px_3px_rgba(95,95,95)] hover:shadow-lg font-medium transition transform active:bg-app_accent-700 hover:scale-105 hover:-translate-y-0.5"
              onClick={signIn}
            >
              <span>Sign In</span>
            </Button>
          )}
          <div className="hidden lg:inline-block">
            <DavosInTheDesertAnchor />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={true}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
          <Link
            className="flex justify-center items-center p-2 rounded-full border-white hover:cursor-pointer"
            to={"/cart"}
          >
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
      <Collapse open={openNav} className="bg-gray-400 rounded-b-lg z-10 mt-1">
        {navList}
        {user ? (
          <Button
            onClick={logOut}
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-4 bg-gray-900 rounded-none"
          >
            <span>Sign Out</span>
          </Button>
        ) : (
          <Button
            onClick={() => setTimeout(() => signIn(), 200)}
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-4 rounded-none"
          >
            <span>Sign In</span>
          </Button>
        )}
      </Collapse>

      {successModal && (
        <SuccessModal
          message={successModal}
          clearSuccessModal={() => setSuccessModal()}
        />
      )}
    </Navbar>
  );
};

export default ShopNavbar;
