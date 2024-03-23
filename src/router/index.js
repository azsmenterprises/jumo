import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home';
import ProductsListingPage from '../pages/products-listing';
import ProductDetailPage from '../pages/product-detail-page';
import SellCarPage from '../pages/sellcar';
import BuyCarPage from '../pages/buycar';
import PricePlan from '../pages/priceplan/Index';
import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';
import OtpPage from '../pages/auth/otppage';
import ShortListedPage from '../pages/shortlist';
import ProfilePage from '../pages/profile';


const Router = () => {
    return (
        <Switch>

            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/otp' component={OtpPage} />
            <Route exact path='/' component={Home} />
            <Route exact path='/products-listing' component={ProductsListingPage} />
            <Route exact path='/product-details' component={ProductDetailPage} />
            <Route exact path='/sell-car' component={SellCarPage} />
            <Route exact path='/buy-car' component={BuyCarPage} />
            <Route exact path='/price-plan' component={PricePlan} />
            <Route exact path='/short-listed' component={ShortListedPage} />
            <Route exact path='/profile-page' component={ProfilePage} />


        </Switch>
    );
};

export default Router;
