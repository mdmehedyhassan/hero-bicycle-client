import React from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import shakib from '../../../images/shakib.jpg'
import mashrafe from '../../../images/mashrafe.jpg'
import tamim from '../../../images/tamim.jpg'


const testimonialData = [
    {
        name: 'Shakib Al Hasan',
        from: 'Dhaka',
        img: shakib,
        quote: 'Lorem instrument dgasdlgf asdg adas sds fasd fasdsd gadg ad gasdg ag '
    },
    {
        name: 'Mashrafe Mortoza',
        from: 'Cumilla',
        img: mashrafe,
        quote: 'Lorem instrument dgasdlgf asdg adas sds fasd fasdsd gadg ad gasdg ag '
    },
    {
        name: 'Tamim Igbal',
        from: 'Khulna',
        img: tamim,
        quote: 'Lorem instrument dgasdlgf asdg adas sds fasd fasdsd gadg ad gasdg ag '
    }
]

const Testimonials = () => {
    return (
        <section>
            <div>
                <h2 className="text-center text-success pt-5 pb-3 ">Testimonials</h2>
            </div>
            <div className="row">
                {
                   testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>) 
                }
            </div>
        </section>
    );
};

export default Testimonials;