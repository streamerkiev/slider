import React from 'react';

function Bullets(props) {
    return (
        <div className="bullets-wrapper">
            <div className="bullets">
                {props.slides.map(slide =>
                    <div key={slide.id}
                         className={`bullet${slide.id === props.activeSlide ? ' active' : ''}`}
                         onClick={() => props.onClick(slide.id)}>&nbsp;</div>
                )}
            </div>
        </div>
    );
}

export default Bullets;