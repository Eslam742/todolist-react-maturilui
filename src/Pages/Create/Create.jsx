import { InputAdornment, TextField ,Box ,styled ,Button} from "@mui/material";
import { purple } from '@mui/material/colors';
import "./Create.css";
import React, { useState } from 'react';
import { ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";




const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
    // @ts-ignore
    backgroundColor: theme.palette.eslam.main,
  marginTop:"25px",
  '&:hover': {
    // @ts-ignore
    backgroundColor:theme.palette.eslam.main,
    scale:".97"
  },
}));
const Create = () => {

  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
    return (
        <Box component="form" sx={{width:"380px"}}>
        <TextField
          autoComplete="off"
          onChange={(eo) => {
            settitle(eo.target.value);
          }}
                fullWidth={true}
          label="Transaction Title"
          id="filled-start-adornment"
          sx={{ mt: "22px", width: '35ch',display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">👉</InputAdornment>,
          }}
          variant="filled"
          
            />



        <TextField
           autoComplete="off"
          onChange={(eo) => {
            setprice(Number(eo.target.value));
          }}
             fullWidth={true}
         label=" Amount"
          id="filled-start-adornment"
          sx={{ mt: "22px", width: '35ch',display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />

        <ColorButton onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",

            },
            body: JSON.stringify({ title, price }),
          })
            .then(() => {
              navigate("/");
          })

             }} variant="contained">Submit  <ArrowForwardIos sx={{fontSize:"20px" ,ml:"10px"}}/> </ColorButton>
        </Box>
    );
}
export default Create