import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';

const Sidebar = () => {
    return (
        <div>
            <Router>
                <div className="d-flex row">
                    <div className="bg-success text-light col-md-6 p-5">
                        <ul className="">
                            <Link className="text-light p-2" to="/order">Order list</Link> <br/>
                            <Link className="text-light p-2" to="/addservice">+Add service</Link><br/>
                            <Link className="text-light p-2" to="/makeadmin">Make Admin</Link><br/>
                            <Link className="text-light p-2" to="/manageservices">Manage Services</Link><br/>
                        </ul>
                    </div>

                    <hr />
                    <div className="col-md-6">
                        <Switch>
                            <Route exact path="/order">
                                <OrderList></OrderList>
                            </Route>
                            <Route exact path="/addservice">
                                <AddService></AddService>
                            </Route>
                            <Route exact path="/makeadmin">
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path="/manageservices">
                                <ManageServices></ManageServices>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>


        </div>
    );
};

export default Sidebar;