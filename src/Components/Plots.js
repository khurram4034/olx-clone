import React from 'react'
import '../Components/Cars.css';
import Product from './Product';

function Plots() {
    return (
        <div>
            <h2 className='car__heading'>Land & Plots in Punjab</h2>
        <div className='car'>
            
            <div className='car__leftbar'>
                <h4>CATEGORIES</h4>
                <br /><br />
                <hr />
                <h4>LOCATIONS</h4>
                <br /><br />
                <hr />
                <h4>MAKE</h4>
                <br /><br />
                <hr />
                <h4>PRICE</h4>
                <br /><br />
                <hr />
                <h4>CONDITION</h4>
                <br /><br />
                <hr />
                
            </div>
            <div className='car__rightbar'>
            <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/yih5psd6avie-PK/image;"
                        title="The Lean Startup"
                        price={78.98}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/u0z2ndayvno32-PK/image;"
                        title="The Lean Startup Constan"
                        price={18.98}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/vjyqtdw9txb6-PK/image;"
                        title="Innovation Creates"
                        price={45.98} 
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/u2wxkak99z7e3-PK/image;"
                        title="The Lean Startup"
                        price={78.98}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/f076oecj66fx1-PK/image;"
                        title="The Lean Startup Constan"
                        price={18.98}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/1a4ec1vawax53-PK/image;"
                        title="Innovation Creates"
                        price={45.98} 
                    />

                </div>

           
            </div>
        </div>
        </div>
    )
}

export default Plots
