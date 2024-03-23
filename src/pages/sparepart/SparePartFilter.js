import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SparePartFilter() {
    return (
        <>
            <Row className='mb-3'>
                <Col lg={9} >
                    <Card className='p-2'>
                        <div className='btns-filtered'>
                            <Button variant="warning"> <span>X</span> Clear All </Button>{' '}
                            <Button variant="light">Hyundai <span>X</span></Button>{' '}
                            <Button variant="light">2020 <span>X</span></Button>{' '}
                            <Button variant="light">100000 <span>X</span></Button>{' '}
                        </div>
                    </Card>
                </Col>
                <Col lg={3}>
                <Form.Select className='sort-by' aria-label="Default select example">
                    <option>Sort By: Price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Col>
            </Row>
        </>
    )
}

export default SparePartFilter