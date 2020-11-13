import React from 'react'
import '../Components/Cars.css';
import Product from './Product';

function Tv() {
    return (
        <div>
        <h2 className='car__heading'>TV - Vidio - Audio in Punjab</h2>
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
                        id="te7ic3130"
                        image="https://apollo-singapore.akamaized.net/v1/files/kp1pml9qnlkq-PK/image;"
                        title="LED - TV + audio vidio"
                        price={16800}
                    />

                    <Product
                        id="tet454130"
                        image="https://apollo-singapore.akamaized.net/v1/files/oxieoguzx3l61-PK/image;"
                        title="Wamaa 55-Inch_Smart"
                        price={37000}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/tcrqa1jih6d93-PK/image;"
                        title="Innovation Creates"
                        price={18500} 
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="t363o83130"
                        image="https://apollo-singapore.akamaized.net/v1/files/gllug08u8pvt3-PK/image;"
                        title="Air Mouse 10-G"
                        price={1500}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/zmmku66ezcb62-PK/image;"
                        title="The Lean Startup Constan"
                        price={8000}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/31yke2mvva661-PK/image;"
                        title="Innovation Creates"
                        price={44999} 
                    />

                </div>

            </div>
        </div>
        </div>
    )
}

export default Tv
