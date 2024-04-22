import { Box, Grid, Typography, Avatar } from '@mui/material';

const Player = ({ spotifyApi }) => {
	return (
		<Box>
			<Grid container>
				<Grid xs={12} md={4} items sx={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
					Bild, Title, Artist
				</Grid>
				<Grid
					sx={{ display: { xs: 'none', md: 'flex' }, 
                    justifyContent: 'flex-end', 
                    alignItems: 'center' }} md={4} items>
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
