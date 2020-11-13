import React from 'react'
import '../Components/Cars.css';
import Product from './Product';

function phones() {
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
                        id="P120"
                        image="https://apollo-singapore.akamaized.net/v1/files/amm0kmdsk0w9-PK/image;"
                        title="Samsung S20 ultra 10/10 Dual Sim"
                        price={167500}
                    />

                    <Product
                        id="P121"
                        image="https://apollo-singapore.akamaized.net/v1/files/cgvhmz8ucnsx1-PK/image;"
                        title="Oppo F15"
                        price={34900}  
                    />

                    <Product
                        id="P194"
                        image="https://apollo-singapore.akamaized.net/v1/files/cq46yzpx90un3-PK/image;"
                        title="Iphone 11 Pro"
                        price={147000} 
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="P1820"
                        image="https://apollo-singapore.akamaized.net/v1/files/pem830zxwxm43-PK/image;"
                        title="Huawei Y6s Brand New"
                        price={16000}
                    />

                    <Product
                        id="P1081"
                        image="https://apollo-singapore.akamaized.net/v1/files/rdsvwya4k13g-PK/image;"
                        title="Samsumg A20"
                        price={18900}  
                    />

                    <Product
                        id="P1941"
                        image="https://apollo-singapore.akamaized.net/v1/files/g214wc3fc7vq3-PK/image;"
                        title="Samsung Glaxy M11 Brand New"
                        price={14700} 
                    />

                </div>
                            </div>
        </div>
            
        </div>
    )
}

export default phones
