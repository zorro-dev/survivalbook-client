import React from 'react';
import {Image} from "react-bootstrap";
import '../../css/ImageSlider.css'

const ImageSlider = ({element}) => {

    const getListStyle = () => ({
        width: "70%",
        overflowX: "scroll"
    });

    const getImageItemStyle = () => ({
        userSelect: "none",
    });

    const renderImageItem = (item) => {
        return <div className="d-flex" key={item.number} style={{height: 200}}>
            <Image className="ms-sm-2 me-sm-2 rounded-3"
                   src={item.value}/>
        </div>
    }

    return (
        <div className="d-flex flex-row">
            <div
                style={getListStyle()}
                className="scroll-content d-flex flex-row">
                {element.value.map((item) => (
                    <div
                        style={getImageItemStyle()}>
                        {renderImageItem(item)}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ImageSlider;
