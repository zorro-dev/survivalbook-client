import React from 'react';

const Paragraph = ({element}) => {

    return (
        <div className="d-flex flex-row">
            <p contentEditable={true} suppressContentEditableWarning={true}
               style={{border: "none", outline: "none", width: "70%", fontFamily:"serif", fontSize:20}}>{element.value}</p>
        </div>
    );
};

export default Paragraph;
