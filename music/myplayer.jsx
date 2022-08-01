import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import PlayerStyle from './Player.module.css'
import {Image} from "@chakra-ui/react"
import VideoBg from "reactjs-videobg";

export default function MyPlayer({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs}){
  const PlayPause = ()=> {
    //audioElem.current.play();
    setisplaying(!isplaying)
  }

  const skipBack = () =>{
    const search = x => x.title == currentSong.title
    const index = songs.findIndex(search/*x=>x.title == currentSong.title*/)
    if( index == 0){
      setCurrentSong(songs[songs.length - 1])
    }
    else{
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    setisplaying(!isplaying)
  }

  const skiptoNext = () =>{
    const search = x => x.title == currentSong.title
    const index = songs.findIndex(search/*x=>x.title == currentSong.title*/)
    if( index == songs.length-1){
      setCurrentSong(songs[0])
      
    }
    else{
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    setisplaying(!isplaying)
  }

  if(currentSong.progress == 100){
    const search = x => x.title == currentSong.title
    const index = songs.findIndex(search/*x=>x.title == currentSong.title*/)
    setCurrentSong(songs[index + 1])
    setisplaying(!isplaying)
  }

  return(
    <div>
<VideoBg videoClass="video"><VideoBg.Source src='https://download1320.mediafire.com/xiob0zwxilag/gkcrkpm50qx0id6/The-Weeknd+_Sacrifice-Official-Music-Video_v720P.mp4' type="video/mp4"/></VideoBg>

      <div className={PlayerStyle.navigation}>
      <div className={PlayerStyle.box1}>
        <div style={{display:"flex",padding:"10px"}}>
        <Image className={PlayerStyle.xo} src="PngItem_100407.png"/><a href="https://github.com/angelhtml" style={{fontSize:".9rem",paddingLeft:"5px"}}>Code Style</a>
        </div>
      </div> 
      <div className={PlayerStyle.box2}>
        <center>
      {isplaying ? <BsPauseCircle onClick={PlayPause} className={PlayerStyle.playico}/> : <BsPlayCircle onClick={PlayPause} className={PlayerStyle.playico}/>}
        </center>
      </div>  

      <div className={PlayerStyle.box3}><Image className={PlayerStyle.dawnlogo} src="Dawn-FM-logo-square-black.webp"/></div>
        
      </div>

      <section className={PlayerStyle.mainsection}>
        <center>
      <h1 className={PlayerStyle.title}>{currentSong.title}</h1>
      </center>
      
      <div style={{height:'5px',width:currentSong.progress+"%"}} className={PlayerStyle.bar}></div>
      </section>
    </div>
  )
}
//Dawn Fm Player BY Angel
