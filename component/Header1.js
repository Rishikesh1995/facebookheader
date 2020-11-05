import React from 'react';
import './Header1.css';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';

const Header1 = () => {
    return (
        <div className="header1">
            <div className="header1__left">
                <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png" alt="img"/>
            </div>
            
            <div className="header1__right">
                <SearchIcon style={{marginLeft:"20px"}}/>
                <ForumIcon style={{marginLeft:"20px"}} />
            </div>
            

            
        </div>
    )
}

export default Header1
