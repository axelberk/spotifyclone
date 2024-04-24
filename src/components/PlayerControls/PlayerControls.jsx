import { Stack, Typography, Slider, Box, IconButton } from "@mui/material";
import { formatTime } from "../../utils/formatTime";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { useState } from "react";

const PlayerControls = ({isPaused, duration, progress, player}) => {
    const skipStyle = {width: 28, height: 28}
    const playStyle = {width: 38, height: 38}
    return (
        <Stack direction={"column"} spacing={2} justify={"center"} alignItems="center" sx={{width: "100%"}}>
            <Stack spacing={1} direction={"row"} justifyContent={"center"} alignItems={"center"} sx={{width: "100%"}}>
                <IconButton size="small" sx={{color: "text.primary"}}>
                    <SkipPrevious sx={skipStyle}/>
                </IconButton>
                <IconButton size="small" sx={{color: "text.primary"}}>{isPaused ? <PlayArrow sx={playStyle} /> : <Pause sx={playStyle}/>}</IconButton>
                <IconButton size="small" sx={{color: "text.primary"}}>
                    <SkipNext sx={skipStyle}/>
                </IconButton>
            </Stack>
            <Stack>Progress || Slider</Stack>
    </Stack>
    );
}
 
export default PlayerControls;