import React, {useState, Component, useEffect} from 'react';
import './SliderAnimation.css'

import left_arrow from '../files/left_arrow.png'
import right_arrow from '../files/right_arrow.png'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '20vw',
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles ={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '3rem',
        fonsize: '3vw',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles ={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '3rem',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
        textAlign: 'right'
    }

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        top: '90%',
        position: 'relative',
    };

    const dotStyles = {
        margin: '0 1rem',
        cursor: 'pointer',
        fontSize: '1vw',
        color: '#fff',
        animation: 'slide',
        duration: 0.2
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const goToNext =() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div style={sliderStyles}>

            <div className='slider-wrapper' style={leftArrowStyles}> 
                <img src={left_arrow} 
                object-fit='contain' 
                height='20%' 
                width='20%'
                onClick={goToPrevious}
                /> 
            </div>

            <div style={rightArrowStyles}> 
                <img src={right_arrow} 
                object-fit='contain' 
                height='20%' 
                width='20%'
                onClick={goToNext}
                /> 
            </div>

            <div style={slideStyles}>

            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} 
                        style={dotStyles} 
                        onClick={() => goToSlide(slideIndex)
                    }>
                        ◯
                    </div>
                ))}
            </div>

            </div>

        </div>
    );
};

export default ImageSlider;