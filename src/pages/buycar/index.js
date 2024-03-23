import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import HomeTopBanner from '../../components/HomeTopBanner'
import HowIsWorkSec from '../../components/HowIsWorkSec'
import BodyTypeSec from '../../components/BodyTypeSec'
import Button from 'react-bootstrap/Button';
import Faqs from '../../components/FaqsSec'
import Parts4Slider from '../../components/Parts4Slider'
import BreadcrumbComp from './BreadcrumbComp'

function BuyCarPage() {
    return (
        <>
            <Header />
            <HeaderBottom />
            <section className='py-5 bg-dark-theme'>
                <div className='container-fluid'>
                    <BreadcrumbComp/>
                </div>
            </section>
            <HowIsWorkSec />
            <Faqs />
        </>

    )
}

export default BuyCarPage