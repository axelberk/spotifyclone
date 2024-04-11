import {Box, Button} from "@mui/material"

const Home = () => {
    return <Box sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5
    }
    }>
        <img src="/axel.jpg" alt="axel" style={{maxWidth: "50%", maxHeight: "50%"}} />
        <Button size="large" variant="contained" href="https://www.linkedin.com/in/axel-bergquist-360940114" >
            Find me on LinkedIn!
        </Button>
    </Box>
}

export default Home