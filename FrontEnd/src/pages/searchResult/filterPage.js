import React, { useState } from "react";
import {
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Box,
} from "@mui/material";
// hooks
import { useResponsive } from "../../hooks/use-responsive";
import Scrollbar from "../../components/Scrollbar";

// Drawer
import FilterDrawer from "./filterDrawer";

const categories = [
  "Development",
  "Design",
  "Business",
  "IT & Software",
  "Personal Development",
];
const sortLanguages = ["Pashto", "Dari", "English"];
const sortConentType = ["Article", "Video", "Audio"];

const FilterPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setselectedLanguage] = useState("");
  const [selectedContentType, setselectedContentType] = useState("");

  const isMatchMd = useResponsive("down", "md");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 0.3,
        flexDirection: "column",
        justifyContent: isMatchMd && "space-evenly",
        flexWrap: "wrap",
        padding: (theme) => theme.spacing(2),
        gap: 2,
        paddingRight: 3,

        borderRight: !isMatchMd
          ? (theme) => `1px solid ${theme.palette.text.primary}`
          : undefined,
        borderBottom: isMatchMd
          ? (theme) => `1px solid ${theme.palette.text.primary}`
          : undefined,
      }}
    >
      {isMatchMd && (
        <FilterDrawer
          categories={categories}
          sortLanguages={sortLanguages}
          sortConentType={sortConentType}
          selectedCategory={selectedCategory}
          selectedLanguage={setselectedLanguage}
          handleCategoryChange={handleCategoryChange}
          selectedLanguage={selectedLanguage}
          setselectedLanguage={setselectedLanguage}
          selectedContentType={selectedContentType}
          setselectedContentType={setselectedContentType}
        />
      )}
      {isMatchMd ? undefined : (
        <Scrollbar>
          <Box sx={{ position: "fixed", top: "100px" }}>
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
      )}
    </Box>
  );
};

export default FilterPage;
