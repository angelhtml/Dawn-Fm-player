import { useState, useRef, useEffect } from 'react';
import { songsdata } from '../music/music';
import MyPlayer from '../music/myplayer';
import VideoBg from "reactjs-videobg";
import Navbar from '../music/Navbar';

export default function App(){
    const[songs, setSongs] =  useState(songsdata)
    const [isplaying, setisplaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(songsdata[0])


    const audioElem = useRef();

    useEffect(() => {
        if(isplaying){
            audioElem.current.play();
        }
        else{
            audioElem.current.pause();
        }
    },[isplaying])

    const onPlaying = ()=> 
    {
        const duration = audioElem.current.duration
        const ct = audioElem.current.currentTime;
        
        setCurrentSong({ ...currentSong, "progress" : ct / duration * 100, "length" : duration })
    }


    return(
        <div>
          
          <Navbar />
            <audio ref={audioElem} src={currentSong.src}  onTimeUpdate={onPlaying}/>
            <MyPlayer songs={songs} setSongs={setSongs} isplaying={isplaying}
            setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong}
            />
        </div>
    )
}
