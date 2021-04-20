import React from 'react';
import brake from '../../../images/brake.jpg'
import gear from '../../../images/gear.jpg'
import shifter from '../../../images/shifter.jpg'
import chain from '../../../images/chain.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Brakes pads',
        img: brake,
        price: 58,
        description: 'Brake pads are heavily used and they come with wear indicators, such as circles or lines. If these have disappeared from the pads wearing down, it’s time to replace them. All that’s needed is a 2.5 and 4 mm Allen key.'
    },
    {
        name: 'Gear Cables',
        img: gear,
        price: 95,
        description: 'Over time brake and gear cables can stretch with frequent use. Cables are made out of stainless steel and are under tension when you pull on the brakes or change gear. Stretched cables cause your gears to suddenly change or slip due to the slackened tension.'
    },
    {
        name: 'Shifter',
        img: shifter,
        price: 65,
        description: 'The majority of the time it‘s only the inner cable that needs replacing. Here is how to replace the inner cables. Shift to the smallest cog in the rear. Shift to the smallest chain ring up front. Cut off the cable ends using cable cutters. With an Allen Key (Hex Key) loosen the shifter cable anchor bolts and pull the cables out of the derailleurs.'
    },
    {
        name: 'Chain',
        img: chain,
        price: 87,
        description: 'Aside from tires, your bike chain is a frequently used component that should be replaced before it’s too late. You can measure your chain with a chain measurer tool to see how worn it is. To replace the chain you will need to find the quick link and unlink the chain. If you don’t have a quick link to do this then you can use a chain tool. Use your old chain to measure the correct length against the new one. Take out links to match the length. The length all depends on the gearing.'
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center text-success mt-5">
                <h1>Our Awesome <span className="text-danger">Services</span></h1>
            </div>
            <div className="row">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;