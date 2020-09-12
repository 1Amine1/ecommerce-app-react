import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';

import './Header.css';

export const Header = ({ }) => {
    const [state, dispatch] = useStateValue();
    const cartCount = state.cart.length;
    return (
        <div className='header'> 
            <Link to="/">
                <img className="header__logo" src="/amazon-logo.png" alt="logo"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
                {/* search icon logo */}
            </div>
            <div className="header__nav">
                <div className="header__navOption">
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                        Sign in
                    </span>
                </div>
                <div className="header__navOption">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__navOption">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout" className="header__navOption header__cart_link">
                    <div className="">
                        <span className="header__optionLineOne header__cart__icon">
                            <ShoppingBasketIcon /> {cartCount}
                        </span>
                    
                    </div>
                </Link>
         
            </div>
        </div >
            
    );
}
