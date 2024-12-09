import './leftSide.css'
import React from 'react';
import {Link} from "react-router-dom"



// icons
import profile from '../images/profile.jpg'
import instagramLogo from '../images/Instagram 2015 Years.jpg';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GestureOutlinedIcon from '@mui/icons-material/GestureOutlined';
import MenuIcon from '@mui/icons-material/Menu';





const LeftSide = () => {
    return (
        <div className="LeftSidePart">
            <div className="logoPart">
                <img className='logoImg' src={instagramLogo} alt='Instagram' />
            </div>
            <div className="navLinkPart">
                {/* לינק לניווט בין הדפים */}
                <div className="navLink">
                    <Link to="/Home"  style={{display:"flex",alignItems: "center", color:"black",textDecoration:"none"}}>
                        <HomeIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Home</div>
                    </Link>
                </div>
                <div className="navLink">
                    <Link to="/Search" style={{display:"flex",alignItems: "center", color:"black",textDecoration:"none"}}>
                        <SearchIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Search</div>
                    </Link>
                </div>
                <div className="navLink">
                    <Link to="/Create" style={{display:"flex",alignItems: "center", color:"black",textDecoration:"none"}}>
                        <AddBoxOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Create</div>
                    </Link>
                </div>
                <div className="navLink" style={{display:"flex",alignItems: "center", color:"black",textDecoration:"none"}}>
                        <MusicVideoIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Reel</div>
                </div>
                <div className="navLink">
                    <Link to="/Message" style={{display:"flex",alignItems: "center", color:"black",textDecoration:"none"}}>
                        <MailOutlineIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Message</div>
                    </Link>
                </div>
                <div className="navLink">
                    <Link to="/Profile" style={{display:"flex",alignItems: "center", color:"black",textDecoration:"none"}}>
                        <img className='profileImg' src={profile} alt='profile image' />
                        <div className="navName">Profile</div>
                    </Link>
                </div>
                <div className="navLink">
                        <ExploreOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Explore</div>
                </div>
                <div className="navLink">
                        <FavoriteBorderIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Notification</div>
                </div>
                <div className="belowPart">
                    <div className="navLink">
                            <GestureOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                            <div className="navName">Thread</div>
                    </div>
                    <div className="navLink">
                            <MenuIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                            <div className="navName">More</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;















































































// const LeftSide = () => {
//     return (
//         <div className="LeftSidePart">
//             <div className="logoPart">
//                 <img className='logoImg' src={instagramLogo} alt='Instagram' />
//             </div>
//             <div className="navLinkPart">
//                 <div className="navLink">
//                     <HomeIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                     <div className="navName">Home</div>
//                 </div>
//                 <div className="navLink">
//                     <SearchIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                     <div className="navName">Search</div>
//                 </div>
//                 <div className="navLink">
//                     <AddBoxOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                     <div className="navName">Create</div>
//                 </div>
//                 <div className="navLink">
//                     <MusicVideoIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                     <div className="navName">Reel</div>
//                 </div>
//                 <div className="navLink">
//                     <MailOutlineIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                     <div className="navName">Message</div>
//                 </div>
//                 <div className="navLink">
//                     <img className='profileImg' src={profile} alt='profile image' />
//                     <div className="navName">Profile</div>
//                 </div>
//                 <div className="navLink">
//                     <ExploreOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                     <div className="navName">Explore</div>
//                 </div>
//                 <div className="navLink">
//                     <FavoriteBorderIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                     <div className="navName">Notification</div>
//                 </div>
//                 <div className="belowPart">
//                     <div className="navLink">
//                         <GestureOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                         <div className="navName">Thread</div>
//                     </div>
//                     <div className="navLink">
//                         <MenuIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
//                         <div className="navName">More</div>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default LeftSide