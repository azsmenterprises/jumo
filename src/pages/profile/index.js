import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import BreadcrumbComp from './BreadcrumbComp'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Userimg from '../../assets/images/149071.png'
import BuyCarList from './buycars';
import SellCarList from './sellcar';
import SparePartsList from './spareparts';
import UpdateProfile from './profile';
function ProfilePage() {
    return (
        <>
            <Header />
            <HeaderBottom />
            <section className='py-5 bg-dark-theme'>
                <div className='container'>
                    <BreadcrumbComp />
                </div>
                <Container>
                    <Row>
                        <Col md='4'>
                             <div className='user-info'>
                                 <Card className='bg-dark p-4'>
                                      <div className='text-center mt-3'>
                                           <img src={Userimg}  alt=''  width='100px' />
                                      </div>
                                      <hr style={{color:'gray'}}></hr>
                                      <ul>
                                         <li>
                                              User ID :  <span>ABCD01234</span>
                                          </li>
                                          <li>
                                              Name :  <span>John Smith</span>
                                          </li>
                                          <li>
                                              Pone :  <span>123 456 123</span>
                                          </li>
                                          <li>
                                              Email :  <span>info@gmail.com</span>
                                          </li>
                                          <li>
                                              Address :  <span> Near-J V V Apartment</span>
                                          </li>
                                          <li>
                                              About :  
                                              <p style={{color:'gray', fontSize:'12px'}}>
                                                 Lorem Ipsum is simply dummy text of the printing and typesetting 
                                                 industry. Lorem Ipsum has been the industry's standard dummy text 
                                                 ever since the 1500s, when an unknown printer took a galley of 
                                                 type and scrambled it to make a type specimen book.
                                              </p>
                                          </li>
                                      </ul>
                                 </Card>
                                  
                             </div>
                        </Col>
                        <Col md='8'>
                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-1"
                            >
                                <Tab eventKey="buycar" title="Buy Cars">
                                    <BuyCarList/>
                                </Tab>
                                <Tab eventKey="sellcar" title="Sell Cars">
                                     <SellCarList/>
                                </Tab>
                                <Tab eventKey="spareparts" title="Spare Parts">
                                    <SparePartsList/>
                                </Tab>
                                <Tab eventKey="profile" title="Update Profile">
                                    <UpdateProfile/>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default ProfilePage
