import "./Home.css"
import React, { useEffect ,useState} from 'react'
import {Box ,Paper, Typography, IconButton} from '@mui/material';
import { Close } from "@mui/icons-material";



const Home=()=> {
  const [mydata, setmydata] = useState([]);
//const [totalprice, settotalprice] = useState(0);     //http://localhost:3100/mydata
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
},[])

let totalprice=0
    return (

      <Box>
        {mydata.map((item) => {
          totalprice += item.price
          return (
<Paper key={item.id} sx={{width:"366px",display:"flex",justifyContent:"space-between",mt:"22px",pt:"27px",pb:"10px",position:"relative"}}>
              <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6" >{ item.title}</Typography>
              <Typography sx={{ mr: "36px", opacity: .8, fontSize: "1.4em", fontWeight: 500 }} variant="h6" >${item.price }</Typography>
              <IconButton onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                })
                const newarr = mydata.filter((myobject) => {
                  return myobject.id !== item.id

                })
                setmydata(newarr);
          }} sx={{position:"absolute",top:0,right:0}}>
           <Close sx={{fontSize:"20px"}}/>
          </IconButton>




        </Paper>
);
        })}
 <Typography sx={{mt:"60px",textAlign:"center"}} variant="h6" >
                👉 ${totalprice}
</Typography>


  </Box>

  );
}
export default Home