import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
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

const Login = () => {
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //login handler

  const handleLogin = (data) => {
    setError("");
    login(data.email, data.password)
    .then((result) => {
    //   const currentUser = {
    //     email: result.user.email,
    //   };
    //   fetch("http://localhost:5000/jwt", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(currentUser),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       localStorage.setItem("token", data.token);
    //     });
    });
  };

  return (
    <div className="flex pt-10">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-8">Login</h2>

        <form action="">
          <InputLabel>Email</InputLabel>
          <Input
            required
            className="w-72 py-2 mb-4 bg-white"
            {...register("email", { required: "Please insert your email" })}
          />
          {errors.email && <Typography>{errors.email.message}</Typography>}

          <InputLabel
            
            className=""
            htmlFor="standard-adornment-password"
            
          >
            Password
          </InputLabel>
          <Input
            className="w-72 mb-4 bg-white"
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            required
            {...register("password", { required: "Password is required" })}
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
          {error && <Alert fullWidth severity="error">{error}</Alert>}

          

          <button type="submit" className="py-2 w-72  bg-pink-400 text-white block">
            Login
          </button>
        </form>
        <Typography className="py-3">Don't have an account? <Link className='underline' to='/signup'>Signup</Link></Typography>
      </div>
      <div className="w-full ">
        <img
          src="https://i.ibb.co/9gHc9gz/Add-tasks-rafiki.png"
          alt="Add task"
        />
      </div>
    </div>
  );
};

export default Login;
