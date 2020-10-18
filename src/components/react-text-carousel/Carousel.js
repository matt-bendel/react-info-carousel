import React from "react";
import CarouselItem from "./components/CarouselItem";
import Fade from "react-reveal/Fade";
import makeCarousel from 'react-reveal/makeCarousel';
require('./css/carousel.css');

export const Carousel = (props) => {
    const createTexts = () => {
        let buttonsTop = props.buttonPosition === 'top';

        if (props.renderItem) {
            return props.rowButtons.map((item, index) => {
                let key = 'Fade' + index;

                return (
                    <Fade key={key} bottom={!buttonsTop} right={buttonsTop}>
                        {props.renderItem(index)}
                    </Fade>
                );
            })
        }

        return props.rowContent.map( (item, index) => {
            let key = 'Fade' + index;

            return(
                <Fade key={key} bottom={!buttonsTop} right={buttonsTop}>
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
                    position={props.buttonPosition}
                />
            );
        });

        return (
            <ul className="list" style={props.buttonPosition === 'top' ? {flexDirection: 'row'} : {}}>
                {buttons}
            </ul>
        );
    }

    const CarouselUI = ({children, position, handleClick}) => {
        let topWidth = 150 * props.rowButtons.length;
        return (
            <div className="root" style={props.customStyles ? props.customStyles : {}}>
                <div className="container" style={props.buttonPosition === 'top' ? {flexDirection: 'column', width: topWidth} : {width: topWidth}}>
                    {createButtons(handleClick, position)}
                    <div className="full-text" style={{minHeight: props.minHeight}}>
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
