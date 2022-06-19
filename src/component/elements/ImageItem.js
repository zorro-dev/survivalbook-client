import React from 'react';
import {Image} from "react-bootstrap";

const ImageItem = ({element}) => {

  return (
    <div className="d-flex flex-row">
      <div className="d-flex flex-fill flex-column">
        <Image className="pb-sm-1 rounded-3" style={{width: "70%"}} src={element.value}/>
      </div>
    </div>
  );
};

export default ImageItem;
