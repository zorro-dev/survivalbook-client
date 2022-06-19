import React from 'react';

const Paragraph = ({element}) => {

    return (
        <div className="d-flex flex-row">
            <p className="paragraph">{element.value}</p>
        </div>
    );
};

export default Paragraph;
