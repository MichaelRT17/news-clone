import React, { Component } from 'react';
import Menu from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import Subheading from './subheading/Subheading';
import Podcast from './podcast/Podcast';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='header-container'>
                    <Menu>
                    </Menu>
                    <h2 className='main-title'>
                        The Cool News Site
                    </h2>
                    <Person>
                    </Person>
                </div> 
                <Subheading />
                <Podcast />
            </div> 
        )
    }
}

export default Header