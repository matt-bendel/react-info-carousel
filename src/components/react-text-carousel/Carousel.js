import React, {Component} from "react";
import CarouselItem from "./components/CarouselItem";

require('./css/carousel.css');

// Props List
// containerStyle
// overwriteStyle - Style Object - {width: blah, backgroundColor: white, etc..}
// rowButtons - [{text: '', icon: ComponentImage}, ...]
// rowContent - [{title: '', text: ''}, ...]
// hoverColorText - hexadecimal color - default green
// hoverColorBackground - hexadecimal color - default black
// renderText - Custom render function to your own content for each state function _renderItem(index)

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            nextIndex: 0,
            currentPos: 0,
        }
    }

    changeText = (index) => {
        console.log(index)
        this.setState({nextIndex: index}, () => setTimeout(() => {
            this.setState({currentIndex: index});
        }, 500));
    }

    createTexts = () => {
        let needsUpdate = this.state.currentIndex !== this.state.nextIndex;

        return this.props.rowContent.map( (item, index) => {
            let classNames = '';
            let isCurrent = index === this.state.currentIndex;
            let isNext = index === this.state.nextIndex;
            let topEnter = this.state.nextIndex < this.state.currentIndex;

            if (needsUpdate && isCurrent) {
                if (topEnter) {
                    classNames += 'exit_bottom ';
                } else {
                    classNames += 'exit_top '
                }
            }

            if (needsUpdate && isNext) {
                if (topEnter) {
                    classNames += 'enter_top ';
                } else {
                    classNames += 'enter_bottom '
                }
            }

            classNames += 'text-container'


            return(
                <div className={classNames} style={this.state.currentIndex === index  || isNext ? {} : {display: 'none'}}>
                    <p className="list-text">
                        {item.title}
                    </p>
                    <div className="break" />
                    <p className="list-text">
                        {item.text}
                    </p>
                </div>
            );
        });
    }

    createButtons = () => {
        const buttons = this.props.rowButtons.map((item, index) => {
            return (<CarouselItem
                title={item.text}
                icon={item.icon}
                index={index}
                active={index === this.state.currentIndex}
                onClick={this.changeText} />
                );
        });

        return (
            <ul className="list">
                {buttons}
            </ul>
        );
    }

    render() {
        return (
            <div className="root">
                <div className="container" style={{alignSelf: 'center'}}>
                    {this.createButtons()}
                    <div className="full-text">
                        {this.createTexts()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
