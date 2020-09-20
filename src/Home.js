import React from 'react'
import './Home.css'
import './Product'
import Product from './Product'

const Home = () => {

    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GW_Availablenow/RV1_GWAvailableNow/P38983965_IN_WLME_SamsungGalaxy_M51_With_Bank_PC_1500x600_2._CB403769220_.jpg" alt="" />

            <div className="home__row">
                <Product id="123455"
                    title="1000 mAh Power Bank: URBN"
                    price={870}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41OC20VDxUL.__AC_SY200_.jpg"
                />
                <Product id="123"
                    title="Casio Musical Keyboard with MIDI: CTK5300"
                    price={12500}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41hU3Xli8QL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product id="123455"
                    title="Lenovo Ideapad Slim 3i Intel Core i3 10th Gen 15.6 inch Full HD Thin and Light Laptop"
                    price={34990}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41PnIUzyYML._AC_SY200_.jpg"
                />
                <Product id="123455"
                    title="1000 mAh Power Bank: URBN"
                    price={11.96}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41OC20VDxUL.__AC_SY200_.jpg"
                />
                <Product id="123455"
                    title="1000 mAh Power Bank: URBN"
                    price={11.96}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41OC20VDxUL.__AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product id="123455"
                    title="1000 mAh Power Bank: URBN"
                    price={11.96}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41OC20VDxUL.__AC_SY200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
