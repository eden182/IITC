import React from "react";
import './middleSide.css'
import story from '../../../story.json'
import instagramLogo from "../images/Instagram 2015 Years.jpg"
import Post from "../Post/post";

const MiddleSide = () => {
    const stories = story.story;
    return (
        <div className="middleHomeSide">
            <div className="mobileTopBar">
                <div className="instaLogo">
                    <img className="instaLogoMobile" src={instagramLogo} alt="" />
                </div>
            </div>
            <div className="storyBlock">
                {
                    stories?.map((item, index) => {
                        return (
                            <div className="storyParticular">
                                <div className="imageDiv">
                                    <img className="statusImg" src={item.image} />
                                </div>
                                <div className="profileName">{item.name}</div>
                            </div>
                        )
                    })
                }


            </div>
            <div className="postSection">
                <Post />
                <Post />
            </div>
        </div>
    )
}


export default MiddleSide