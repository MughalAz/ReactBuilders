import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container pb-2'>
        <h3 className='heading-5'>Clients Words</h3>
        <p className='para-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className='footer-top pb-2'>
          <div className='client'>

          </div>
          <div>
            <img src="/assets/images/footer-image.png" className='word' alt="image" />
          </div>
          <h5 className='cons'>CONSECTETUR</h5>
          <p className='para-footer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className='d-flex text-center'>
          <div className='footer-arrow-1'><i class="fa fa-arrow-left icon-footer"></i></div>
          <div className='footer-arrow-2'><i class="fa fa-arrow-right icon-footer"></i></div>
          </div>
        </div>
        <div className='row mt-4 mb-5'>
          <div className='col-md-3'>
            <h1 className='heading-bottom mt-5'>RHINO</h1>
            <p className='para-bottom mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
          </div>
          <div className='col-md-3'>
            <h5 className='heading-last mt-5'>QUICK LINKS</h5>
            <h6 className='text-white mt-4'>Home</h6>
            <h6 className='text-white'>About Us</h6>
            <h6 className='text-white'>Services</h6>
            <h6 className='text-white'>Projects</h6>
            <h6 className='text-white'>Blogs</h6>
            <h6 className='text-white'>Contact Us</h6>
          </div>
          <div className='col-md-3'>
            <h5 className='heading-last mt-5'>INSTAGRAM FEEDS</h5>
            <div className='d-grid mt-4'>
              <img src="/assets/images/grid-1.png" className='w-100 mar' alt="image" />
              <img src="/assets/images/grid-2.png" className='w-100 mar' alt="image" />
              <img src="/assets/images/grid-3.png" className='w-100 mar' alt="image" />
              <img src="/assets/images/grid-4.png" className='w-100 mar' alt="image" />
            </div>
          </div>
          <div className='col-md-3'>
            <h5 className='heading-last mt-5'>SIGN UP TO OUR NEWSLETTER</h5>
            <div class="mb-3">
              <input type="email" class="email w-100" id="email" placeholder='Enter You Email' />
              <button className='btn-footer w-100 mt-4 pt-2 pb-2'>Sign Up</button>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p className='pt-2 text-center'>© 2019 All Rights Reserved. Design by Free Html Templates</p>
        </div>
      </div>
    </div>
  )
}
