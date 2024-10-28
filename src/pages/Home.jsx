import {Box, Button, Typography} from "@mui/material"

const Home = () => {
    return <Box sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        marginTop: 3
    }
    }>
        <img src="/axel.jpg" alt="axel" style={{maxWidth: "25%", maxHeight: "25%"}} />
        <Box sx={{maxwidth: "70%", paddingLeft: 5, paddingRight: 5}}>
            <Typography padding={1}>Hello, and welcome to my basic Spotify Clone! To use it, you will need to have Spotify open on either your phone, the browser application or the application for your operating system. There, you can connect to "Axels Spotify Clone" as the output device. Please enjoy!
            </Typography>
        </Box>
       
        <Button size="large" variant="contained" href="https://www.linkedin.com/in/axel-bergquist-360940114" target="_blank" >
            Find me on LinkedIn!
        </Button>
    </Box>
}

export default Home