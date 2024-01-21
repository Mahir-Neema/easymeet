// import { useSocket } from "@/context/socket"
// import usePeer from "@/hooks/usePeer"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4} from "uuid";

import styles from '@/styles/home.module.css';

export default function Home() {
  // const socket = useSocket();
  // usePeer();

  const router = useRouter();
  const [roomId,setRoomId] = useState('');

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  }

  const joinRoom = () => {
    if(roomId) router.push(`/${roomId}`);
    else{
      alert("please provide Room ID")
    }
  }
  
  return (
    <div className={styles.homeContainer}>
      <h1>Google meet clone</h1>
      <div className={styles.enterRoom}>
        <input placeholder="Enter Room ID" value={roomId} onChange={(e)=>setRoomId(e?.target?.value)}/>
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <span className={styles.separatorText}>------------OR------------</span>
      <button onClick={createAndJoin}>Create a new Room</button>
    </div>
  )
}
