import { Stack, Typography, Slider, Box, IconButton } from '@mui/material';
import { formatTime } from '../../utils/formatTime';
import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const PlayerControls = ({ isPaused, duration, progress, player }) => {
	const [currentProgress, setCurrentProgress] = useState(progress);
	const skipStyle = { width: 28, height: 28 };
	const playStyle = { width: 38, height: 38 };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(!isPaused && player) {
                setCurrentProgress((prevState) => Math.min(prevState + 1, duration))
            }
        }, 1000)
        return () => clearInterval(intervalId)
    }, [isPaused, player, duration])
    
    useEffect(() => {
        setCurrentProgress(progress)
    }, [progress])

	return (
		<Stack direction={'column'} spacing={2} justify={'center'} alignItems="center" sx={{ width: '100%' }}>
			<Stack spacing={1} direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%' }}>
				<IconButton
					size="small"
					sx={{ color: 'text.primary' }}
					onClick={() => {
						setCurrentProgress(0);
						player.previousTrack();
						console.log(currentProgress);
					}}
				>
					<SkipPrevious sx={skipStyle} />
				</IconButton>
				<IconButton
					size="small"
					sx={{ color: 'text.primary' }}
					onClick={() => {
						player.togglePlay();
					}}
				>
					{isPaused ? <PlayArrow sx={playStyle} /> : <Pause sx={playStyle} />}
				</IconButton>
				<IconButton
					size="small"
					sx={{ color: 'text.primary' }}
					onClick={() => {
						setCurrentProgress(0);
						player.nextTrack();
						console.log(currentProgress);
					}}
				>
					<SkipNext sx={skipStyle} />
				</IconButton>
			</Stack>
			<Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ width: '75%' }}>
				<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(currentProgress)}</Typography>
				<Slider
					max={duration}
					value={currentProgress}
					min={0}
					size="medium"
					onChange={(event, value) => {
						console.log("Changed", value);
                        setCurrentProgress(value)
					}}

                    onChangeCommitted={(event, value) => {
                        player.seek(value * 1000)
                    }}
				/>
				<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(duration)}</Typography>
			</Stack>
		</Stack>
	);
};

export default PlayerControls;
