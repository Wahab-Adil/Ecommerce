import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Drawer,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";
import { FormatIndentDecrease } from "@mui/icons-material";

// components
import Logo from "../../components/Logo";
import Iconify from "../../components/Iconify";
import Scrollbar from "../../components/Scrollbar";
import { NavSectionVertical } from "../../components/nav-section";

// FILTER Items
import { useResponsive } from "../../hooks/use-responsive";

const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

// ----------------------------------------------------------------------

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: "capitalize",
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function FilterDrawer({
  categories,
  sortLanguages,
  sortConentType,
  selectedCategory,
  handleCategoryChange,
  selectedLanguage,
  setselectedLanguage,
  selectedContentType,
  setselectedContentType,
}) {
  const [open, setOpen] = useState(false);
  const isMatchMd = useResponsive("down", "md");

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box>
        <FormatIndentDecrease
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: "primary.main",
            },
          }}
          onClick={handleDrawerOpen}
        />
      </Box>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <Box
            sx={{
              display: "flex",
              flex: 0.3,
              flexDirection: isMatchMd ? "row" : "column",
              justifyContent: isMatchMd && "space-evenly",
              flexWrap: "wrap",
              padding: (theme) => theme.spacing(2),
              gap: 2,
            }}
          >
            <Box sx={{ marginBottom: (theme) => theme.spacing(2) }}>
              <Typography variant="h5">Categories</Typography>

              <RadioGroup value={selectedCategory}>
                {categories.map((category) => (
                  <FormControlLabel
                    key={category}
                    control={
                      <Radio
                        sx={{ fontWeight: "2rem" }}
                        onChange={handleCategoryChange}
                        value={category}
                      />
                    }
                    label={
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                        variant="subtitle2"
                      >
                        {category}
                      </Typography>
                    }
                  />
                ))}
              </RadioGroup>
            </Box>
            <Box>
              <Typography
                sx={{ color: (theme) => theme.palette.text.priamry }}
                variant="h6"
              >
                languages
              </Typography>
              <FormControl component="fieldset" sx={{ textAlign: "center" }}>
                <RadioGroup value={selectedLanguage}>
                  {sortLanguages.map((option) => (
                    <FormControlLabel
                      onChange={(event) =>
                        setselectedLanguage(event.target.value)
                      }
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.text.secondary,
                          }}
                          variant="subtitle2"
                        >
                          {option}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <Typography
                sx={{ color: (theme) => theme.palette.text.priamry }}
                variant="h6"
              >
                Types
              </Typography>
              <FormControl component="fieldset" sx={{ textAlign: "center" }}>
                <RadioGroup value={selectedContentType}>
                  {sortConentType.map((option) => (
                    <FormControlLabel
                      onChange={(event) =>
                        setselectedContentType(event.target.value)
                      }
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.text.secondary,
                          }}
                          variant="subtitle2"
                        >
                          {option}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  isOpen: PropTypes.bool,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  onOpen: PropTypes.func,
};

function MenuMobileItem({ item, isOpen, onOpen }) {
  const { title, path, icon, children } = item;

  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Iconify
            icon={
              isOpen
                ? "eva:arrow-ios-downward-fill"
                : "eva:arrow-ios-forward-fill"
            }
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} unmountOnExit>
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                "& .MuiList-root:last-of-type .MuiListItemButton-root": {
                  height: 200,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  bgcolor: "background.neutral",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(/assets/illustrations/illustration_dashboard.png)",
                  "& > *:not(.MuiTouchRipple-root)": { display: "none" },
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  if (title === "Documentation") {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        <ListItemStyle>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
        </ListItemStyle>
      </Link>
    );
  }

  return (
    <ListItemStyle
      to={path}
      component={RouterLink}
      end={path === "/"}
      sx={{
        "&.active": {
          color: "primary.main",
          fontWeight: "fontWeightMedium",
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}
