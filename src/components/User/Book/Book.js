import React from 'react';

const Book = () => {
    return (
        <div>
            <input placeholder="Your Name" className="input-group input-lg" type="text"/><br/>
            <input placeholder="Compony's Name Designation" className="input-group input-lg" type="text"/><br/>
            <input placeholder="Description" className="input-group input-lg" type="text"/><br/>
            <input placeholder="Number" className="input-group input-lg" type="number"/><br/>
            <input className="input-group input-lg" type="date"/><br/>
            <p>Your Service changed will be $500</p><button className="btn-primary">Submit</button>
        </div>
    );
};

export default Book;