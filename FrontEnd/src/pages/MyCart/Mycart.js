import React from "react";
import {
  Typography,
  Stack,
  Paper,
  TableContainer,
  Table,
  Chip,
  TableCell,
  TableBody,
  styled,
  TableHead,
  TableRow,
  Button,
  useTheme,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img7.jpg";

import { Delete } from "@mui/icons-material";
// animation
import Lottie from "react-lottie";
import borderAnimation from "../../animations/shared/border.json";
import animationSetter from "../../animations/animationSetter";

const StyledCell = styled(TableCell)(({ theme }) => ({
  padding: "0 !important",
}));

const myData = [
  {
    icon: img1,
    title: "Description Here",
    description:
      "this is the description for the item above and more imformation for the item",
    price: "300$",
    offPrice: "400$",
  },
  {
    icon: img2,
    title: "Description Here",
    description:
      "this is the description for the item above and more imformation for the item",
    price: "300$",
    offPrice: "400$",
  },
  {
    icon: img3,
    title: "Description Here",
    description:
      "this is the description for the item above and more imformation for the item",
    price: "300$",
    offPrice: "400$",
  },
  {
    icon: img4,
    title: "Description Here",
    description:
      "this is the description for the item above and more imformation for the item",
    price: "300$",
    offPrice: "400$",
  },
  {
    icon: img5,
    title: "Description Here",
    description:
      "this is the description for the item above and more imformation for the item",
    price: "300$",
    offPrice: "400$",
  },
  {
    icon: img6,
    title: "Description Here",
    description:
      "this is the description for the item above and more imformation for the item",
    price: "300$",
    offPrice: "400$",
  },
];

const Mycart = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          px: { xs: 2, sm: 6 },
          fontWeight: "bold",
          mt: "5rem",
        }}
      >
        Your Shopping
      </Typography>

      <Typography
        sx={{
          px: { xs: 2, sm: 6 },
          mt: "4rem",
        }}
      >
        home / My Cart
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: !isMdScreen ? "row" : "column-reverse",
          gap: isMdScreen ? 2 : undefined,
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            flex: 1.3,
            boxShadow: theme.shadows[20],
            padding: 2,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Chip
                    sx={{
                      color: theme.palette.text.primary,
                      p: 1,
                      fontWeight: "bold",
                      backgroundColor: theme.palette.background.default,
                      boxShadow: theme.shadows[15],
                    }}
                    label="Items"
                  />
                </TableCell>
                <TableCell align="left">
                  <Chip
                    sx={{
                      color: theme.palette.text.primary,
                      p: 1,
                      fontWeight: "bold",
                      backgroundColor: theme.palette.background.default,
                      boxShadow: theme.shadows[15],
                    }}
                    label="Description"
                  />
                </TableCell>
                <TableCell align="left">
                  <Chip
                    sx={{
                      color: theme.palette.text.primary,
                      p: 1,
                      fontWeight: "bold",
                      backgroundColor: theme.palette.background.default,
                      boxShadow: theme.shadows[15],
                    }}
                    label="Quantity"
                  />
                </TableCell>
                <TableCell align="left">
                  <Chip
                    sx={{
                      color: theme.palette.text.primary,
                      p: 1,
                      fontWeight: "bold",
                      backgroundColor: theme.palette.background.default,
                      boxShadow: theme.shadows[15],
                    }}
                    label="Price"
                  />
                </TableCell>{" "}
                <TableCell align="left">
                  <Chip
                    sx={{
                      color: theme.palette.text.primary,
                      p: 1,
                      fontWeight: "bold",
                      backgroundColor: theme.palette.background.default,
                      boxShadow: theme.shadows[15],
                    }}
                    label="Actions"
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myData.map(({ icon, title, description, price, offPrice }) => {
                return (
                  <>
                    <TableRow>
                      {/* item image */}
                      <TableCell sx={{ padding: "0 !important" }}>
                        <img
                          src={icon}
                          style={{
                            width: "9rem",
                            height: "6rem",
                            borderRadius: "0.8rem",
                            boxShadow: theme.shadows[10],
                          }}
                        />
                      </TableCell>

                      {/* item description */}

                      <TableCell sx={{ padding: "0 !important" }}>
                        <Stack sx={{ gap: 2 }}>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "gray",
                              maxWidth: "10rem",
                              wordBreak: "break-word",
                            }}
                          >
                            {description}{" "}
                          </p>
                        </Stack>
                      </TableCell>

                      {/* item quntity */}
                      <TableCell sx={{ padding: "0 !important" }}>
                        <Stack alignItems="start" gap="1rem">
                          <ButtonGroup>
                            <Button>-</Button>
                            <Button disableRipple>100</Button>
                            <Button>+</Button>
                          </ButtonGroup>
                        </Stack>
                      </TableCell>

                      {/* item price */}
                      <TableCell sx={{ padding: "0 !important" }}>
                        <Typography
                          color={"primary.main"}
                          sx={{ textAlign: "center" }}
                          variant="h6"
                          fontWeight="bold"
                        >
                          {price}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ textDecoration: "line-through" }}
                        >
                          {offPrice}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          padding: "0 !important",
                          color: theme.palette.text.primary,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Stack alignItems="start" gap="1rem">
                          <Button
                            sx={{
                              color: theme.palette.text.secondary,
                              "&:hover": {
                                color: theme.palette.text.primary,
                              },
                            }}
                          >
                            <Delete />
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <div style={{ marginBottom: "1.5rem" }} />
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack
          sx={{
            flex: 0.7,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[24],
            borderRadius: 2,
            ml: 1,
            height: "fit-content",
            padding: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "primary.main",
            }}
            variant="h5"
            fontWeight="bold"
          >
            Order Summary
          </Typography>

          <Stack mt="3rem" justifyContent="space-between">
            <Typography variant="body2">Subtotal</Typography>
            <Typography variant="body2">555$</Typography>
          </Stack>
          <hr />
          <Stack mt="2rem" justifyContent="space-between">
            <Typography variant="body2">Discount (20%)</Typography>
            <Typography variant="body2">555$</Typography>
          </Stack>
          <hr />
          <Stack mt="2rem" justifyContent="space-between">
            <Typography variant="body2">Delivery Fee</Typography>
            <Typography variant="body2">555$</Typography>
          </Stack>
          <hr />

          <Stack mt="3rem" mb="3rem" justifyContent="space-between">
            <Typography variant="body1" fontWeight="bold">
              Total
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              555$
            </Typography>
          </Stack>

          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              opacity: 0.7,
              color: "white",
              borderRadius: "10rem",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
              },
            }}
          >
            Go to Checkout
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
export default Mycart;
