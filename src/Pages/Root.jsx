import React, { useMemo } from 'react'
import {  Outlet } from 'react-router-dom';
import {Box} from '@mui/material';
import Appbar from 'Components/Appbar';
import Sidebar from 'Components/Sidebar';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

import getDesignTokens from 'Styles/Mytheme';



const drawerWidth = 240;
const Root = () => {
     const [noneorblock, setnoneorblock] = useState("none");
     const [drawertype,setdrawertype]=useState("permanent")
     const [mode,setMymode]=useState(localStorage.getItem("currentmode") === null
      ? "dark"
      : localStorage.getItem("currentmode") === "light"
      ? "light"
      : "dark",);



     const showdrawer = () => {
            setnoneorblock("block");
          setdrawertype("temporary");
     }
   const hidedrawer = () => {
          setnoneorblock("none");
        setdrawertype("permanent");
     }

     const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

     return (
          <ThemeProvider theme={theme}>
            <CssBaseline />
         <div>


                    <Appbar {...{drawerWidth,showdrawer}}/>

                    <Sidebar {...{drawerWidth,setMymode, noneorblock, drawertype,hidedrawer}}/>
             <Box component="main" sx={{ml: {sm:`${drawerWidth}px`}, display: "flex", justifyContent: "center", mt: "66px", }}>
                 <Outlet />
             </Box>

         </div>
          </ThemeProvider>
     );
}
export default Root