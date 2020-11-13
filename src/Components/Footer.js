import React from 'react';
import '../Components/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__popular'>
                <h5 className='footer__fo'>POPULAR CATEGORIES</h5>
                <span>Cars</span><br />
                <span>Flats for rent</span><br />
                <span>Jobs</span><br />
                <span>Mobile Phones</span><br />
            </div>

            <div className='footer__trading'>
                <h5 className='footer__fo'>TREDING SEARCHES</h5>
                <span>Bikes</span><br />
                <span>Watches</span><br />
                <span>Books</span><br />
                <span>Dogs</span><br />
            </div>

            <div className='footer__about'>
                <h5 className='footer__fo'>ABOUT US</h5>
                <span>About OLX Group</span><br />
                <span>OLX Blog</span><br />
                <span>Contact Us</span><br />
                <span>OLX for Businesses</span><br />
            </div>

            <div className='footer__olx'>
                <h5 className='footer__fo'>OLX</h5>
                <span>Help</span><br />
                <span>Sitemap</span><br />
                <span>Legal & Privacy information</span><br />
            </div>

            <div className='footer__follow'>
                <h5 className='footer__fo'>FOLLOW US</h5><br />
                <div className='footer__social'>
                  <img className="footer__fb" src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-logo-png-transparent-svg-vector-bie-supply-16.png" alt="" />
                <img className="footer__tw" src="https://assets.stickpng.com/thumbs/5a2fe3efcc45e43754640848.png" alt="" />
                <img className="footer__yt" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png" alt="" />
                <img className="footer__ig" src="https://i.pinimg.com/originals/8b/ed/09/8bed099ffbf95985d5184831b0c05dcc.png" alt="" />  
                </div>

               
                <img className="footer__app2" src="https://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png" alt="" />
                <img className="footer__google2" src="https://assets.stickpng.com/thumbs/5a902dbf7f96951c82922875.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
