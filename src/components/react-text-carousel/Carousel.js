import React, {Component, useState} from "react";
import CarouselItem from "./components/CarouselItem";
import Slide from "react-reveal/Slide";
import makeCarousel from 'react-reveal/makeCarousel';
require('./css/carousel.css');

// Props List
// containerStyle
// overwriteStyle - Style Object - {width: blah, backgroundColor: white, etc..}
// rowButtons - [{text: '', iconLeft: ComponentImage, iconRight: Image}, ...]
// rowContent - [{title: '', text: '', subTitle: ''}, ...]
// hoverColorText - hexadecimal color - default green
// hoverColorBackground - hexadecimal color - default black
// renderText - Custom render function to your own content for each state function _renderItem(index)

export const Carousel = (props) => {
    const createTexts = () => {
        return props.rowContent.map( (item, index) => {
            let key = 'slide' + index;
            return(
                <Slide key={key} bottom>
                    <div className="text-container">
                        <p className="list-title">
                            {item.title}
                        </p>
                        <p className="list-subtitle">
                            {item.title}
                        </p>
                        <div className="break" />
                        <p className="list-text">
                            {item.text}
                        </p>
                    </div>
                </Slide>
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
