import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';


const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
        
                    <Avatar/>
                    <h5 style={{marginLeft:"680px"}}>Rishikesh</h5> 
                    <p style={{marginLeft:"15px"}}>uploaded 2 mins ago</p>

            </div>
            <div className="post__img">
                <img src="https://i.pinimg.com/originals/da/d7/96/dad7967d732c8119ed35942cb8f16471.jpg" style={{width:"940px"}}/>
            </div>

            <div className="post__footer">
                <ThumbUpAltIcon/>
                <ChatBubbleOutlineIcon/>
                <ShareIcon/>

            </div>


            </div>
    )
}

export default Post
