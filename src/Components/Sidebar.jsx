
import { Divider, Drawer,List, ListItem, ListItemButton, ListItemText, ListItemIcon, useTheme,  IconButton, Box} from '@mui/material';
import { useLocation, useNavigate  } from "react-router-dom";
import { AccountCircle, Create, Home, Logout, Settings } from '@mui/icons-material';
import {Brightness7,Brightness4} from '@mui/icons-material';




function Sidebar({ drawerWidth,setMymode,noneorblock,drawertype, hidedrawer}) {
    const navigate = useNavigate();
  const theme = useTheme();
  let currentlocation = useLocation();

const mylist=[
  { text: "Home", icon: <Home/>, path: "/" },
  {text:"Create",icon:<Create />,path:"/create"},
  {text:"Profile",icon:<AccountCircle />,path:"/profile"},
  {text:"Settings",icon:<Settings/>,path:"/settings"},

]

  return (
    <Box component="nav">
          <Drawer
      sx={{
          display:{xs:noneorblock,sm:"block",},
          width: `${drawerWidth}px`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${drawerWidth}px`,
            boxSizing: 'border-box',
          },
        }}
        variant={drawertype}
      anchor="left"
      open={true}
      onClose={() => {

        hidedrawer();
      }}
    >



          <List>

          <ListItem sx={{display:"flex",justifyContent:"center",mb:"14px"}} disablePadding>
          <IconButton onClick={() => {
            localStorage.setItem("currentmode", theme.palette.mode === "dark"? "light" : "dark")
              setMymode(theme.palette.mode === "light" ? "dark" : "light")
          }} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 sx={{color:"orange"}} /> : <Brightness4 />}
      </IconButton>


          </ListItem>

<Divider />

        {mylist.map((item) => {
          return (
 <ListItem key={item.text} sx={{bgcolor: currentlocation.pathname===item.path? theme.palette
// @ts-ignore
           .favColor.main : null}} disablePadding>
            <ListItemButton  onClick={()=>{
                navigate(item.path );
            }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
              </ListItem>
);
})}




               <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>




          </List>

      </Drawer>
</Box>
  )
}

export default Sidebar
