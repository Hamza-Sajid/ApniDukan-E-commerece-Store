import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { Button, ButtonGroup, Stack, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HouseIcon from "@mui/icons-material/House";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { NavLink } from "react-router-dom";
function NavBar() {
  //navigation bar
  const [nav, setNav] = useState(false);

  //handle navigation code

  const handleNav = (e) => {
    e.preventDefault();
    setNav(!nav);
  };

  let activeStyle = {
    color: "red!important",
    fontWeight: "bold",
  };

  let activeClassName = "underline";

  return (
    <div className="flex h-16 items-center flex-row justify-around">
      <div className="w-2/3">
        <img className="w-36 sm: hidden md:block  lg:block" src={Logo}></img>
        <Button
          onClick={handleNav}
          className=" sm: block md:hidden lg:hidden ml-2 w-2/5   text-center items-center rounded-lg"
          colorScheme="gray"
          size={"lg"}
          variant="solid"
        >
          <HamburgerIcon className="-ml-2 h-full"></HamburgerIcon>
        </Button>
        {nav && (
          <div className="bg-gray-900 rounded-lg z-10  h-96 absolute mt-2 w-full  sm: block md:hidden lg:hidden  ">
            {/* //buttons card */}
            <div className="block m-auto w-4/5">
              <Stack direction="column" spacing={6} margin={6}>
                <Button
                  leftIcon={<HouseIcon />}
                  colorScheme="blackAlpha"
                  variant="solid"
                >
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Home
                  </NavLink>
                </Button>

                <Button
                  leftIcon={<StorefrontIcon />}
                  colorScheme="blackAlpha"
                  variant="solid"
                >
                  <NavLink
                    to="/products"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Products
                  </NavLink>
                </Button>

                <Button
                  leftIcon={<WhatshotIcon />}
                  colorScheme="blackAlpha"
                  variant="solid"
                >
                  Today Deals
                </Button>

                <Button
                  leftIcon={<ContactPageIcon />}
                  colorScheme="blackAlpha"
                  variant="solid"
                >
                  Contact
                </Button>
              </Stack>
            </div>
            <p className="block m-auto text-center text-white mt-20">
              <AddIcCallIcon />
              +920011133
            </p>
          </div>
        )}
      </div>

      {/* DESKTOP NAVBAR CODE */}

      <div className="w-56 sm: block md:hidden lg:hidden">
        <Heading as="h2" className="newFont" size="md">
          Apni Dukan
        </Heading>
      </div>
      <div className="w-2/6 ">
        <nav className="sm: hidden md:contents lg:contents">
          <ul className="px-3 font-medium text-lg	cursor-pointer">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className='newFont inline px-3  py-2 pl-3 pr-4 rounded md:bg-transparent text-gray-700 md:p-0 dark:text-white" aria-current="page"'>
                Home
              </li>{" "}
            </NavLink>

            <NavLink
              to="/products"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="newFont inline px-3 ml-4 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Products
              </li>{" "}
            </NavLink>

            <li className="newFont inline px-3 ml-4 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Hot Offer's
            </li>

            <li className="newFont inline px-3 ml-4 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Contact
            </li>
          </ul>
        </nav>
      </div>

      <div className="mr-12">
        <NavLink to="/cart">
          <ShoppingCartIcon />
        </NavLink>
        <div className="bg-blue-400 block w-2 h-2 rounded float-right absolute top-3 right-12"></div>
      </div>
    </div>
  );
}

export default NavBar;
