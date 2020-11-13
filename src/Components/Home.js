import React from 'react'
import '../Components/Home.css';
import Product from './Product';

function Home() {
    return (
        <div>
            <div className='home__sproduct'>
            <p className='home__lastsearch'>Based on your last search</p>
            <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/tpagk7334bl92-PK/image;s=300x600;q=60"
                        title="The Lean Startup"
                        price={78.98}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/g5w88oqgk5y33-PK/image"
                        title="The Lean Startup Constan"
                        price={18.98}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/z4ee63w5jxps-PK/image;s=300x600;q=60"
                        title="Innovation Creates"
                        price={45.98} 
                    />

                    <Product
                        id="185"
                        image="https://apollo-singapore.akamaized.net/v1/files/825d7ji4u5281-PK/image;s=300x600;q=60"
                        title="How Constant Innovation Creates"
                        price={110.45} 
                    />

                </div>
            </div>

            <div className='home__fproduct'>
            <p className='home__lastsearch'>Fresh recommendations</p>
            <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/tpagk7334bl92-PK/image;s=300x600;q=60"
                        title="The Lean Startup"
                        price={78.98}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/g5w88oqgk5y33-PK/image"
                        title="The Lean Startup Constan"
                        price={18.98}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/z4ee63w5jxps-PK/image;s=300x600;q=60"
                        title="Innovation Creates"
                        price={45.98} 
                    />

                    <Product
                        id="185"
                        image="https://apollo-singapore.akamaized.net/v1/files/825d7ji4u5281-PK/image;s=300x600;q=60"
                        title="How Constant Innovation Creates"
                        price={110.45} 
                    />

                </div>
            </div>

            <div className='home__fproduct'>
            <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/tpagk7334bl92-PK/image;s=300x600;q=60"
                        title="The Lean Startup"
                        price={78.98}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/g5w88oqgk5y33-PK/image"
                        title="The Lean Startup Constan"
                        price={18.98}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/z4ee63w5jxps-PK/image;s=300x600;q=60"
                        title="Innovation Creates"
                        price={45.98} 
                    />

                    <Product
                        id="185"
                        image="https://apollo-singapore.akamaized.net/v1/files/825d7ji4u5281-PK/image;s=300x600;q=60"
                        title="How Constant Innovation Creates"
                        price={110.45} 
                    />

                </div>
            </div>
            <div className='home__fproduct'>
            <div className="home__row">
                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/tpagk7334bl92-PK/image;s=300x600;q=60"
                        title="The Lean Startup"
                        price={78.98}
                    />

                    <Product
                        id="130"
                        image="https://apollo-singapore.akamaized.net/v1/files/g5w88oqgk5y33-PK/image"
                        title="The Lean Startup Constan"
                        price={18.98}  
                    />

                    <Product
                        id="194"
                        image="https://apollo-singapore.akamaized.net/v1/files/z4ee63w5jxps-PK/image;s=300x600;q=60"
                        title="Innovation Creates"
                        price={45.98} 
                    />

                    <Product
                        id="185"
                        image="https://apollo-singapore.akamaized.net/v1/files/825d7ji4u5281-PK/image;s=300x600;q=60"
                        title="How Constant Innovation Creates"
                        price={110.45} 
                    />

                </div>
            </div>

               
        </div>
    )
}

export default Home
