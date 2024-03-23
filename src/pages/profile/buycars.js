import React from 'react'
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function BuyCarList() {
    return (
        <>

            <section className='py-3 bg-dark-theme'>
                <Card className='bg-dark'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Car Name</th>
                            <th>Car Modal</th>
                            <th>Car Original Price</th>
                            <th>Car Buying Price</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Staus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SUV</td>
                            <td>SUV</td>
                            <td>₹ 5.66 Lakh</td>
                            <td>₹ 8.66 Lakh</td>
                            <td>22-03-2024</td>
                            <td>12:00PM </td>
                            <td>Done </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SUV</td>
                            <td>SUV</td>
                            <td>₹ 5.66 Lakh</td>
                            <td>₹ 8.66 Lakh</td>
                            <td>22-03-2024</td>
                            <td>12:00PM </td>
                            <td>Done </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SUV</td>
                            <td>SUV</td>
                            <td>₹ 5.66 Lakh</td>
                            <td>₹ 8.66 Lakh</td>
                            <td>22-03-2024</td>
                            <td>12:00PM </td>
                            <td>Done </td>
                        </tr>
                    </tbody>
                </Table>
                </Card>
              
            </section>


        </>

    )
}

export default BuyCarList