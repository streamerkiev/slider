import React from 'react';

import Slide from './Slide';
import SliderArrow from './SliderArrow';
import Bullets from './Bullets';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleBulletClick = this.handleBulletClick.bind(this);
    }

    componentDidMount() {
        this.setAutoPlay();
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
    }

    setAutoPlay() {
        if (this.props.config.autoPlay) {
            if (this.interval) {
                clearInterval(this.interval);
            }

            this.interval = setInterval(() => this.autoPlay(), this.props.config.autoPlayInterval);
        }
    }

    autoPlay() {
        let nextSlide = this.isLastSlide() ? 0 : this.state.activeSlide + 1;

        if (!nextSlide && !this.props.config.loop) {
            clearInterval(this.interval);
        } else {
            this.setState({ activeSlide: nextSlide });
        }
    }

    getCaretStyles() {
        let style;

        if (this.props.config.animationType === 'slide') {
            style = {
                width: this.props.slides.length * this.props.config.slideWidth,
                transform: 'translateX(-' + this.state.activeSlide * this.props.config.slideWidth + 'px)',
                transition: 'all' + this.props.config.animationSpeed
            };
        }

        return style;
    }

    isFirstSlide() {
        return this.state.activeSlide === 0;
    }

    isLastSlide() {
        return this.state.activeSlide + 1 === this.props.slides.length;
    }

    handlePrev() {
        if (!this.props.config.loop && !this.isFirstSlide()) {
            this.showPrev();
        } else {
            this.showPrev();
        }
    }

    handleNext() {
        if (!this.props.config.loop && !this.isLastSlide()) {
            this.showNext();
        } else {
            this.showNext();
        }
    }

    showPrev() {
        let prevSlide = this.state.activeSlide - 1;

        this.setState({ activeSlide: prevSlide });
        this.setAutoPlay();
    }

    showNext() {
        let nextSlide = this.state.activeSlide + 1;

        this.setState({ activeSlide: nextSlide });
        this.setAutoPlay();
    }

    handleBulletClick(id) {
        this.setState({ activeSlide: id});
        this.setAutoPlay();
    }

    render() {
        return(
            <div className="slider">
                <SliderArrow direction="left" disabled={this.props.config.loop ? false : this.isFirstSlide()} onClick={this.handlePrev} />

                <div className="viewport">
                    <div className="caret"
                         style={this.getCaretStyles()}>
                        {
                            this.props.slides.map(slide =>
                                <Slide key={slide.id}
                                       active={slide.id === this.state.activeSlide}
                                       slide={slide}
                                       animationStyle={this.props.config.animationType} />)
                        }
                    </div>
                </div>

                <SliderArrow direction="right" disabled={this.props.config.loop ? false : this.isLastSlide()} onClick={this.handleNext} />

                <Bullets slides={this.props.slides}
                         activeSlide={this.state.activeSlide}
                         onClick={this.handleBulletClick} />
            </div>
        );
    }
}

export default Slider;