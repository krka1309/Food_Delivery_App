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
              width: 250,
              transition: "transform 10s ease-in ease-out",
            },
          }}
        >
          <div className={isOpen ? "cartItem" : "cardhide"}>
            <div className="tittle flex justify-between">
              <h2 className="text-2xl font-bold text-white">Ambrosiya</h2>
              <button onClick={CloseNav}>
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <nav className="mt-10">
              <ol className="flex flex-col space-x-4 justify-center items-center gap-10 text-xl">
                <div className="test1">
                  <li className="pr-10 py-3 ml-3 hover: text-white -ml-5 w-100% hover:bg-neutral-600">
                    <Link to="/" className="columnGap" onClick={CloseNav}>
                      <HomeIcon className="homeIcon" /> Home
                    </Link>
                  </li>
                </div>
                <div className="test">
                  <li className="pr-10 py-3 ml-3 hover: text-white -ml-5 w-100% hover:bg-neutral-600">
                    <Link to="/food" className="columnGap" onClick={CloseNav}>
                      <LunchDiningIcon className="homeIcon" />
                      Foods
                    </Link>
                  </li>
                </div>
                <div className="test">
                  <li className="pr-10 py-3 ml-3 text-white -ml-5 w-100% hover:bg-neutral-600">
                    <Link to="/cart" className="columnGap" onClick={CloseNav}>
                      <ShoppingCartIcon className="homeIcon" />
                      Cart
                    </Link>
                  </li>
                </div>
                <div className="test">
                  <li className="hover:bg-neutral-600 pr-10 py-3 -ml-5 text-white ml-0 w-100% ">
                    <Link
                      to="/contact"
                      className="columnGap"
                      onClick={CloseNav}
                    >
                      <ContactPageIcon className="homeIcon" />
                      Contact
                    </Link>
                  </li>
                </div>
              </ol>
            </nav>
          </div>
        </Drawer>
      </div>
    </>
  );
}
export default Navbar;
