import { useSocket } from "@/context/socket";
import { cloneDeep } from "lodash";
import { useState } from "react"


const usePlayer = (myId) => {
    const socket = useSocket();
    const [players,setPlayers] = useState({});
    const playersCopy = cloneDeep(players);

    const playerHighlighted = playersCopy[myId];
    delete playersCopy[myId];

    const nonHighlightedPlayers = playersCopy;

    // const toggleAudio = () => {
    //     console.log("I toggled my audio");
    //     setPlayers((prev) => {
    //         const copy = cloneDeep(prev);
    //         copy[myId].muted = !copy[myId].muted;
    //         return {...copy}
    //     })
    //     socket.emit('user-toggle-audio',myId,)
    // }

    return {players,setPlayers,playerHighlighted,nonHighlightedPlayers};
}

export default usePlayer;