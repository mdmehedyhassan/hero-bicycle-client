import React from 'react';
import mechanicalBicycle from '../../../images/mechanicBicycle.jpg'


const FeaturedService = () => {
    return (
        <div style={{ backgroundColor: 'blue' }} className="p-2 text-light mt-5 mb-5 align-items-center text-center row">
            <div className="col-md-6 ">
                <h2 className="p-3 text-warning">Emergency free Bicycle service</h2>
                <p className="">Sometimes, usually in the City, there are free repair services such as Cycle SOS Pit Stop in London and also Bike Shed in Wolverhampton. These shops check your bike for emergency attention. Halfords, a major UK bicycle retailer, has a permanent service where they offer a free bike check.</p>
                <div className="row">
                    <div className="col-md-6 ">
                        <h1 className="text-warning">500+</h1>
                        <h5>Happy Customer</h5>
                    </div>
                    <div className="col-md-6 ">
                        <h1 className="text-warning">20+</h1>
                        <h5>Total Services</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <img src={mechanicalBicycle} className="card-img " alt="..." />
            </div>
        </div>
    );
};

export default FeaturedService;