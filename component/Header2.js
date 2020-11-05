import React from 'react';
import './Header2.css';
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import ImageIcon from '@material-ui/icons/Image';
import FlagIcon from '@material-ui/icons/Flag';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ReorderIcon from '@material-ui/icons/Reorder';
const Header2 = () => {
    return (
        <div className="header2">
            <HomeIcon style={{marginLeft:"0px"}}/>
            <TvIcon style={{marginLeft:"130px"}}/>
            <ImageIcon style={{marginLeft:"130px"}}/>
            <FlagIcon style={{marginLeft:"130px"}}/>
            <NotificationsIcon style={{marginLeft:"130px"}}/>
            <ReorderIcon style={{marginLeft:"130px"}}/>
        </div>
    )
}

export default Header2
