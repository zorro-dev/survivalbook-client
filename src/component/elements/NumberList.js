import React from 'react';

const MarkedList = ({element}) => {

    return (
        <div className="d-flex flex-row">
            <ol style={{border: "none", outline: "none", width: "70%", fontFamily: "serif", fontSize: 20}}>
                {element.value.map(item => <li id={item.number} key={item.number}>{item.value}</li>)}
            </ol>
        </div>
    );
};

export default MarkedList;
