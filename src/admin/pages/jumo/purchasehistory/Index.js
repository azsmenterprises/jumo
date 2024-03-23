import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem, CardBody, } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockBetween,
} from "../../../components/Component";
import List from "./List";

const PurchaseHistory = () => {
  return (
    <React.Fragment>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                 Purchase History
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>You have total 2 Data here</p>
              </BlockDes>
            </BlockHeadContent>
            
          </BlockBetween>
        </BlockHead>
        <Block>
             <List/>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default PurchaseHistory;
