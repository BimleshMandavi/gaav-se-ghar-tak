"use client";

import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Join = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#aa7135] text-black font-serif px-4 sm:px-10">
      <form className="w-full max-w-md font-serif">
        <Box className="bg-[#d6aa73] p-6 sm:p-10 rounded-2xl shadow-2xl">
          <Box>
            <Typography
              variant="h5"
              className="text-lg sm:text-2xl font-semibold  text-center"
            >
              Enter your email to join us or sign up.
            </Typography>
          </Box>

          <Box className="text-sm text-center my-4">
            India{" "}
            <a href="#" className="underline">
              Change
            </a>
          </Box>

          <div className="flex flex-col gap-6">
            <TextField
              label="First Name"
              name="firstName"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </div>

          <Box className="text-xs text-center mt-6">
            By continuing, I agree to our{" "}
            <a href="#" className="underline text-blue-500 mx-1">
              Privacy Policy
            </a>{" "}
            and
            <a href="#" className="underline ml-1 text-blue-500">
              Terms of Use
            </a>
            .
          </Box>

          <Box className="text-sm text-center mt-4">
            Already signed up?{" "}
            <a href="/LogIn" className="underline">
              Log in
            </a>
          </Box>

          <Box className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full w-full sm:w-48 hover:bg-gray-900 transition"
            >
              Sign Up
            </button>
          </Box>
        </Box>
      </form>

      {/* Google button (commented out) */}
      {/* <button className="mt-6 bg-[#4853f2] text-white px-6 py-3 rounded-full w-full sm:w-[20rem]">
        Continue with Google
      </button> */}
    </div>
  );
};

export default Join;
