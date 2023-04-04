import React, { useContext, useState } from "react";
import {
  Alert,
  Button,
  FilledInput,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //signup handler

  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // toast("User Created Successfully");
        <Alert severity="success">user Created successfully</Alert>;
        const userInfo = { displayName: data.firstname + " " + data.lastname };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => {});
      })
      .catch((err) => setSignupError(err.message));
  };

  return (
    <div className="py-20 flex sm:flex-col md:flex-row">
      <div className="w-full flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-semibold ">Signup</h2>
        <form action="" onSubmit={handleSubmit(handleSignup)}>
          <InputLabel>First Name </InputLabel>
          <Input
            {...register("firstname", { required: "Please insert your name" })}
            className="w-72 py-2 mb-4 bg-white"
          />
          <InputLabel>Last Name </InputLabel>
          <Input
            className="w-72 py-2 mb-4 bg-white"
            {...register("secondname", { required: "Please insert your name" })}
          />
          <InputLabel>Email</InputLabel>
          <Input 
          className="w-72 py-2 mb-4 bg-white" 
          {...register("email", {required: "Please insert your email"})}
          />

          <InputLabel className="" htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            className="w-72 py-2 mb-4 bg-white"
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          {errors.password && (
            <Typography>{errors.password.message}</Typography>
          )}
          {signupError && (
            <Alert  severity="error">
              {signupError}
            </Alert>
          )}
          <button
            type="submit"
            className="py-2 w-72  bg-pink-400 text-white block"
          >
            Signup
          </button>
        </form>
        <Typography className="py-3">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </Typography>
      </div>
      <div className="w-full">
        <img
          src="https://i.ibb.co/bWMgfwQ/Scrum-board-bro.png"
          className=""
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
