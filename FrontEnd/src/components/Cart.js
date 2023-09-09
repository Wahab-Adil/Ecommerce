import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  CardActions,
  IconButton,
  Chip,
} from "@mui/material";
import myData from "../utils/MyData";

const Cart = () => {
  return (
    <>
      <Stack
        px={{ xs: 2, sm: 6 }}
        direction="row"
        sx={{
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        {myData.map(({ icon, title, description }) => {
          return (
            <Card sx={{ width: "15rem" }}>
              <CardMedia
                component="img"
                style={{ height: "9rem", borderRadius: "1rem" }}
                image={icon}
              />
              <CardContent sx={{ padding: "0", py: "1rem" }}>
                <Typography variant="body2" fontWeight="bold" pb={1}>
                  {title}
                </Typography>
                <Stack direction="row" sx={{ gap: "3px", mb: "10px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "1rem",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "blue",
                      borderRadius: "1rem",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "green",
                      borderRadius: "1rem",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "yellow",
                      borderRadius: "1rem",
                    }}
                  ></div>
                </Stack>
                <CardActions
                  sx={{ justifyContent: "space-between", padding: "0" }}
                >
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    404$
                  </Typography>
                  <IconButton>
                    <Chip label="Add to" />
                  </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default Cart;
