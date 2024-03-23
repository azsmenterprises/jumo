import React, {useState} from 'react'
import Header from '../../components/Header'
import ProductsListingSidebar from '../../components/ProductsListingSidebar'
import BreadcrumbComp from '../../components/BreadcrumbComp'
import ProductListing from '../../components/ProductsListing'
import ProductsListingFilter from '../../components/ProductsListingFilter'
import Product4Slider from '../../components/Product4Slider'
import Button from 'react-bootstrap/Button';



function ProductsListingPage() {
    const [showSidebar, setHideSidebar] = useState(false);
    const showHideSidebar = () =>{
        setHideSidebar(!showSidebar);
    }
    return (
        <>
            <Header />
            <section className='py-5 bg-dark-theme'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3'>
                                
                            <div className={showSidebar ? 'card product-list-siderbar start-0' : 'card product-list-siderbar'}>
                                     <button className='btn text-end  ' onClick={showHideSidebar}>
                                        <span className='bg-danger text-light rounded-circle d-inline-block px-2 pb-1'>x</span>
                                    </button>
                                <ProductsListingSidebar />
                            </div>
                            
                        </div>
                        <div className='col-lg-9'>
                            <BreadcrumbComp />
                            <ProductsListingFilter />
                                <div className='text-end'>
                                    <button className='btn btn-theme  fixed-bottom bottom-0 rounded-0' onClick={showHideSidebar}>
                                        Filter
                                    </button>
                                </div>
                            <ProductListing />


                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5 bg-white'>
                <div className='container'>
                <div className='section-title text-center mb-4'>
                    <h2>You May also Like</h2>
                </div>
                <Product4Slider />
                <div className='text-center mt-3'>
                    <Button variant='warning' className="px-lg-5 px-4 py-3 btn-theme ">Browse more</Button>
                </div>
                </div>
            </section>
        </>

    )
}

export default ProductsListingPage