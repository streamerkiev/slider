import React from 'react';

function Slide(props) {
    let className = 'slide animation-' + props.animationStyle + (props.active ? ' active' : '');

    return(
        <div className={className}>
            <img src={props.slide.img.src} alt={props.slide.img.alt}/>
        </div>
    );
}

export default Slide;