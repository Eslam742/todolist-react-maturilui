import React from 'react';

import { Avatar, Link,Typography ,Toolbar,AppBar, IconButton} from '@mui/material';
import { Menu } from '@mui/icons-material';




function Appbar({drawerWidth,showdrawer}) {

  return (
    <AppBar sx={{ width: {sm:`calc(100% - ${drawerWidth}px)`}, ml: {xs:0 ,sm:`${drawerWidth}px`} }} position="static">
      <Toolbar>
        <IconButton onClick={() => {
          showdrawer();
        }} sx={{mr:"10px", display:{sm:"none"}}} >
          <Menu/>
        </IconButton>


                     <Link  color="inherit" href="/" sx={{ flexGrow: 1,textDecoration:"none","&:hover":{fontSize:"17px"} }}>My Expenses</Link>


              <Link sx={{ color: "inherit", textDecoration: "none" }}
                  href="https://www.facebook.com/profile.php?id=100038870297474&mibextid=ZbWKwL" target="_blank">
                     <Typography sx={{mr:2,cursor:"pointer"}} variant="body1" color="inherit">Eslam Reda</Typography>
                     </Link>

                     <Avatar alt="Remy Sharp" src="images/e.jpg" />
        </Toolbar>
      </AppBar>
  )
}

export default Appbar
