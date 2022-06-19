import React from 'react';

const MarkedList = ({element}) => {

    return (
        <div className="d-flex flex-row">
            <ul className="list">
                {element.value.map(item => <li id={item.number} key={item.number}>{item.value}</li>)}
            </ul>
        </div>
    );
};

export default MarkedList;
