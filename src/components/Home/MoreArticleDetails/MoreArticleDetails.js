import React from 'react';

const MoreArticleDetails = ({articles}) => {
    return (
        <div className="d-flex mt-2 col-md-4">
            <div className="">
                <img src={articles.img} className="card-img" alt="" />
                <h2 className="text-danger pt-2">{articles.title}</h2>
                <p >{articles.description}</p>
            </div>
        </div>
    );
};

export default MoreArticleDetails;