import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = () => {
    return (
        <>
       <div className="post">
                    <div className="postInfo">
                        <img className="postInfoImg" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="sda" />
                        <div className="postInfoUserName">Tigger</div>
                        <div className="timingInfo">. 36 min</div>
                    </div>
                    <div className="postsImg">
                        <img className="postImage" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"></img>
                    </div>
                    <div className="iconsBlock">
                        <div className="leftIcon">
                            <FavoriteBorderIcon sx={{fontSize:"25px"}} />
                            <ModeCommentOutlinedIcon sx={{fontSize:"25px"}} />
                            <SendOutlinedIcon sx={{fontSize:"25px"}} />
                        </div>
                        <div>
                            <BookmarkBorderIcon sx={{fontSize:"25px"}} />
                        </div>
                    </div>
                    <div className="likeSection">
                        <div className="imagesLike">
                            <img className="likeImg" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" />
                            <img className="likeImg2" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" />
                        </div>
                        <div className="noOfLikes">112,456 Likes</div>
                    </div>
                    <div className="postAbout">
                        <div className="postAboutName">Tiger Tiger</div>
                        <div className="infoComment">Happy Birthday lala Tigers</div>
                    </div>
                    <div className="numOfComments">View All 467 Comments</div>
                    <div className="addComment">Add Comment...</div>
                </div>


                

                </>
    )
}


export default Post