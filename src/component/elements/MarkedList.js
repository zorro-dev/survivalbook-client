import React from 'react';

const MarkedList = ({element}) => {

    return (
        <div className="d-flex flex-row">
            <ul contentEditable={true} suppressContentEditableWarning={true} style={{border: "none", outline: "none", width: "70%", fontFamily:"serif", fontSize:20}}>
                {element.value.map(item => <li id={item.number} key={item.number}>{item.value}</li>)}
            </ul>
        </div>
    );
};

export default MarkedList;
