import { useState } from "react";

// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  //
  const [anchorElBrand, setAnchorElBrand] = useState(null);
  const [anchorElCate, setAnchorElCate] = useState(null);
  const [anchorElSize, setAnchorElSize] = useState(null);
  const [anchorElColor, setAnchorElColor] = useState(null);
  const [Brand, setBrand] = useState();
  const [Category, setCategory] = useState(undefined);
  const [Color, setColor] = useState(undefined);

  // Brand
  const openBrand = Boolean(anchorElBrand);
  const handleClickBrand = (event) => {
    setAnchorElBrand(event.currentTarget);
  };

  const handleCloseBrand = () => {
    setAnchorElBrand(null);
  };

  // Category
  const openCate = Boolean(anchorElCate);
  const handleClickCate = (event) => {
    setAnchorElCate(event.currentTarget);
  };

  const handleCloseCate = () => {
    setAnchorElCate(null);
  };

  // Size
  const openSize = Boolean(anchorElSize);
  const handleClickSize = (event) => {
    setAnchorElSize(event.currentTarget);
  };

  const handleCloseSize = () => {
    setAnchorElSize(null);
  };

  // Color
  const openColor = Boolean(anchorElColor);
  const handleClickColor = (event) => {
    setAnchorElColor(event.currentTarget);
  };

  const handleCloseColor = () => {
    setAnchorElColor(null);
  };

  return (
    <form>
      <Stack spacing={3}>
        <Box
          display={"flex"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            name="name"
            label="Product Name"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                flex: 0.4,
                color: "text.secondary",
                textAlign: "center",
                borderTop: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderRight: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderLeft: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                pt: 1,
                mb: -1,
                px: 3,
                borderRadius: 1,
              }}
            >
              {Brand ? Brand : "Brand"}
            </Box>

            <Button
              id="category-button"
              aria-controls={openBrand ? "category-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openBrand ? "true" : undefined}
              onClick={handleClickBrand}
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="category-menu"
              anchorEl={anchorElBrand}
              open={openBrand}
              onClose={handleCloseBrand}
              MenuListProps={{
                "aria-labelledby": "category-button",
              }}
            >
              <MenuItem
                disabled
                sx={{
                  flex: 0.4,
                  color: "text.secondary",
                  textAlign: "center",
                  borderBottom: (theme) =>
                    `2px solid ${theme.palette.primary.light}`,
                }}
              >
                Brand
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseCate();
                  setCategory("Cloths");
                }}
              >
                Cloths
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseCate();
                  setCategory("Cars");
                }}
              >
                Cars
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseCate();
                  setCategory("Laptop");
                }}
              >
                Laptop
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Box
              sx={{
                flex: 0.4,
                color: "text.secondary",
                textAlign: "center",
                borderTop: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderRight: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderLeft: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                pt: 1,
                mb: -1,
                px: 3,
                borderRadius: 1,
              }}
            >
              SIZE
            </Box>

            <Button
              id="size-button"
              aria-controls={openSize ? "size-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openSize ? "true" : undefined}
              onClick={handleClickSize}
            >
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="size-menu"
              anchorEl={anchorElSize}
              open={openSize}
              onClose={handleCloseSize}
              MenuListProps={{
                "aria-labelledby": "size-button",
              }}
            >
              <MenuItem
                disabled
                sx={{
                  flex: 0.4,
                  color: "text.secondary",
                  textAlign: "center",
                  borderBottom: (theme) =>
                    `2px solid ${theme.palette.primary.light}`,
                }}
              >
                Size{" "}
              </MenuItem>
              <MenuItem onClick={handleCloseSize}>SM</MenuItem>
              <MenuItem onClick={handleCloseSize}>MD</MenuItem>
              <MenuItem onClick={handleCloseSize}>Xl</MenuItem>
              <MenuItem onClick={handleCloseSize}>XXl</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                flex: 0.4,
                color: "text.secondary",
                textAlign: "center",
                borderTop: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderRight: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderLeft: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                pt: 1,
                mb: -1,
                px: 3,
                borderRadius: 1,
              }}
            >
              {Category ? Category : "Category"}
            </Box>

            <Button
              id="category-button"
              aria-controls={openCate ? "category-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openCate ? "true" : undefined}
              onClick={handleClickCate}
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="category-menu"
              anchorEl={anchorElCate}
              open={openCate}
              onClose={handleCloseCate}
              MenuListProps={{
                "aria-labelledby": "category-button",
              }}
            >
              <MenuItem
                disabled
                sx={{
                  flex: 0.4,
                  color: "text.secondary",
                  textAlign: "center",
                  borderBottom: (theme) =>
                    `2px solid ${theme.palette.primary.light}`,
                }}
              >
                Category
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseCate();
                  setCategory("Cloths");
                }}
              >
                Cloths
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseCate();
                  setCategory("Cars");
                }}
              >
                Cars
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseCate();
                  setCategory("Laptop");
                }}
              >
                Laptop
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Box
              sx={{
                flex: 0.4,
                color: "text.secondary",
                textAlign: "center",
                borderTop: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderRight: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                borderLeft: (theme) =>
                  `2px solid ${theme.palette.primary.light}`,
                pt: 1,
                mb: -1,
                px: 3,
                borderRadius: 1,
              }}
            >
              Colors
            </Box>

            <Button
              id="size-button"
              aria-controls={openColor ? "size-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openColor ? "true" : undefined}
              onClick={handleClickColor}
            >
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="size-menu"
              anchorEl={anchorElColor}
              open={openColor}
              onClose={handleCloseColor}
              MenuListProps={{
                "aria-labelledby": "size-button",
              }}
            >
              <MenuItem onClick={handleCloseColor}>Green</MenuItem>
              <MenuItem onClick={handleCloseColor}>Blue</MenuItem>
              <MenuItem onClick={handleCloseColor}>Yellow</MenuItem>
            </Menu>
          </Box>
        </Box>

        <TextField variant="outlined" name="description" label="Description" />
      </Stack>
    </form>
  );
}
