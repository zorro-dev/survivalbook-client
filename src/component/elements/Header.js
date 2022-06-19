import React from 'react';

const Header = ({element, index}) => {

    return (
        <div className="d-flex flex-row">
            {index === 0 ? <h1 className="title-h1">{element.value}</h1> :
                <h2 className="title-h2">{element.value}</h2>}
        </div>
    );
};

export default Header;
