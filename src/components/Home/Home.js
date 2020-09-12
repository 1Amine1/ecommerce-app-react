import React from 'react';
import { Product } from '../Product/Product';
import './Home.css';


export const Home = ({data}) => {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt="prime_image"
                    />
                
                    <div className="home__row">
                        {/* Products will render here */}
                        <Product
                            id="115265"
                            title="Google Home Mini"
                            price="39.99"
                            rating={4.8}
                        />
                        <Product
                            id="115266"                        
                            title="Amazon Alexa"
                            price="49.90"
                            rating={4.8}
                        />
                    </div>
                    <div className="home__row">
                        {/* Products will render here */}
                        <Product
                            id="115267"                            
                            title="Amazon FireTV stick"
                            price="80.00"
                            rating={3.8}
                        />
                        <Product
                            id="115265"                        
                            title="Google Home Mini"
                            price="39.99"
                            rating={4.8}
                        />
                        <Product
                            id="115265"                            
                            title="Google Home Mini"
                            price="39.99"
                            rating={4.8}
                        />
                        <Product
                            id="115265"                            
                            title="Google Home Mini"
                            price="39.99"
                            rating={4.8}
                        />
                        
                    </div>
                    <div className="home__row">
                        {/* Products will render here */}
                        <Product />
                    </div>
                    
                    <div className="top-products">
                        <h3 className="home__title">Top Products of this Month</h3>
                        <div className="home__row">
                            <Product
                                id="115267"                                
                                title="Amazon FireTV stick"
                                price="80.00"
                                rating={3.8}
                            />
                            <Product
                                id="115265"                                
                                title="Google Home Mini"
                                price="39.99"
                                rating={4.8}
                            />
                            <Product
                                id="115265"                                
                                title="Google Home Mini"
                                price="39.99"
                                rating={4.8}
                            />
                            <Product
                                id="115265"                            
                                title="Google Home Mini"
                                price="39.99"
                                rating={4.8}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}
