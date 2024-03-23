
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../assets/js/PriceRange';

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
const YearsData = [
    {
        id: 0,
        title: '2020 & above',
    },
    {
        id: 1,
        title: '2018 & above',
    },
    {
        id: 2,
        title: '2016 & above',
    },
    {
        id: 3,
        title: '2014 & above',
    },
    {
        id: 4,
        title: '2012 & above',
    },
    {
        id: 5,
        title: '2010 & above',
    },

]
const KmsData = [
    {
        id: 0,
        title: '10,000 kms or less',
    },
    {
        id: 1,
        title: '20,000 kms or less',
    },
    {
        id: 2,
        title: '30,000 kms or less',
    },
    {
        id: 3,
        title: '30,000 kms or less',
    },
    {
        id: 4,
        title: '40,000 kms or less',
    },
    {
        id: 5,
        title: '50,000 kms or less',
    },


]

function ProductsListingSidebar() {

    return (
        <>
            <div className='sidebar-item border-bottom'>
                <div className='section-title'>
                    <h3 className='h5'>Price Range</h3>
                </div>
                <div class="range-slider">
                    <span class="rangeValues"></span>
                    <input value="1000" min="1000" max="50000" step="500" type="range" />
                    <input value="50000" min="1000" max="50000" step="500" type="range" />
                </div>
            </div>
            <div className='sidebar-item border-bottom'>
                <div className='section-title'>
                    <h3 className='h5'>Brands + Models</h3>
                </div>
                <Accordion defaultActiveKey="0" className='sidebar-accordion'>
                    {jsonData.map((item) => (
                        <Accordion.Item eventKey={item.id}>
                            <Accordion.Header>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id={`checkbox${item.id}`} />
                                    <label class="form-check-label" for={`checkbox${item.id}`}>
                                        {item.title}
                                    </label>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
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
                <div className='section-title'>
                    <h3 className='h5'>Year</h3>
                </div>
                <div className='years-list ps-2'>
                    {(YearsData.map((item) => (
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
                <div className='section-title'>
                    <h3 className='h5'>Kms Driven</h3>
                </div>
                <div className='kms-list ps-2'>
                    {(KmsData.map((item) => (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="kmsRadios" id={`YearsData${item.id}`} value={`YearsData${item.title}`} />
                            <label class="form-check-label" for={`YearsData${item.id}`}>
                                {item.title}
                            </label>
                        </div>
                    )))}

                </div>
            </div>

        </>
    );
}

export default ProductsListingSidebar;