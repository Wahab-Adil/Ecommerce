import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Rating,
  Box,
  useTheme,
} from "@mui/material";

//images
import filter1 from "../../assets/landing/filter1.jpeg";
import filter2 from "../../assets/landing/filter2.jpeg";
import filter3 from "../../assets/landing/filter3.jpeg";
import filter4 from "../../assets/landing/filter4.jpeg";
// hooks
import { useResponsive } from "../../hooks/use-responsive";
import { Filter4TwoTone } from "@mui/icons-material";

const mockSearchResults = [
  {
    title: "Bx-4-pro",
    Description: "Apple",
    image: filter1,
    rating: 4.5,
    price: "$19.99",
  },
  {
    title: "NW-bM-O",
    Description: "Samsung",
    instructor: "Pro ji",
    image: filter2,
    rating: 4.5,
    price: "$17.89",
  },
  {
    title: "Hero-Green",
    Description: "Huawei",
    instructor: "John Doe",
    image: filter3,
    rating: 4.5,
    price: "$12.49",
  },
  {
    title: "Hero-Green",
    Description: "Huawei",
    instructor: "Helmmandi",
    image: filter4,
    rating: 4.5,
    price: "$59.99",
  },
];

const SearchResultPage = () => {
  const theme = useTheme();
  const isMatchMobile = useResponsive("down", "md");
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flex: 1.7,
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        {mockSearchResults.map(
          ({ title, instructor, image, Description, price }, index) => (
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "4px",
                height: isMatchMobile ? "100%" : "400px",
                maxWidth: "300px",
              }}
              key={index + image}
            >
              <CardMedia
                sx={{
                  width: isMatchMobile ? "100%" : "300px",
                  height: isMatchMobile ? "100%" : "300px",
                }}
                component="img"
                alt={title}
                image={image}
                title={title}
              />
              <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    width: isMatchMobile ? "100%" : "300px",
                    height: isMatchMobile ? "100%" : "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    {Description}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    {instructor}
                  </Typography>
                  <Rating
                    name="Course-star"
                    defaultValue={2.5}
                    precision={0.5}
                    size={"small"}
                    readOnly
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    {price}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          )
        )}
      </Box>
    </Box>
  );
};

export default SearchResultPage;
