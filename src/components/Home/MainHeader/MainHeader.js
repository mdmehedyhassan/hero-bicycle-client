import React from 'react';
import bicycle from '../../../images/bicycle.jpg'

const MainHeader = () => {
    return (
        <main style={{backgroundColor: 'yellow'}} className="p-2  align-items-center text-center row mb-5">
            <div className="col-md-6 ">
                <h2 className=" text-danger p-3">Helping you connect to the right service centers</h2>
                <p className="">When you own any piece of equipment that has some kind of mechanical parts then it will eventually have to be serviced or even repaired at some point, particularly with a bicycle. Bike service is very important, and it’s not only available in the bike shop. Take a look at some useful tips to get you started…</p>
                <button className="btn btn-success mt-2 mb-2">Get an Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={bicycle} className="card-img " alt="..." />
            </div>
        </main>
    );
};

export default MainHeader;