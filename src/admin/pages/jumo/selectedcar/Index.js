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

const SelectedCarList = () => {
  return (
    <React.Fragment>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                  Selected Vehicle
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>You have total 4  Selected Vehicle.</p>
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
export default SelectedCarList;
