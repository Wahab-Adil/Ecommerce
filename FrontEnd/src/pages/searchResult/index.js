// @mui
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

// pages
import Filter from "../searchResult/filterPage";
import SearchResultPage from "../searchResult/SearchResult";

// hooks
import { useResponsive } from "../../hooks/use-responsive";

const ContentStyle = styled("div")(({ theme }) => ({
  marginTop: "7rem",
  overflow: "hidden",
  position: "relative",
  paddingRight: "2rem",
  paddingLeft: "2rem",
  backgroundColor: theme.palette.background.default,
}));

const SearchResult = () => {
  const isMatchSm = useResponsive("down", "md");
  return (
    <ContentStyle>
      <Stack
        display={"flex"}
        flexDirection={isMatchSm ? "column" : "row"}
        gap={3}
      >
        <Filter />
        <SearchResultPage />
      </Stack>
    </ContentStyle>
  );
};
export default SearchResult;
