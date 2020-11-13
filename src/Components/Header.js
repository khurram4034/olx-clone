import React from 'react';
import '../Components/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom"

function Header() {

    return (
        <div>
            <nav className='header'>
                <Link to="/">
                <img className="header__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logotyp_OLX_.png/1200px-Logotyp_OLX_.png" 
                alt="" />
                </Link>


            <div className='header__location'>
                <SearchIcon className="header__locationIcon" />
                    <div className="header__searchLocation">
                <input className='header__searchLocationInput' type="text" placeholder="Current Location" />
                <ExpandMoreIcon  className="header__locationIcon"  />
                </div>

            </div>

            <div className="header__search">
                <input className='header__searchInput' type="text" placeholder="Find Cars, Mobile Phones and more..." />
            </div>
            <SearchIcon className="header__searchIcon" />

            <div className="header__login">
                <span>Login</span>
            </div>

            <div className="header__sell">
                <div className="header__text">
                     <AddIcon className="header__addIcon" />
                    <span className="header__sellText">SELL</span>
                </div>
            
            </div>

            </nav>
        </div>
    )
}

export default Header
