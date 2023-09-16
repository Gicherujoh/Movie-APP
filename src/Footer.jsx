import React from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'
const Footer = ()=>{
    return (
       <footer className='footer'>
    <div className='icons'>
        <FacebookIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
        <YouTubeIcon/>
       
    </div>
    <div className="conditions">
       <p>Conditons of Use</p>
       <p>Privacy And Policy</p>
       <p>Press Room</p>
    </div>
    <div className="author">
        <p>&copy; 2023 Made by Jones</p>
    </div>
 
       </footer>
    )
 } 
 export default Footer