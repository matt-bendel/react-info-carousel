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
        }
    }

    changeText = (index) => {
        console.log(index)
        this.setState({currentIndex: index});
    }

    createTexts = () => {
        return this.props.rowContent.map( (item) => {
            return(
                <div className="text-container">
                    <p className="list-text">
                        {item.title}
                    </p>
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
