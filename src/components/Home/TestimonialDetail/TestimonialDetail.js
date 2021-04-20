import React from 'react';

const TestimonialDetail = ({ testimonial }) => {
    return (
        <div className="col-md-4">
            <div className="d-flex">
                <img style={{ height: '100px' , borderRadius: '50%'}} src={testimonial.img} alt="" />
                <div>
                    <h4>{testimonial.name}</h4>
                    <h5>{testimonial.from}</h5>
                </div>
            </div>
            <div>
                <p>{testimonial.quote}</p>
            </div>
        </div>
    );
};

export default TestimonialDetail;