import React from 'react'
import '../Components/Cars.css';
import Product from './Product';

function Houses() {
    return (
        <div>
            <h2 className='car__heading'>Houses in Punjab</h2>
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
                        id="h63678130"
                        image="https://apollo-singapore.akamaized.net/v1/files/mnjccollvvjx1-PK/image;"
                        title="5 Marla Houses for Sale"
                        price={113000000}
                    />

                    <Product
                        id="h8537487d130"
                        image="https://apollo-singapore.akamaized.net/v1/files/a78exbab9v21-PK/image;"
                        title="10 Marla Houses for Sale"
                        price={21000000}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/7v3vdla7y4v53-PK/image;"
                        title="1 Kanal Brand New Houses for Sale"
                        price={52500000} 
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/ntpvz8nueu023-PK/image;"
                        title="6 Marla Brand New Houses for Sale"
                        price={78098000}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/1gfbo31xfxuk2-PK/image;"
                        title="The Lean Startup Constan"
                        price={1800980}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/t87uxu6l9ag82-PK/image;"
                        title="Innovation Creates"
                        price={45980000} 
                    />

                </div>

            </div>
        </div>

        </div>
    )
}

export default Houses
