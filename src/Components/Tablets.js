import React from 'react'
import '../Components/Cars.css';
import Product from './Product';

function Tablets() {
    return (
        <div>
        <h2 className='car__heading'>Tablets in Punjab</h2>
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
                        image="https://apollo-singapore.akamaized.net/v1/files/bhyzv3k921ff3-PK/image;"
                        title="The Lean Startup"
                        price={61000}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/3saff0ososrh-PK/image;"
                        title="The Lean Startup Constan"
                        price={88000}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/mtz7nghxn4v91-PK/image;"
                        title="Innovation Creates"
                        price={15000} 
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/dpubdkt2qfdp1-PK/image;"
                        title="The Lean Startup"
                        price={78000}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/x64636jh4x5b-PK/image;"
                        title="The Lean Startup Constan"
                        price={18400}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/rxf7ydha9yuz2-PK/image;"
                        title="Innovation Creates"
                        price={45700} 
                    />

                </div>
            </div>
        </div>
        </div>
    )
}

export default Tablets
