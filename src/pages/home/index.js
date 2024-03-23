import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import HomeTopBanner from '../../components/HomeTopBanner'
import HowIsWorkSec from '../../components/HowIsWorkSec'
import BodyTypeSec from '../../components/BodyTypeSec'
import Button from 'react-bootstrap/Button';
import Faqs from '../../components/FaqsSec'
import Parts4Slider from '../../components/Parts4Slider'

function Home() {
  return (
    <>
      <Header/>
      <HeaderBottom />
      <HomeTopBanner />
      <BodyTypeSec />
      <section className='py-5 bg-dark-theme'>
        <div className='container'>
          <div className='section-title text-center mb-4'>
            <h2>Recently viewed Spare Parts</h2>
          </div>
          <Parts4Slider />
          <div className='text-center mt-3'>
            <Button variant='warning' className="px-lg-5 px-4 py-3 btn-theme ">Browse more</Button>
          </div>
        </div>
      </section>
      <Faqs />


    </>

  )
}

export default Home