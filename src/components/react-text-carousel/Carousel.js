import React from "react";
import CarouselItem from "./components/CarouselItem";
import Fade from "react-reveal/Fade";
import makeCarousel from 'react-reveal/makeCarousel';
require('./css/carousel.css');

// Props List
// customStyles
// rowButtons - [{text: '', iconLeft: ComponentImage, iconRight: Image}, ...]
// rowContent - [{title: '', text: '', subTitle: ''}, ...]
// renderText - Custom render function to your own content for each state function _renderItem(index)
// customCarousel - custom Carousel render function
// ReactRevealAnimation - maybe

export const Carousel = (props) => {
    const createTexts = () => {
        return props.rowContent.map( (item, index) => {
            let key = 'Fade' + index;
            return(
                <Fade key={key} bottom>
                    <div className="text-container">
                        <p className="list-title">
                            {item.title}
                        </p>
                        <p className="list-subtitle">
                            {item.subTitle}
                        </p>
                        <div className="break" />
                        <p className="list-text">
                            {item.text}
                        </p>
                    </div>
                </Fade>
            );
        });
    }

    const createButtons = (click, position) => {
        const buttons = props.rowButtons.map((item, index) => {
            let key = 'item' + index;
            return (
                <CarouselItem
                    key={key}
                    data-position={index}
                    title={item.text}
                    titleSize={props.buttonFont ? props.buttonFont : 18}
                    icon={item.icon}
                    index={index}
                    active={index === position}
                    onClick={click}
                />
            );
        });

        return (
            <ul className="list">
                {buttons}
            </ul>
        );
    }

    const CarouselUI = ({children, position, handleClick}) => {
        return (
            <div className="root">
                <div className="container" style={{alignSelf: 'center'}}>
                    {createButtons(handleClick, position)}
                    <div className="full-text">
                        {children}
                    </div>
                </div>
            </div>
        )};
    const RevealCarousel = makeCarousel(CarouselUI);

    return (
        <RevealCarousel defaultWait={0}>
            {createTexts()}
        </RevealCarousel>
    );
}
