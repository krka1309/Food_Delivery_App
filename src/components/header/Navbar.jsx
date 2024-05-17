import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Importing the Menu icon
import { AiOutlineClose } from "react-icons/ai"; // Importing the Close icon
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const CloseNav = () => {
    setIsOpen(false);
    console.log(!isOpen);
  };

  return (
    <>
      <div>
        <div className="card">
          <AiOutlineMenu size={25} onClick={handleOpen} />
        </div>
        <Drawer
          onClose={() => setIsOpen(false)}
          open={isOpen}
          anchor="right"
          sx={{
            "& .MuiDrawer-paper": {
              width: 320,
              transition: "transform 10s ease-in ease-out",
            },
          }}
          // className="cartItem"
        >
          {/* <div className={isOpen ? "cartItem" : "cardhide"}></div> */}
          {/* <div className={isOpen ? "overlay" : "nonoverlay"}></div> */}
          <div className={isOpen ? "cartItem" : "cardhide"}>
            <div className="tittle flex justify-between">
              <h2 className="text-2xl font-bold">Ambrosiya</h2>
              <button onClick={CloseNav}>
                <AiOutlineClose className="icon" size={30} />
              </button>
            </div>
            <nav className="mt-10">
              <ul className="flex flex-col space-x-4 justify-center items-center gap-10 text-xl">
                <li className="hover:bg-slate-100 px-10 py-3 ml-3 hover: text-red-400">
                  <Link to="/">
                    <HomeIcon className="homeIcon" /> Home
                  </Link>
                </li>
                <li className="hover:bg-slate-100 px-10 py-3 text-red-400">
                  <Link to="/food">
                    <LunchDiningIcon className="foodIcon" />
                    Foods
                  </Link>
                </li>
                <li className="hover:bg-slate-100 px-10 py-3 text-red-400">
                  <Link to="/cart">
                    <ShoppingCartIcon className="cartIcon" />
                    Cart
                  </Link>
                </li>
                <li className="hover:bg-slate-100 px-10 py-3 text-red-400">
                  <Link to="/contact">
                    <ContactPageIcon className="phoneIcon" />
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Drawer>
      </div>
    </>
  );
}
export default Navbar;
