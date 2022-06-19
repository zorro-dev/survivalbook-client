import React from 'react';

const MarkedList = ({element}) => {

    return (
        <div className="d-flex flex-row">
            <ol className="list">
                {element.value.map(item => <li id={item.number} key={item.number}>{item.value}</li>)}
            </ol>
        </div>
    );
};

export default MarkedList;
