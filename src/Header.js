import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import basket from './reducer'
function Header() {
    const [{ basket }] = useStateValue();
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="headerNav">
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className="ho_l1">Hello,</span>
                        <span className="ho_l2">Sign In</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="ho_l1">Returns</span>
                        <span className="ho_l2">& Orders</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="ho_l1">Your</span>
                        <span className="ho_l2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="ho_l2 header__basketCount">{basket.length}</span>
                    </div>

                </Link>
            </div>
        </nav>
    )
}

export default Header;