import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Rating, useTheme, Divider, Menu, MenuItem } from "@mui/material";

// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// components
import ColorPreview from "../../components/color/colorPreview";

// image
import img from "../../assets/img3.jpg";

const productDetails = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          minWidth: "98vw",
          mt: "2em ",
          minHeight: "90vh",
          boxShadow: theme.shadows[20],
          display: "flex",
        }}
      >
        <CardMedia
          sx={{
            maxHeight: "50%",
            width: "100%",
            flex: 1,
            display: "flex",
            alignItems: "center",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            boxShadow: theme.shadows[20],
            borderRadius: 3,
            m: 2,
          }}
          image={img}
        />
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Typography gutterBottom variant="h4">
                Product Name
              </Typography>
              <Rating
                sx={{
                  "&": {
                    color: theme.palette.primary.light,
                  },
                }}
                name="size-medium"
                defaultValue={5}
                readOnly
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "baseline",
              }}
            >
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  mt: 2,
                  "&": {
                    textDecoration: "line-through",
                    fontWeight: "bold",
                    textDecorationColor: theme.palette.primary.light,
                    textDecorationStyle: "solid",
                  },
                }}
              >
                40$
              </Typography>
              <Typography
                sx={{ pr: "-30px" }}
                variant="h5"
                color="primary.light"
              >
                39.99$
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "baseline",
            }}
          >
            <Box>
              <Typography variant="body1" gutterBottom>
                Brand
              </Typography>
              <Typography variant="body1" color="primary.light">
                Z-masters
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" gutterBottom>
                Category
              </Typography>
              <Typography variant="body1" color="primary.light">
                Sofa
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" color="text.primary" mb={3}>
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mt: "4em",
              }}
            >
              <Box
                sx={{
                  flex: 1.2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "base-line",
                }}
              >
                <Box sx={{ color: "text.secondary", mt: -1 }}>COLORS</Box>
                <Box>
                  <ColorPreview
                    sx={{ pr: 2, mt: 1 }}
                    colors={[
                      theme.palette.primary.light,
                      theme.palette.secondary.light,
                      theme.palette.success.light,
                    ]}
                  />
                </Box>
              </Box>
              <Divider
                sx={{
                  mt: "2em",
                  transform: "rotate(90deg)",
                  width: "80px",
                  height: "2px",
                  backgroundColor: theme.palette.primary.main,
                  direction: "revert-layer",
                }}
              />

              <Box>
                <Box
                  sx={{
                    flex: 0.4,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  SIZE
                </Box>

                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
              <Divider
                sx={{
                  mt: "2em",
                  transform: "rotate(90deg)",
                  width: "80px",
                  height: "2px",
                  backgroundColor: theme.palette.primary.main,
                  direction: "revert-layer",
                }}
              />
              <Box>
                <Box
                  sx={{
                    flex: 0.4,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  QTY
                </Box>
                <Box>
                  <Button
                    id="qty-button"
                    aria-controls={open ? "qty-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <KeyboardArrowDownIcon />
                  </Button>
                  <Menu
                    id="qty-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "qty-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>
            <Box mt={3}>
              <CardActions>
                <Button
                  sx={{
                    margin: "auto",
                    p: "14px 20px 14px 20px",
                    fontWeight: "bold",
                    background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                  }}
                  variant="contained"
                  size="small"
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default productDetails;
