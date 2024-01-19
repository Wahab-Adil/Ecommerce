import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { Products } from "../../_mock";

//----------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f6f9ff",
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    minWidth: 200,
    height: 300, // Set a fixed height for all cards
    marginBottom: theme.spacing(2),
    position: "relative",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)", // Increase the scale on hover
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)", // Enhance the box shadow on hover
    },
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  productName: {
    alignSelf: "flex-start", // Position the product name in the bottom left corner
  },
  productPrice: {
    alignSelf: "flex-end", // Position the product price in the bottom right corner
  },
  productImage: {
    width: "100%", // Ensure the image fits within the card
    height: "auto", // Maintain the aspect ratio of the image
  },
}));

const LandingProducts = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4" component="h1" align="center">
        LATEST PRODUCTS
      </Typography>
      <div className={classes.root}>
        <Box style={{ marginTop: "20px" }} />

        <Grid container spacing={2}>
          {Products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.productName}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.productPrice}
                  >
                    Price: ${product.price}
                  </Typography>
                </CardContent>
                <img
                  src={product.picture}
                  alt={product.name}
                  className={classes.productImage}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/products"
          >
            View All Products :)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingProducts;
