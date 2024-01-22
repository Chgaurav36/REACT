import React, { useEffect, useCallback, useState } from 'react'
import  ReactPlayer  from "react-player";
import { useSocket } from '../context/SocketProvider';

const Room = () => {

  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [mystream, setmystream] = useState();
  
  const handleUserJoined = useCallback(({email, id})=>{
    console.log(`user ${email} joined`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback( async () =>{
    const stream  = await navigator.mediaDevices.getUserMedia({
      audio: true, video: true
    });
    setmystream(stream);
  }, []);

  useEffect(()=>{
    socket.on("user:joined",handleUserJoined);

    return()=>{
      socket.off("user:joined", handleUserJoined);
    }
  }, [socket, handleUserJoined]);

  return (
    <div className=" w-full h-screen text-white bg-zinc-900">
        <div className='text-[2rem] font-semibold flex-column justify-center text-center'>
        <h1 className=''>Room</h1>
        <br />
        <h4>{remoteSocketId ? "You Are connected" : "No one in room"}</h4>
        {
          remoteSocketId && <button onClick={handleCallUser} className='bg-green-500 px-6 m-3 rounded  '>Call</button> 
        }
        {
          mystream && <ReactPlayer playing muted width="500px" height="250px" url={mystream}/>
        }
        </div>
    </div>
  )
}

export default Room;
