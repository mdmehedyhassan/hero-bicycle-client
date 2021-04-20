import React from 'react';
import HowToDo from '../HowToDo/HowToDo';
import MainHeader from '../MainHeader/MainHeader';

const Header = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <HowToDo></HowToDo>
        </div>
    );
};

export default Header;