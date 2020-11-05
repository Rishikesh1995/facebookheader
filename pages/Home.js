import React from 'react';
import Header2 from '../component/Header2';
import Header1 from '../component/Header1';
import './Home.css';
import Search from '../component/Search';
import Header3 from '../component/Header3';
import Stories from '../component/Stories';
import Post from '../component/Post';

const home = () => {
    return (
        <div className="homePage">
           <Header1/> 
           <Header2/>
           <Search/>
           <Header3/>
           <Stories/>
           <Post/>

        </div>
    )
}

export default home
