import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className='container'>
                <h5 className='heading-4'>Contact US</h5>
                <div className='row'>
                    <div className='col-md-6'>
                        <div class="mb-3 mt-4">
                            <input type="email" class="form-control form-name" id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control form-name" id="exampleFormControlInput1" placeholder="Phone" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control form-name" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control form-name-1" id="exampleFormControlTextarea1" placeholder='Message' rows="3"></textarea>
                        </div>
                        <button className='btn-5'>Send</button>
                    </div>
                    <div className='col-md-6'>
                        <img src="assets/images/contact-image.png" class="card-img-top image-contact mt-3" alt="..." />
                    </div>
                    <img src="assets/images/train.png" class="rounded float-start" alt="..." />
                </div>
            </div>
        </>
    )
}
