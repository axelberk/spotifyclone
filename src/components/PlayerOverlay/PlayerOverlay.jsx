import { Box } from '@mui/material';

const PlayerOverlay = ({playerOverlayIsOpen}) => {
	return (
		<Box
			id="PlayerOverlay"
			sx={{
				width: '100%',
				height: 'calc(100vh - 75px)',
				backgroundColor: 'background.paper',
				display: { xs: 'block', md: 'none' },
				position: 'fixed',
				top: 0,
				left: 0,
				transition: 'all 0.3s',
				transform: playerOverlayIsOpen ? 'translateY(0px)' : "translateY(100vh)"
			}}
		>
            PlayerOverlay
        </Box>
	);
};

export default PlayerOverlay;
