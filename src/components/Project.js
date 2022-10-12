import React from 'react'

export default function Project() {
    return (
        <div className='container'>
            <h3 className='mt-5 text-center'>Our features Projects</h3>
            <p className='text-center'>It is a long established fact that a reader will be distracted by the readable</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-5">
                <div className="col">
                    <div className="card left-image">
                        <div className="card-body">
                            <h5 className="card-title heading-left">Reader will be distracted by the readable</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card center-image">
                        <div className="card-body bg-light cntrimg" style={{position:'absolute'}}>
                            <h5 className="card-title mt-2">Reader will be distracted by the readable</h5>
                            <p className="card-text mt-2 mb-5 card-para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card right-image">
                        <div className="card-body">
                            <h5 className="card-title heading-right">Reader will be distracted by the readable</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
