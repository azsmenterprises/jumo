import React from 'react'
import { Button, Card } from 'react-bootstrap';

function UpdateProfile () {
    return (
        <>

            <section className='py-3 bg-dark-theme'>
                <Card className='bg-dark p-4'>
                    <form>
                          
                          <div className='mt-2'>
                              <label>Name</label>
                                 <input type='text' placeholder='Name' className='form-control'>
                              </input>
                          </div>
                          <div className='mt-2'>
                              <label>Phone Number</label>
                                 <input type='text' placeholder='Phone Number' className='form-control'>
                              </input>
                          </div>
                          <div className='mt-2'>
                              <label>Email</label>
                                 <input type='text' placeholder='Info@gmail.com' className='form-control'>
                              </input>
                          </div>
                          <div className='mt-2'>
                              <label>Address</label>
                                 <input type='text' placeholder='Address' className='form-control'>
                              </input>
                          </div>
                          <div className='mt-2'>
                              <label>About</label>
                                 <textarea type='text' rows={3} placeholder='About...' className='form-control'>
                              </textarea>
                          </div>

                          <div className='mt-5'>
                               <Button className='btn btn-theme'>Update</Button>
                          </div>


                    </form>
                </Card>
              
            </section>


        </>

    )
}

export default UpdateProfile