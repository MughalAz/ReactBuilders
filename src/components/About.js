import React from 'react'

export default function About() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 d-none d-sm-block'>
            <div className='construction-1 text-center'>
            <img src="/assets/images/construction.png" className='mt-4' alt="image" />
              <p className='mt-3'>CONSTRUCTION SERVICES</p>
            </div>
          </div>
          <div className='col-md-3 d-none d-sm-block'>
            <div className='construction text-center'>
            <img src="/assets/images/engineer.png" className='mt-4' alt="image" />
              <p className='mt-3'>RECONSTRUCTION</p>
            </div>
          </div>
          <div className='col-md-3 d-none d-sm-block'>
          <div className='construction-1 text-center'>
          <img src="/assets/images/laborer.png" className='mt-4' alt="image" />
            <p className='mt-3'>ELECTRICAL SERVICES</p>
            </div>
          </div>
          <div className='col-md-3 d-none d-sm-block'>
            <div className='d-flex arrow-2'>
            <div className='arrow'><i class="fa fa-chevron-left icon"></i></div>
            <div className='arrow-1'><i class="fa fa-chevron-right icon-1"></i></div>
            </div>
          </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <h5 className='heading-2'>About Our Company</h5>
                <p className='mt-5'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                <button className='btn-2 mb-3 mt-5'>Read More</button>
            </div>
            <div className='col-md-6'>
                <img src="/assets/images/img-1.png" className='image-1 img-fluid img-thumbnail' alt="image" />
            </div>
        </div>
      </div>
    </div>
  )
}
