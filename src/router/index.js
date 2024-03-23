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
import WebLayout from '../layout/WebLayout';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="/login">
                    <WebLayout>
                        <LoginPage />
                    </WebLayout>
                </Route>
                <Route exact path='/register'>
                    <WebLayout>
                        <RegisterPage />
                    </WebLayout>
                </Route>
                <Route exact path='/otp'>
                    <WebLayout>
                        <OtpPage />
                    </WebLayout>
                </Route>
                <Route exact path='/'>
                    <WebLayout>
                        <Home />
                    </WebLayout>
                </Route>
                <Route exact path='/products-listing'>
                    <WebLayout>
                        <ProductsListingPage />
                    </WebLayout>
                </Route>
                <Route exact path='/product-details'>
                    <WebLayout>
                        <ProductDetailPage />
                    </WebLayout>
                </Route>
                <Route exact path='/sell-car'>
                    <WebLayout>
                        <SellCarPage />
                    </WebLayout>
                </Route>
                <Route exact path='/buy-car'>
                    <WebLayout>
                        <BuyCarPage />
                    </WebLayout>
                </Route>
                <Route exact path='/price-plan'>
                    <WebLayout>
                        <PricePlan />
                    </WebLayout>
                </Route>
                <Route exact path='/short-listed'>
                    <WebLayout>
                        <ShortListedPage />
                    </WebLayout>
                </Route>
                <Route exact path='/profile-page'>
                    <WebLayout>
                        <ProfilePage />
                    </WebLayout>
                </Route>
            </Switch>

        </>
    );
};


export default Router;
