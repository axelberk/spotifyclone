import { Box, Grid, Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage';

const Player = ({ spotifyApi, token }) => {
const [localPlayer, setLocalPlayer] = useState(false)
const [isPaused, setIsPaused] = useState()
const [current_track, setCurrentTrack] = useState()
const [device, setDevice] = useState()
const [duration, setDuration] = useState()
const [progress, setProgress] = useState()


    useEffect(() => {
        const token = getAccessTokenFromStorage();
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        window.onSpotifyWebPlaybackSDKReady = () => {
    
            const player = new window.Spotify.Player({
                name: 'Techover Player 2',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });
    
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                setDevice(device_id)
                setLocalPlayer(player)
            });
    
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
    
            player.addListener("player_state_changed", (state) => {
                console.log(state.track_window.current_track);

                if (!state || !state.track_window || !state.track_window?.current_track) {
                    return;
                }
                
                if(!state || !state.track_window?.current_track) {
                    return
                }
                

                const duration = state.track_window.current_track.duration_ms / 1000;
                const progress = state.position / 1000;
                setDuration(duration)
                setProgress(progress)
                setIsPaused(state.paused)
                setCurrentTrack(state.track_window.current_track)
            })
    
            setLocalPlayer(player)
            player.connect();
    
        };
    }, []);
    
    useEffect(() => {
        if(!localPlayer) return;
        async function connect() {
            await localPlayer.connect()
        }

        connect()
        return () => {
            localPlayer.disconnect()
        }
    }, [localPlayer])

    useEffect(() => {
        const transferPlayback = async () => {
            if(device) {
                const res = await spotifyApi.getMyDevices()
                console.log(res);
                await spotifyApi.transferMyPlayback([device], false)
            }
        }
        transferPlayback()
    }, [device, spotifyApi])

	return (
		<Box>
			<Grid container px={3} sx={{backgroundColor: "background.paper", height: 100, cursor: {xs: "pointer", md: "auto"}, width: "100%", borderTop: "1px solid #292929"}}>
				<Grid xs={12} md={4} item sx={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
					<Avatar src={current_track?.album.images[0].url} alt={current_track?.album.name} variant="square" sx={{width: 56, height: 56, marginRight: 2}}/>
                    <Box>
                        <Typography sx={{color: "text.primary", fontSize: 14}}>{current_track?.name}</Typography>
                        <Typography sx={{color: "text.secondary", fontSize: 10}}>{current_track?.artists[0].name}</Typography>
                    </Box>
				</Grid>
				<Grid
					sx={{ display: { xs: 'none', md: 'flex' }, 
                    justifyContent: 'center', 
                    alignItems: 'center' }} 
                    md={4} item>
					Playknapp
				</Grid>
				<Grid xs={6} md={4} item sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
					Volume
				</Grid>
			</Grid>
		</Box>
	);
};

export default Player;
