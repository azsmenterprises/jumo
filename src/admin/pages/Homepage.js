import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import SaleRevenue from "../components/partials/default/sale-revenue/SaleRevenue";
import ActiveSubscription from "../components/partials/default/active-subscription/ActiveSubscription";
import AvgSubscription from "../components/partials/default/avg-subscription/AvgSubscription";
import SalesOverview from "../components/partials/default/sales-overview/SalesOverview";
import TransactionTable from "../components/partials/default/transaction/Transaction";
import RecentActivity from "../components/partials/default/recent-activity/Activity";
import NewsUsers from "../components/partials/default/new-users/User";
import Support from "../components/partials/default/support-request/Support";
import Notifications from "../components/partials/default/notification/Notification";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem, CardBody } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewCard,
  PreviewAltCard,
  BlockBetween,
} from "../components/Component";

const Homepage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                 Dashboard
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to <span style={{color:'#cda619',fontWeight:'800'}}>Seller</span>  Dashboard</p>
              </BlockDes>
            </BlockHeadContent>
            {/* <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-white btn-dim btn-outline-light">
                          <Icon className="d-none d-sm-inline" name="calender-date" />
                          <span>
                            <span className="d-none d-md-inline">Last</span> 30 Days
                          </span>
                          <Icon className="dd-indc" name="chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#!"
                              >
                                <span>Last 30 days</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 6 months</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 3 weeks</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button color="primary">
                        <Icon name="reports" />
                        <span>Reports</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent> */}
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col xxl="6">
              <Row className="g-gs">
                <Col lg="4" md="4" sm="6">
                     <Card>
                         <CardBody>
                              <div className="p-2">
                                   <h3 style={{fontSize:'22px', fontWeight:'700'}}>
                                      Total  Vehicle  
                                      <span style={{float:'right',fontSize:'26px', fontWeight:'700',color:'#ffd000'}}>
                                           04
                                      </span>
                                   </h3>
                              </div>
                         </CardBody>
                     </Card>
                </Col>
                <Col lg="4" md="4" sm="6">
                     <Card>
                         <CardBody>
                              <div className="p-2">
                                   <h3 style={{fontSize:'22px', fontWeight:'700'}}>
                                      Total Sales Vehicle  
                                      <span style={{float:'right',fontSize:'26px', fontWeight:'700',color:'#ffd000'}}>
                                           04
                                      </span>
                                   </h3>
                              </div>
                         </CardBody>
                     </Card>
                </Col>
                <Col lg="4" md="4" sm="6">
                     <Card>
                         <CardBody>
                              <div  className="p-2">
                                   <h3 style={{fontSize:'22px', fontWeight:'700'}}>
                                       Sales History 
                                      <span style={{float:'right',fontSize:'26px', fontWeight:'700',color:'#ffd000'}}>
                                           02
                                      </span>
                                   </h3>
                              </div>
                         </CardBody>
                     </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="" xxl="4">
              <Card className="card-bordered h-100">
                <Notifications />
              </Card>
            </Col>
            {/* <Col xxl="6">
              <PreviewAltCard className="h-100">
                <SalesOverview />
              </PreviewAltCard>
            </Col>
            <Col xxl="8">
              <Card className="card-bordered card-full">
                <TransactionTable />
              </Card>
            </Col>
            <Col xxl="4" md="6">
              <Card className="card-bordered card-full">
                <RecentActivity />
              </Card>
            </Col>
            <Col xxl="4" md="6">
              <Card className="card-bordered card-full">
                <NewsUsers />
              </Card>
            </Col>
            <Col lg="6" xxl="4">
              <Card className="card-bordered h-100">
                <Support />
              </Card>
            </Col>
            <Col lg="6" xxl="4">
              <Card className="card-bordered h-100">
                <Notifications />
              </Card>
            </Col> */}
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
