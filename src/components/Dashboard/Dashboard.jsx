import { Box, dividerClasses } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import SideNav from '../SideNav/Sidenav';
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage';
import { useEffect, useState } from 'react';
import Playlist from '../../pages/Playlist';
import Player from '../Player/Player';
import MobileNav from '../MobileNav/MobileNav';
import Library from '../../pages/Library';

const Dashboard = ({ spotifyApi }) => {
	const [token, setToken] = useState(getAccessTokenFromStorage);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function onMount() {
			await spotifyApi.setAccessToken(token);
			setLoading(false);
		}

		if (token) onMount();
	}, []);

	return (
		<Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
			{!loading && (
				<Box sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}>
					<SideNav spotifyApi={spotifyApi} token={token} />
					<Routes>
						<Route path="/playlist/:id" element={<Playlist spotifyApi={spotifyApi} token={token} />} />
						<Route path="/library/" element={<Library spotifyApi={spotifyApi} token={token} />} />
						<Route
							path="/"
							element={
								<div>
									<Home />
								</div>
							}
						/>
					</Routes>
				</Box>
			)}
			{token && !loading && <Player spotifyApi={spotifyApi} token={token} />}
			<MobileNav />
		</Box>
	);
};

export default Dashboard;
