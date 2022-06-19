import React from 'react';
import {Image} from "react-bootstrap";

const ImageItem = ({element}) => {

  return (
      <Image className="image img-fluid" src={element.value}/>
  );
};

export default ImageItem;
