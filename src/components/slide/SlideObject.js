import React from 'react';
import './SlideObject.css';
import LineIcon from "react-lineicons";

const SlideObject = (props) => {
  return(
    <div>
      <div className='event-box'>
        <div className='event'>
          <div className='event-image'>
            <div className='event-image-text'>{props.onCurrentCategory}1</div>
          </div>
        </div>
        <div className='event'>
          <div className='event-image'>
            <div className='event-image-text'>{props.onCurrentCategory}2</div>
          </div>
        </div>
        <div className='event'>
          <div className='event-image'>
            <div className='event-image-text'>{props.onCurrentCategory}3</div>
          </div>
        </div>
      </div>
      {/* <div className='slide-object'>
        <button className='slide-button'><LineIcon name="chevron-left"></LineIcon></button>
        
        <button className='slide-button'><LineIcon name="chevron-right"></LineIcon></button>
      </div> */}
    </div>
  )
};

export default SlideObject;