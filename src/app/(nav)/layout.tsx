import VerticalTabs from "./navigation/page";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={1.2}>
          <VerticalTabs />
        </Grid>
        <Grid item xs={10.8}>{children}</Grid>
      </Grid>
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "10%" }}>
          <VerticalTabs />
        </div>
        <div style={{ width: "90%" }}>{children}</div>
      </div> */}
    </Box>
  );
};

export default NavLayout;
