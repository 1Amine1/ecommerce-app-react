import React from 'react';
import { Header } from '../Header/Header';
import { Product } from '../Product/Product';
import './Home.css';


export const Home = ({data}) => {
    return (
        <>
            <Header />
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
                                title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
                                price={69.99}
                                rating={4.8}
                                image="https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_.jpg"
                            />
                            <Product
                                id="115266"                        
                                title="Think Like a Monk Paperback"
                                price={20}
                                rating={5}
                                image="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
                            />
                        {/* </div> */}
                        {/* <div className="home__row"> */}
                            {/* Products will render here */}
                            <Product
                                id="115267"                            
                                title="Fire TV Stick 4K streaming device with Alexa built in, Ultra HD, Dolby Vision, includes the Alexa Voice Remote"
                                price={65.99}
                                rating={4.8}
                                image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg"
                            />
                            <Product
                                id="115268"                        
                                title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                                price={10.50}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY218_.jpg"
                            />
                            <Product
                                id="115269"                            
                                title="Think and Grow Rich: This Book Could Be Worth a Million Dollars to You"
                                price={7.07}
                                rating={4.5}
                                image="https://m.media-amazon.com/images/I/9105f0ZQUnL._AC_UY218_.jpg"

                            />
                            <Product
                                id="115261"                            
                                title="How to Win Friends and Influence People"
                                price={14.32}
                                rating={4.8}
                                image="https://m.media-amazon.com/images/I/718+bq5ApRL._AC_UY218_.jpg"
                            />
                            
                        {/* </div> */}
                        {/* <div className="home__row"> */}
                            {/* Products will render here */}
                            <Product
                                id="115260"                            
                                title="Samsung 49' The Frame 4K Ultra HD QLED Smart TV (2019) (QN49LS03RAFXZC) [Canada Version], Black"
                                price={1199.99}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/91Mqh19GEuL._AC_UY218_.jpg"
                            />
                        </div>
                        
                        <div className="top-products">
                            {/* <h3 className="home__title">Top Products of this Month</h3>
                            <div className="home__row">
                                <Product
                                    id="115267"                                
                                    title="Amazon FireTV stick"
                                    price={80.00}
                                    rating={3.8}
                                />
                                <Product
                                    id="115262"                                
                                    title="Google Home Mini"
                                    price={39.99}
                                    rating={4.8}
                                />
                                <Product
                                    id="115263"                                
                                    title="Google Home Mini"
                                    price={39.99}
                                    rating={4.8}
                                />
                                <Product
                                    id="115264"                            
                                    title="Google Home Mini"
                                    price={39.99}
                                    rating={4.8}
                                />
                            </div> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
       
        
    );
}
