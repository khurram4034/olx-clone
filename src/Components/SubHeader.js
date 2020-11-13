import React from 'react';
import "../Components/SubHeader.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom"


function SubHeader() {
    return (
      <div className='subheader'>
          <div className='subheader__all'>
            <span>ALL CATACORIES</span>
          </div>
          <ExpandMoreIcon className='down__arrow' />

          <div className='subheader__menue'>
            <ul>
              <li><Link to="/phones" className='link'> Mobile Phones </Link> </li>
              <li><Link to="/cars" className='link'>Cars</Link></li>
              <li><Link to="/motercycles" className='link'>Motorcycles</Link></li>
              <li><Link to="/houses" className='link'>Houses</Link></li>
              <li><Link to="/tv" className='link'>TV - Video - Audio</Link></li>
              <li><Link to="/tablets" className='link'>Tablets</Link></li>
              <li><Link to="/plots" className='link'>Land & Plots</Link></li>
            </ul>
          </div>
      </div>
    )
}

export default SubHeader

