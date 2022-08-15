import React from 'react';
import './Counter.css';
const Counter = () => {
    return (
        <div className='counter-background'>
            <div className='text'>
                <div className="container">
                    <div className="row mx-auto text-center">
                        <div className="col">
                            <div className='information'>
                                <div className='counterIcons'>
                                    <i className="fas fa-book"></i>
                                </div>
                                <div className='items'>
                                    <h1>987+</h1>
                                    <p>BOOKS FOR SALE</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='information'>
                                <div className='counterIcons'>
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className='items'>
                                    <h1>1230+</h1>
                                    <p>VISITOR PER DAY</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='information'>
                                <div className='counterIcons'>
                                    <i className="far fa-comments"></i>
                                </div>
                                <div className='items'>
                                    <h1>450+</h1>
                                    <p>DEALER REVIEWS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='information'>
                                <div className='counterIcons'>
                                    <i className="fas fa-user-check"></i>
                                </div>
                                <div className='items'>
                                    <h1>79+</h1>
                                    <p>VERIFIED DEALERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;