"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";
import { usePathname } from "next/navigation";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const pathName = usePathname();

  React.useEffect(() => {
    if (pathName === "/products") {
      setValue(0);
    } else if (pathName === "/products/items") {
      setValue(1);
    } else if (pathName === "/order") {
      setValue(2);
    } else if (pathName === "/tables") {
      setValue(3);
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const styles: { default_tabs: {}; active_tabs: {}; tab: {}[] } = {
    default_tabs: {
      color: "blue",
      background: "white",
      fontWeight: 400,
    },
    active_tabs: {
      color: "white",
      background: "blue",
    },
    tab: [],
  };

  styles.tab[0] = styles.default_tabs;
  styles.tab[1] = styles.default_tabs;
  styles.tab[2] = styles.default_tabs;
  styles.tab[3] = styles.default_tabs;
  styles.tab[value] = Object.assign({}, styles.tab[value], styles.active_tabs);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "95vh",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          LinkComponent={Link}
          href="/products"
          style={styles.tab[0]}
          label="Products"
          {...a11yProps(0)}
        />
        <Tab
          LinkComponent={Link}
          href="/products/items"
          style={styles.tab[1]}
          label="Items"
          {...a11yProps(1)}
        />
        <Tab
          LinkComponent={Link}
          href="/order"
          style={styles.tab[2]}
          label="Order"
          {...a11yProps(2)}
        />
        <Tab
          LinkComponent={Link}
          href="/tables"
          style={styles.tab[3]}
          label="Tables"
          {...a11yProps(3)}
        />
        {/* <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
    </Box>
  );
}
