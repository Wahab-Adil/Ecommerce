import React from "react";
import {
  Typography,
  Stack,
  Grid,
  Chip,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  useTheme,
  TableRow,
  Button,
  ButtonGroup,
  TextField,
  Hidden,
  Box,
  IconButton,
} from "@mui/material";

import { Delete, Description } from "@mui/icons-material";
import Cart from "../components/Cart";

import myData from "../utils/MyData";
import { Link } from "react-router-dom";

const Mycart = () => {
  const theme = useTheme();

  return (
    <>
      <Stack mt="8rem">
        <Typography
          variant={{xs:"h5",sm:"h4"}}
          sx={{
            px: { xs: 2, sm: 6 },
            fontWeight: "bold",
            textAlign:{xs:'center',sm:"left"}
          }}
        >
          Your Shopping
        </Typography>
      </Stack>

      <Stack mt="4rem">
        <Typography
          sx={{
            px: { xs: 2, sm: 6 },
            mt: "4rem",
            textAlign:{xs:'center',sm:"left"}

          }}
        >
          home / My Cart
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ mt: "4rem" }}
        p={4}
        gap={{ xs: 8, sm: 0 }}
        alignItems="center"
        gap={10}
      >
        <Hidden mdDown>
          <TableContainer sx={{ px: 6 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ p: "0 !important" }}>
                    <Chip label="Items" />
                  </TableCell>
                  <TableCell align="left" sx={{ p: "0 !important" }}>
                    <Chip label="Description" />
                  </TableCell>
                  <TableCell align="left" sx={{ p: "0 !important" }}>
                    <Chip label="Quantity" />
                  </TableCell>
                  <TableCell align="left" sx={{ p: "0 !important" }}>
                    <Chip label="Price" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <div style={{ marginTop: "2rem" }} />
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
                              width: "13rem",
                              height: "9rem",
                              borderRadius: "0.8rem",
                            }}
                          />
                        </TableCell>

                        {/* item description */}

                        <TableCell sx={{ padding: "0 !important" }}>
                          <Stack sx={{ gap: 2 }}>
                            <Typography variant="h6" fontWeight="bold">
                              {title}
                            </Typography>
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
                            <Button>
                              <Delete />
                            </Button>

                            <ButtonGroup>
                              <Button>-</Button>
                              <Button disableRipple>100</Button>
                              <Button>+</Button>
                            </ButtonGroup>
                          </Stack>
                        </TableCell>

                        {/* item price */}
                        <TableCell sx={{ padding: "0 !important" }}>
                          <Typography variant="h6" fontWeight="bold">
                            {price}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ textDecoration: "line-through" }}
                          >
                            {offPrice}
                          </Typography>
                        </TableCell>
                      </TableRow>

                      <div style={{ marginBottom: "1.5rem" }} />
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Hidden>

        <Hidden mdUp>
          <Stack px={2}>
            {myData.map(({ title, icon, description, price }) => {
              return (
                <Stack alignItems={"center"} mt={8}>
                  <img
                    src={icon}
                    style={{
                      width: "15rem",
                      height: "9rem",
                      borderRadius: "0.8rem",
                    }}
                  />
                  <Box mt={2}>
                    <Typography
                      variant="caption2"
                      style={{ fontWeight: "bold" }}
                    >
                      {title}
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      {description}
                    </Typography>
                  </Box>

                  <Box mt={2}>
                    <Typography
                      variant="caption2"
                      style={{ fontWeight: "bold" }}
                    >
                      {price}
                    </Typography>
                  </Box>

                  <Stack direction={'row'} mt={2} gap={7}>
                    <IconButton>
                      <Delete />
                    </IconButton>

                    <ButtonGroup>
                      <Button>-</Button>
                      <Button>100</Button>
                      <Button>+</Button>
                    </ButtonGroup>
                  </Stack >
                </Stack>
              );
            })}
          </Stack>
        </Hidden>

        <Stack pr={{ xs: 0, sm: 6 }} width={{ xs: "100%", sm: "25rem" }}>
          <Typography sx={{textAlign:{xs:"center",sm:"left"}}} variant={{xs:"h5",sm:"h4"}} fontWeight="bold">
            Order Summary
          </Typography>

          <Stack mt="3rem" direction="row" justifyContent="space-between">
            <Typography variant="body2">Subtotal</Typography>
            <Typography variant="body2">555$</Typography>
          </Stack>
          <hr />
          <Stack mt="2rem" direction="row" justifyContent="space-between">
            <Typography variant="body2">Discount (20%)</Typography>
            <Typography variant="body2">555$</Typography>
          </Stack>
          <hr />
          <Stack mt="2rem" direction="row" justifyContent="space-between">
            <Typography variant="body2">Delivery Fee</Typography>
            <Typography variant="body2">555$</Typography>
          </Stack>
          <hr />

          <Stack
            mt="3rem"
            mb="3rem"
            direction="row"
            justifyContent="space-between"
            width={{ xs: "100%" }}
          >
            <Typography variant="body1" fontWeight="bold">
              Total
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              555$
            </Typography>
          </Stack>

          <Button
            variant="outlined"
            style={{ color: "black", borderRadius: "10rem" }}
          >
            Go to Checkout
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{
              backgroundColor: "#000000",
              borderRadius: "10rem",
              marginTop: "1rem",
              color: "white",
            }}
            py={10}
          >
            Go to Checkout
          </Button>
        </Stack>
      </Stack>

      <Stack mt={10} mb={10}>
        <Typography
          sx={{ textAlign: { xs: "center", sm: "left",fontWeight:"bold" } }}
          px={6}
          variant={{ xs: "h5", sm: "h4" }}
        >
          You May Like
        </Typography>
      </Stack>

      <Stack style={{ marginTop: "4rem" }}>
        <Cart />
      </Stack>

      {/* my cart page footer block */}

      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        p={8}
        mt={10}
        gap={5}
        justifyContent="space-between"
      >
        <Grid item>
          <Grid item>
            <img
              src={myData[0].icon}
              style={{ width: "30px", height: "30px" }}
            />
          </Grid>

          <Grid item mt={3}>
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Join our newsletter to stay up to date on features and releases
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction={{ xs: "column", sm: "row" }}
            mt={3}
            gap={{ xs: 4, sm: 10 }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter you email"
              sx={{ borderRadius: "0px" }}
            />
            <Button>Subscribe</Button>
          </Grid>

          <Grid item mt={3}>
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Join our newsletter to stay up to date on features and releases
            </Typography>
          </Grid>
        </Grid>

        {/* second row of my cart page footer  */}

        <Grid
          item
          contaier
          direction="column"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Grid item>
            <Link to="/" style={{ color: "black", fontWeight: "bold" }}>
              About us
            </Link>
          </Grid>

          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              FAQ
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Contact
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Returns
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Blog
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Shipping
            </Link>
          </Grid>
        </Grid>

        {/* third row of my cart page footer  */}

        <Grid
          item
          contaier
          direction="column"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Grid item>
            <Link to="/" style={{ color: "black", fontWeight: "bold" }}>
              Customer Support
            </Link>
          </Grid>

          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Affiliates
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Apple
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Returns
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Returns Policy
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Returns
            </Link>
          </Grid>
        </Grid>

        {/* forth row of my cart page footer  */}

        <Grid
          item
          contaier
          direction="column"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Grid item>
            <Link to="/" style={{ color: "black", fontWeight: "bold" }}>
              Follow Us
            </Link>
          </Grid>

          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Facebook
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Contact
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Instagram
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Twitter
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/" style={{ color: "black", color: "gray" }}>
              Linkedin
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
        }}
        pb={8}
        px={6}
        justifyContent="space-between"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography variant="body1">
            @ 2023 G Firnuture. All rights reserved.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: 2, sm: 4 }}
          mt={{ xs: 2, sm: 0 }}
        >
          <Typography variant="body1">Privacy Policy</Typography>
          <Typography variant="body1">Terms of Servic</Typography>
          <Typography variant="body1">Cookies Settings</Typography>
        </Stack>
      </Stack>
    </>
  );
};
export default Mycart;
