"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdHeartEmpty } from "react-icons/io";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { LuUser } from "react-icons/lu";
// import { useDispatch, useSelector } from "react-redux";
// import { a, useNavigate } from "react-router-dom";
// import { IoBagOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { PiStorefront } from "react-icons/pi";
import { MdOutlineHelpOutline } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Link from "next/link";

//

export default function TemporaryDrawer() {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.auth);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        "key" in event &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleCloseToogle = () => {
    setState({ ...state, right: false });
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  //   const handleLogOut = async () => {
  //     let result = await dispatch(logout());
  //     if (result) {
  //       localStorage.removeItem("accessToken", "");
  //       navigate("/");
  //       handleCloseToogle();
  //       toast.success("Logout successful");
  //       return true;
  //     }
  //   };

  //   const handleProfile = () => {
  //     navigate("/profile");
  //   };

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleJoin = () => {
  //     navigate("/sign-up");
  //   };
  //   const handleSignIn = () => {
  //     navigate("/sign-in");
  //   };

  //   const handleTobag = () => {
  //     navigate("/cart");
  //     handleCloseToogle();
  //   };
  //   const handleToOrders = () => {
  //     navigate("/orders");
  //     handleCloseToogle();
  //   };
  //   const handleToFavourites = () => {
  //     navigate("/favourites");
  //     handleCloseToogle();
  //   };

  //   const handleToFindStore = () => {
  //     navigate("/findstore");
  //     handleCloseToogle();
  //   };

  //   const handleToHelp = () => {
  //     navigate("/help");
  //     handleCloseToogle();
  //   };

  return (
    <div className="w-[30%] p-0 m-0 over">
      {(["right"] as Array<"right">).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <GiHamburgerMenu className="flex lg:hidden text-2xl text-black p-0 m-0" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <div className="navToggle-container p-4 overflow-x-hidden">
              <Button
                className="flex-1 relative left-[245px]"
                onClick={handleCloseToogle}
              >
                <ImCross className="text-white text-2xl p-1 rounded-2xl  bg-black" />
              </Button>
              <AccordionGroup sx={{ maxWidth: 300 }}>
                <Accordion
                  sx={
                    {
                      // display: Object.keys(user).length === 0 ? "none" : "flex",
                      // alignItems: "center",
                    }
                  }
                >
                  <AccordionSummary>
                    <div className="user-login flex lg:hidden ">
                      <Box>
                        <div className="ml-4">
                          <div
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded="false"
                            // onClick={handleClick}
                            className="text-black center p-0 flex w-[230px]"
                          >
                            <LuUser className="flex lg:hidden text-2xl text-black" />
                            {/* <span className="pl-4">Hi, {user.firstName}</span> */}
                          </div>
                        </div>
                      </Box>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      {/* <h1 className="text-2xl pt-3">{user.name}</h1> */}

                      <div
                        className="no-underline pt-3"
                        // onClick={handleProfile}
                      >
                        Profile
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Inbox
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Orders
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Favourites
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Experinces
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Account Settings
                      </div>
                      <div
                        className="no-underline pt-3 cursor-pointer"
                        // onClick={handleLogOut}
                      >
                        Log Out
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>

              <div
              // style={{
              //   display: Object.keys(user).length === 0 ? "block" : "none",
              //   paddingTop: "30px",
              // }}
              >
                {/* <div className="w-[300px]">
                  <Navbar_3 />
                </div> */}

                <div className="flex pt-8 justify-center">
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="outlined">Join Us</Button>
                    <Button variant="outlined">Sign In</Button>
                  </Box>
                </div>
              </div>
              <div className="pt-20 text-2xl gap-2">
                <Link className="flex justify-start center no-underline pb-6 cursor-pointer" href="/">
                  <AiOutlineHome />
                  <div className="pl-4">Home</div>
                </Link>
                <Link
                  className="flex  center no-underline pb-6 cursor-pointer"
                  //   onClick={handleTobag}
                  href={"/Cart"}
                >
                  <FaCartArrowDown />
                  <div className="pl-4">Cart</div>
                </Link>
                <div
                  //   onClick={handleToOrders}
                  className="flex no-underline pb-6 cursor-pointer"
                >
                  <FiShoppingBag />
                  <div className="pl-4">Orders</div>
                </div>
                <div
                  //   onClick={handleToFindStore}
                  className="flex no-underline pb-6 cursor-pointer"
                >
                  <PiStorefront />
                  <div className="pl-4">Shop</div>
                </div>
                <div
                  //   onClick={handleToHelp}
                  className="flex no-underline pb-6 cursor-pointer"
                >
                  <MdOutlineHelpOutline />
                  <div className="pl-4">About Us</div>
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
