
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../assets/js/PriceRange';
import { Card } from 'reactstrap';

const jsonData = [
    {
        id: 0,
        title: 'Hyundai',
    },
    {
        id: 1,
        title: 'Maruti Suzuki',
    },
    {
        id: 2,
        title: 'Honda',
    },
    {
        id: 3,
        title: 'Tata',
    },
    {
        id: 4,
        title: 'Mahindra',
    },
    {
        id: 5,
        title: 'Renault',
    },
]
const jsonsData1 = [
    {
        id: 0,
        title: 'Brake Parts(6)',
    },
    {
        id: 1,
        title: 'Accessories (10)',
    },
    {
        id: 2,
        title: 'Engine Parts (4)',
    },
    {
        id: 3,
        title: 'hermes(10)',
    },
    {
        id: 4,
        title: 'louis vuitton(8)',
    },
    {
        id: 5,
        title: 'Tommy Hilfiger(7)',
    },
    {
        id: 5,
        title: 'House Plants(6)',
    },

]
const ColorOption = [
    {
        id: 0,
        title: 'Black (6)',
    },
    {
        id: 1,
        title: 'Blue (8)',
    },
    {
        id: 2,
        title: 'Brown (10)',
    },
    {
        id: 3,
        title: 'Green (6)',
    },
    {
        id: 4,
        title: 'Pink (4)',
    },
    {
        id: 5,
        title: ' White (2)',
    },
    {
        id: 5,
        title: 'Yellow (3)',
    },
]

function SparePartSidebar() {

    return (
        <>
         <Card className='bg-dark'>
         <div className='sidebar-item border-bottom'>
                <div className='section-title pt-2 pb-1'>
                    <h2 className='h5'>FILTER BY PRICE</h2>
                </div>
                <div class="range-slider">
                    <span class="rangeValues"></span>
                    <input value="1000" min="1000" max="50000" step="500" type="range" />
                    <input value="50000" min="1000" max="50000" step="500" type="range" />
                </div>
            </div>
            <div className='sidebar-item border-bottom'>
                <div className='section-title pt-1 pb-1'>
                    <h2 className='h5'>CATEGORIES</h2>
                </div>
                <Accordion defaultActiveKey="0" className='sidebar-accordion'>
                    {jsonData.map((item) => (
                        <Accordion.Item eventKey={item.id}>
                            <Accordion.Header style={{backgroundColor:'#000'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id={`checkbox${item.id}`} />
                                    <label class="form-check-label" for={`checkbox${item.id}`}>
                                        {item.title}
                                    </label>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='bg-dark'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id={`checkbox0${item.id}`} />
                                    <label class="form-check-label" for={`checkbox0${item.id}`}>
                                        Sub Brand of {item.title}
                                    </label>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            <div className='sidebar-item border-bottom'>
                <div className='section-title pt-1 pb-1'>
                    <h2 className='h5'>MANUFACTURER</h2>
                </div>
                <div className='years-list ps-2'>
                    {(jsonsData1.map((item) => (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="yearsRadios" id={`YearsData${item.id}`} value={`YearsData${item.title}`} />
                            <label class="form-check-label" for={`YearsData${item.id}`}>
                                {item.title}
                            </label>
                        </div>
                    )))}

                </div>
            </div>
            <div className='sidebar-item border-bottom'>
                <div className='section-title pt-1 pb-1'>
                    <h2 className='h5'>SELECT BY COLOR</h2>
                </div>
                <div className='kms-list ps-2'>
                    {(ColorOption.map((item) => (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="kmsRadios" id={`YearsData${item.id}`} value={`YearsData${item.title}`} />
                            <label class="form-check-label" for={`YearsData${item.id}`}>
                                {item.title}
                            </label>
                        </div>
                    )))}

                </div>
            </div>
         </Card>
           

        </>
    );
}

export default SparePartSidebar;