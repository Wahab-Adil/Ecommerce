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
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Select,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FurnitureIcon from "@material-ui/icons/Weekend";
import LivingRoomIcon from "@material-ui/icons/Weekend";
import AboutIcon from "@material-ui/icons/Info";
import ContactIcon from "@material-ui/icons/ContactMail";
import LockIcon from "@material-ui/icons/Lock";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link } from "react-router-dom";
import { PATH_AUTH } from "../routes/path";

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
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  select: {
    color: "white",
    "&:focus": {
      backgroundColor: "#f5f5f5",
    },
  },
}));

const MainHeader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [select, setSelect] = React.useState(0);
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

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
                {isMdScreen ? (
                  <Select
                    // variant="outlined"
                    // displayEmpty
                    value={select}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "navigation" }}
                    classes={{ root: classes.select }}
                  >
                    <MenuItem
                      value={0}
                      component={Link}
                      to="/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <HomeIcon style={{ marginRight: "8px" }} />
                      Home
                    </MenuItem>
                    <MenuItem
                      value={1}
                      component={Link}
                      to="/shop"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ShoppingCartIcon style={{ marginRight: "8px" }} />
                      Shop Now
                    </MenuItem>
                    <MenuItem
                      value={2}
                      component={Link}
                      to="/furniture"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FurnitureIcon style={{ marginRight: "8px" }} />
                      Furniture
                    </MenuItem>
                    <MenuItem
                      value={3}
                      component={Link}
                      to="/living-room"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <LivingRoomIcon style={{ marginRight: "8px" }} />
                      Living Room
                    </MenuItem>
                    <MenuItem
                      value={4}
                      component={Link}
                      to="/about"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <AboutIcon style={{ marginRight: "8px" }} />
                      About Us
                    </MenuItem>
                    <MenuItem
                      value={5}
                      component={Link}
                      to="/contact"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ContactIcon  style={{ marginRight: "8px" }} />
                      Contact Us
                    </MenuItem>
                  </Select>
                ) : (
                  <>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/"
                      startIcon={<HomeIcon />}
                    >
                      Home
                    </Button>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/shop"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Shop Now
                    </Button>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/furniture"
                      startIcon={<FurnitureIcon />}
                    >
                      Furniture
                    </Button>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/living-room"
                      startIcon={<LivingRoomIcon />}
                    >
                      Living Room
                    </Button>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/about"
                      startIcon={<AboutIcon />}
                    >
                      About Us
                    </Button>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/contact"
                      startIcon={<ContactIcon />}
                    >
                      Contact Us
                    </Button>
                  </>
                )}
              </Box>
              <Box>
                <Button color="inherit" component={Link} to={PATH_AUTH.login}>
                  <LockIcon /> &nbsp; Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  <PersonAddIcon /> &nbsp; Register
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
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/shop">
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Shop Now" />
            </ListItem>
            <ListItem button component={Link} to="/furniture">
              <ListItemIcon>
                <FurnitureIcon />
              </ListItemIcon>
              <ListItemText primary="Furniture" />
            </ListItem>
            <ListItem button component={Link} to="/living-room">
              <ListItemIcon>
                <LivingRoomIcon />
              </ListItemIcon>
              <ListItemText primary="Living Room" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                <AboutIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button component={Link} to={PATH_AUTH.login}>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default MainHeader;
