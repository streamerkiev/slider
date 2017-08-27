import React from 'react';

function SliderArrow(props) {
    return (
        <button className={`icon slider-arrow${props.disabled ? ' disabled' : ''}`}
                {...props}>
                <i className="material-icons">{`keyboard_arrow_${props.direction}`}</i>
        </button>
    );
}

export default SliderArrow;