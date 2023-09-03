import React, { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";

import { palette } from "./palette.js";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: palette,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
