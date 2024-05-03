import { Stack, Slider } from "@mui/material";
import { VolumeUp, VolumeDown, VolumeOff } from "@mui/icons-material";
import { useState } from "react";

const PlayerVolume = () => {
    const [volume, setVolume] = useState(50)
    return <Stack direction={"row"} spacing={2} alignItems="center" sx={{width: 150, color: "text.secondary"}}>
            {volume === 0 ? <VolumeOff /> : volume < 50 ? <VolumeDown /> : <VolumeUp />}
            <Slider min={0} max={100} step={1} value={volume} onChange={(e, v) => setVolume(v)} onChangeCommitted={() => {}}/>
        </Stack>
}
 
export default PlayerVolume;