import React from 'react'
import '../Components/Cars.css';
import Product from './Product';

function Motercycles() {
    return (
        <div>
            <h2 className='car__heading'>Mobile Phones In Punjab</h2>
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
                        id="M7456e68130"
                        image="https://apollo-singapore.akamaized.net/v1/files/4wi5s8q0fevs3-PK/image;"
                        title="R3 250 CC "
                        price={420000}
                    />

                    <Product
                        id="M64565130"
                        image="https://apollo-singapore.akamaized.net/v1/files/ru89zfzrrv5j-PK/image;"
                        title="GP1 VALENTENO 250 CC"
                        price={490000}  
                    />

                    <Product
                        id="M7464678194"
                        image="https://apollo-singapore.akamaized.net/v1/files/z4ee63w5jxps-PK/image;s=300x600;q=60"
                        title="Honda 120cc"
                        price={535000} 
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/0484r3gdb4nn3-PK/image;"
                        title="The Lean Startup"
                        price={78.98}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/ccvzltr7fesy2-PK/image;"
                        title="Brand New Honda 2020"
                        price={60800}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/fetvhm5ebpjj3-PK/image;"
                        title="R3 250 CC"
                        price={420000} 
                    />

                </div>

                
            </div>
        </div>
        </div>
    )
}

export default Motercycles
