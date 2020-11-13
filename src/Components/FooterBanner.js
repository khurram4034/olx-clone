import React from 'react'
import '../Components/FooterBanner.css'

function FooterBanner() {
    return (
        <div className='footer__banner'>
            <img
            className="banner1"
            src="https://statics.olx.com.pk/external/base/img/phone-app.webp"
            alt="" 
            />
                     <h1 className='footer__heading'>TRY THE OLX APP</h1>
                     <p className='footer__para'>Buy, sell and find just about anything using <br />the app on your mobile.</p>
                     <div className='vertical__line'></div>
                     <h5 className='footer__button'>GET YOUR APP TODAY</h5>
                     <img className="footer__app" src="https://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png" alt="" />
                     <img className="footer__google" src="https://assets.stickpng.com/thumbs/5a902dbf7f96951c82922875.png" alt="" />
            
            

        </div>
    )
}

export default FooterBanner
