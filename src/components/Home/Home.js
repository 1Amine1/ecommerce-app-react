import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Banner from '../Banner/Banner';
import { Header } from '../Header/Header';
import { Product } from '../Product/Product';
import { useStateValue } from '../../store/StateProvider';
import './Home.css';


export const Home = ({ data }) => {
    const [{ products, featured_products }, dispatch] = useStateValue();
    console.log(products)

    const renderProducts = products.length > 0 ? products.map((product, i) => {
        return <Product
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
        />
    }) : <p>Sorry, currently we are out of stock come back again</p>;

    const renderFeatureProducts = featured_products ? featured_products.map((fp, i) => {
        return <Product
            id={fp.id}
            title={fp.title}
            price={fp.price}
            rating={fp.rating}
            image={fp.image}
        />
    }) : <h3>Will put our best products here.</h3>

    return (
        <>
            <Banner text="Special deal: get 20% off on total. Valid only for today" />
            <Header />
            <div>
                <div className="home">
                    <div className="home__container">
                        <img className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                            alt="prime_image"
                        />
                        <div className="home__products">
                            <div className="home__row">
                            {/* Products will render here */}
                                <Zoom>
                                    {renderProducts}
                                </Zoom>
                            </div>                            
                            <div className="top-products">
                                <Zoom>
                                    {renderFeatureProducts}
                                </Zoom>
                            </div>  
                        </div>                                                
                    </div>
                </div>
            </div>
        </>
    );
}
