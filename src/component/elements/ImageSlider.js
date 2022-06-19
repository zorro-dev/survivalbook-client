import React from 'react';
import {Image} from "react-bootstrap";
import '../../css/ImageSlider.css'

const ImageSlider = ({element}) => {

    const getListStyle = () => ({
        overflowX: "scroll"
    });

    const getImageItemStyle = () => ({
        userSelect: "none",
    });

    const renderImageItem = (item) => {
        return <div className="d-flex" key={item.number} style={{height: 250}}>
            <Image className="image-slider-item"
                   src={item.value}/>
        </div>
    }

    return (
        <div className="image-slider d-flex flex-row" style={getListStyle()}>
            <div
                style={{marginBottom: 5}}
                className="d-flex flex-row ">
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
