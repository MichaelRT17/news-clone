import React from 'react';
import BlockOfThree from '../articles/BlockOfThree';
import './topStories.css'

function TopStories(props) {
    console.log(props);
    return (
        <div>
            <div className='top-stories-sticky-bar'>
                <p className='top-stories-title'>Top Stories</p>
            </div>
            <BlockOfThree articles={props.articles.slice(0,3)}/>
            <BlockOfThree articles={props.articles.slice(3,6)}/>
            <BlockOfThree articles={props.articles.slice(6,9)}/>
            <BlockOfThree articles={props.articles.slice(9,12)}/>
        </div>
    )
}

export default TopStories