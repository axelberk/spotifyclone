import { Box, Grid, Typography, Avatar } from '@mui/material';

const Player = ({ spotifyApi }) => {
	return (
		<Box>
			<Grid container px={3} sx={{backgroundColor: "background.paper", height: 100, cursor: {xs: "pointer", md: "auto"}, width: "100%", borderTop: "1px solid #292929"}}>
				<Grid xs={12} md={4} items sx={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
					<Avatar src={null} alt={null} variant="square" sx={{width: 56, height: 56, marginRight: 2}}/>
                    <Box>
                        <Typography sx={{color: "text.primary", fontSize: 14}}>Suh dude</Typography>
                        <Typography sx={{color: "text.secondary", fontSize: 10}}>Jag</Typography>
                    </Box>
				</Grid>
				<Grid
					sx={{ display: { xs: 'none', md: 'flex' }, 
                    justifyContent: 'center', 
                    alignItems: 'center' }} 
                    md={4} items>
					Playknapp
				</Grid>
				<Grid xs={6} md={4} items sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
					Volume
				</Grid>
			</Grid>
		</Box>
	);
};

export default Player;
