import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FileIcon from "../../assets/fileIcon.png";
import Vector from "../../assets/Vector.png";
import XpertCareLogo from "../../assets/Xpert 4.png";
import ChevronRight from "../../assets/Chevron right.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../../App.css";
import FormPropsTextFields from "../form/form.js";

const drawerWidth = 240;
const sidebarStyling = {
    background: "#1185CB"
}

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            New Admission
          </Typography>
          {<img src={ChevronRight} alt="Che" height="auto" width="auto" />}
          <Typography variant="h6" noWrap component="div">
            Company Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          sidebarStyling
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          {
            <img
              src={XpertCareLogo}
              alt="XpertCareLogo"
              height="auto"
              width="auto"
            />
          }
        </Toolbar>
        <Divider />
        <List>
          {[
            "Dashboard",
            "New Admission",
            "Individual",
            "Corporate",
            "Application Status",
            "Roles",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {
                    <img
                      src={FileIcon}
                      alt="FileIcon"
                      height="auto"
                      width="auto"
                    />
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
                <ListItemIcon>
                  {
                    <img
                      src={Vector}
                      alt="Arrow Icon"
                      height="auto"
                      width="auto"
                    />
                  }
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Hello Amir", "Apollo Hospital"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <BrowserRouter>
          {/* <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography> */}
          <Routes>
            <Route path="/" element={<FormPropsTextFields />} />
            {/* <Route path="/table" element={<DynamicTable />} />
            <Route path="/fixture" element={<Fixture />} /> */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </Box>
    </Box>
  );
}
