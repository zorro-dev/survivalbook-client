import React from 'react';

const Header = ({element}) => {

    return (
        <div className="d-flex flex-row">
            <h1 style={{border: "none", outline: "none", width: "70%"}}>{element.value}</h1>
        </div>
    );
};

export default Header;
