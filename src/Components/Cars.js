import React from 'react'
import '../Components/Cars.css';
import Product from './Product';





function Cars() {
    return (
        <div>
        <h2 className='car__heading'>Cars in Punjab</h2>
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
                        id="H13647830"
                        image="https://apollo-singapore.akamaized.net/v1/files/ni2tjccdx66g1-PK/image;"
                        title="Honda City 2014"
                        price={1850000}
                    />
                
              

                    <Product
                        id="H7092011130"
                        image="https://apollo-singapore.akamaized.net/v1/files/z87igcpl69xm1-PK/image;"
                        title="Toytota Corolla 2019"
                        price={3190000}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/uc8pwgpzfpih3-PK/image;"
                        title="Toytota Aqua 2015"
                        price={2525000} 
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="H85460121130"
                        image="https://apollo-singapore.akamaized.net/v1/files/7fncgs78z7ss1-PK/image;"
                        title="Toytota Yaris 2020"
                        price={3180000}
                    />

                    <Product
                        id="H1846893334530"
                        image="https://apollo-singapore.akamaized.net/v1/files/mvvcmckqzhhg2-PK/image;"
                        title="Changa Karravan 2020"
                        price={1575000}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/66upe7r29rc02-PK/image;"
                        title="Toytota Gli 2018"
                        price={2420000} 
                    />

                </div>

                
            </div>
        </div>

    </div>
    )
}

export default Cars
