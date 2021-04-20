import React from 'react';

const Review = () => {
    return (
        <div>
            <input placeholder="Your Name" className="input-group input-lg" type="text"/><br/>
            <input placeholder="Compony's Name Designation" className="input-group input-lg" type="text"/><br/>
            <input placeholder="Description" className="input-group input-lg" type="text"/><br/>
            <button className="btn-primary">Submit</button>
        </div>
    );
};

export default Review;