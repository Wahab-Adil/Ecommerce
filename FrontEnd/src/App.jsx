import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTheme } from "@mui/styles";
import Router from "./routes";

function App() {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  return (
    <>
      <Router />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p style={{ color: theme.palette.secondary.main }}>
        Welcome Friends , Amazon Default ColorPalette
      </p>
    </>
  );
}

export default App;
