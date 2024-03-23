import React, { useState } from 'react'
import Header from '../../components/Header'
// import ProductsListingSidebar from '../../components/ProductsListingSidebar'
import ProductListing from '../../components/ProductsListing'
import ProductsListingFilter from '../../components/ProductsListingFilter'
import Product4Slider from '../../components/Product4Slider'
import Button from 'react-bootstrap/Button';
import BreadcrumbComp from './BreadcrumbComp'
import SparePartSidebar from './sparepartsidebar'
// import SparePartFilter from './SparePartFilter'
import SparePartListing from './SparePartListing'
import SparePartFilter from './SparePartFilter'



function SparePartProduct() {
    const [showSidebar, setHideSidebar] = useState(false);
    const showHideSidebar = () => {
        setHideSidebar(!showSidebar);
    }
    return (
        <>
            <Header />
            <section className='py-5 bg-dark-theme'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='section-title mb-4'>
                                <h2 className='h5'>Filter:</h2>
                            </div>
                            <div className={showSidebar ? 'card product-list-siderbar start-0' : 'card product-list-siderbar'}>
                                {/* <button className='btn text-end bg-dark' onClick={showHideSidebar}>
                                        <span className='fs-3'>x</span>
                                    </button> */}
                                <SparePartSidebar />
                            </div>

                        </div>
                        <div className='col-lg-9'>
                            <BreadcrumbComp />
                            <br />
                            {/* <SparePartFilter />
                                <div className='text-end'>
                                    <button className='btn btn-theme  fixed-bottom bottom-0 rounded-0' onClick={showHideSidebar}>
                                        Filter
                                    </button>
                                </div> */}
                            <SparePartListing />

                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SparePartProduct