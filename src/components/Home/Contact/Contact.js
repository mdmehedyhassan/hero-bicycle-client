import React from 'react';

const Contact = () => {
    return (
        <section className="mt-5 mb-5 p-2 bg-light">
            <div className="text-center text-success mb-5">
                <h1>Let us handle your project, professionally.</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="d-flex ">
                        <div className="form-group col-6">
                            <input type="text" className="form-control border-success" placeholder="Full Name" />
                        </div>
                        <div className="form-group col-6">
                           <input type="text" className="form-control border-success" placeholder="Last Name"/>
                       </div>
                    </div>
                    <div className="d-flex ">
                        <div className="form-group col-6">
                            <input type="text" className="form-control border-success" placeholder="Email Address" />
                        </div>
                        <div className="form-group col-6">
                           <input type="text" className="form-control border-success" placeholder="Phone Number"/>
                       </div>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control border-success"  rows="5" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-success"> Send Message </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;