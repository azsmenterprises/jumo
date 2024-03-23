import React from 'react';

import { Route, Routes } from 'react-router-dom';
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
        <Routes>

            {/* auth pages start*/}

            <Route exact path='/login' element={<LoginPage />}></Route>

            <Route exact path='/register' element={<RegisterPage />}></Route>

            <Route exact path='/otp' element={<OtpPage />}></Route>


            {/* auth pages close */}


           {/* others pages start */}
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/products-listing' element={<ProductsListingPage />}></Route>
            <Route exact path='/product-details' element={<ProductDetailPage />}></Route>
            {/* sell car page  */}
            <Route exact path='/sell-car' element={<SellCarPage />}></Route>
            {/* buy car page  */}
            <Route exact path='/buy-car' element={<BuyCarPage />}></Route>
            {/*price Plan  */}
            <Route exact path='/price-plan' element={<PricePlan />}></Route>
              {/*shorllist page  */}
              <Route exact path='/short-listed' element={<ShortListedPage />}></Route>
               {/*shorllist page  */}
               <Route exact path='/profile-page' element={<ProfilePage />}></Route>
          {/* others pages close*/}

        </Routes>
    );
};

export default Router;
