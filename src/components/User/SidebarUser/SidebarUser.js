import React from 'react';
import Book from '../Book/Book';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const SidebarUser = () => {
    return (
        <div>
        <Router>
            <div className="d-flex row">
                <div className="bg-info text-light col-md-6 p-5">
                    <ul className="">
                        <Link className="text-light p-2" to="/book">Book</Link> <br/>
                        <Link className="text-light p-2" to="/booking">Booking List</Link> <br/>
                        <Link className="text-light p-2" to="/review">Review</Link> <br/>
                    </ul>
                </div>

                <hr />
                <div className="col-md-6">
                    <h4>Welcome to User page</h4>
                    <Switch>
                        <Route exact path="/book">
                            <Book/>
                        </Route>
                        <Route exact path="/booking">
                            <ServiceList></ServiceList>
                        </Route>
                        <Route exact path="/review">
                            <Review/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>


    </div>
    );
};

export default SidebarUser;