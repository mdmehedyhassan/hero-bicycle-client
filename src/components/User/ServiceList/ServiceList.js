import React from 'react';

const ServiceList = () => {
    return (
        <div>
            <h1>Service List</h1>
            <div className="row d-flex">
                <div className="col-md-6">
                    <h4>Brakes pads</h4>
                    <p>Brake pads are heavily used and they come with wear indicators, such as circles or lines. If these have disappeared from the pads wearing down, it’s time to replace them. All that’s needed is a 2.5 and 4 mm Allen key.</p>
                </div>
                <div className="col-md-6">
                    <h4>Gear Cables</h4>
                    <p>Over time brake and gear cables can stretch with frequent use. Cables are made out of stainless steel and are under tension when you pull on the brakes or change gear. Stretched cables cause your gears to suddenly change or slip due to the slackened tension.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;