import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Library = ({token, spotifyApi}) => {

    const [playlists, setPlaylists] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPlaylists() {
            if(!spotifyApi) return;

            const data = await spotifyApi.getUserPlaylists();
            setPlaylists(data.body.items)
            setLoading(false);
            console.log(data.body.items);
        }
        getPlaylists();
    }, [spotifyApi, token])

	return (
		<Box
			id="Library"
			px={3}
			sx={{
				display: { xs: 'flex', md: 'none' },
				backgroundColor: 'background.default',
				flex: 1,
				flexDirection: 'column',
				overflowY: 'auto'
			}}
		>
            <Typography py={3} sx={{color: "text.primary", fontSize: 30}}>
                Ditt bibliotek
            </Typography>
        </Box>
	);
};

export default Library;
