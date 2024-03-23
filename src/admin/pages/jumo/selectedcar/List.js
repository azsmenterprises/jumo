import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import { Card, CardBody, Table } from "reactstrap";
import { RiDeleteBinLine } from "react-icons/ri";

const List = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Vehicle Name
                                </th>
                                <th>
                                    Vehicle Modal 
                                </th>
                                <th>
                                    Vehicle No.
                                </th>
                                <th>
                                    Vehicle Price
                                </th>
                                <th>
                                    Vehicle Lounch  Year
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                   Tata Punch	
                                </td>
                                <td>
                                    Tata Punch	
                                </td>
                                <td>
                                    443
                                </td>
                                <td>
                                   Rs. 6.13 - 10.20 Lakh*
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <RiDeleteBinLine stroke="red" fill="red"  size={20}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                  2
                                </th>
                                <td>
                                   Tata Punch	
                                </td>
                                <td>
                                    Tata Punch	
                                </td>
                                <td>
                                    443
                                </td>
                                <td>
                                   Rs. 6.13 - 10.20 Lakh*
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <RiDeleteBinLine stroke="red" fill="red"  size={20}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                   Tata Punch	
                                </td>
                                <td>
                                    Tata Punch	
                                </td>
                                <td>
                                    443
                                </td>
                                <td>
                                   Rs. 6.13 - 10.20 Lakh*
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <RiDeleteBinLine stroke="red" fill="red"  size={20}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                   4
                                </th>
                                <td>
                                   Tata Punch	
                                </td>
                                <td>
                                    Tata Punch	
                                </td>
                                <td>
                                    443
                                </td>
                                <td>
                                   Rs. 6.13 - 10.20 Lakh*
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <RiDeleteBinLine stroke="red" fill="red"  size={20}/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>


        </React.Fragment>
    );
};
export default List;
