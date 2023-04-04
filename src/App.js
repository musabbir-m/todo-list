import logo from "./logo.svg";
import "./App.css";
import Main from "./Layout/Main";
import { RouterProvider } from "react-router-dom";
import routes from "./Components/Routes/Routes";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <div className="px-20 my-0 bg-purple-100 min-h-full">
      <StyledEngineProvider injectFirst>
        <RouterProvider router={routes}></RouterProvider>
       
      </StyledEngineProvider>
    </div>
  );
}

export default App;
