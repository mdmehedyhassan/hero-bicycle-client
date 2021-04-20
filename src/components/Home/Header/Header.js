import React from 'react';
import HowToDo from '../HowToDo/HowToDo';
import MainHeader from '../MainHeader/MainHeader';
import Navbars from '../Navbars/Navbars';

const Header = () => {
    return (
        <div>
            <Navbars></Navbars>
            <MainHeader></MainHeader>
            <HowToDo></HowToDo>
        </div>
    );
};

export default Header;