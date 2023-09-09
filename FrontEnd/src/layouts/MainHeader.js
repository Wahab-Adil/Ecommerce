import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor: "transparent",
    // color:'black',
    // boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between", // Add space between toolbar items for screens larger than sm breakpoint
    },
  },
  websiteName: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(2), // Add margin for screens larger than sm breakpoint
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "blue",
  },
  drawerContainer: {
    overflow: "auto",
    color:"white"

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const MainHeader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    if (!isMobile) {
      setOpen(false); // Close the sidebar when switching to PC size
    }
  }, [isMobile]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Furniture E-commerce Website
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" noWrap className={classes.websiteName}>
                Furniture E-commerce Website
              </Typography>
              <Box>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/shop">
                  Shop Now
                </Button>
                <Button color="inherit" component={Link} to="/furniture">
                  Furniture
                </Button>
                <Button color="inherit" component={Link} to="/living-room">
                  Living Room
                </Button>
                <Button color="inherit" component={Link} to="/about">
                  About Us
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                  Contact Us
                </Button>
              </Box>
              <Box>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        // variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/shop">
              <ListItemText primary="Shop Now" />
            </ListItem>
            <ListItem button component={Link} to="/furniture">
              <ListItemText primary="Furniture" />
            </ListItem>
            <ListItem button component={Link} to="/living-room">
              <ListItemText primary="Living Room" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <div style={{marginTop:"4rem"}}/>
    </div>
  );
};

export default MainHeader;
