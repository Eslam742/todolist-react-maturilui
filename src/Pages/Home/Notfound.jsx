import { Box, Typography, useTheme } from "@mui/material";

const Notfound = () => {
    const theme = useTheme();
    return(
        <Box>
            <Typography variant="h4" sx={{color:theme.palette.error.main}}>
                There is no design yet
                <br/>
                <br />
                Please try again later...
</Typography>
        </Box>
    );
}
export default Notfound