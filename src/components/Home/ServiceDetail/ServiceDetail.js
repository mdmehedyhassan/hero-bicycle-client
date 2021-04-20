import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="d-flex mt-2 col-md-6">
            <div className="">
                <img src={service.img} className="card-img" alt="" />
                <h2 className="text-danger">{service.name}</h2>
                <h5>Price: ${service.price}</h5>
                <p >{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;