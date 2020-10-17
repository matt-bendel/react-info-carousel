import React, {Component} from "react";
require('../css/carousel.css');

class CarouselItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
        }
    }

    handleClick = () => {
        this.props.onClick(this.state.index)
    }

    render() {
        return (
            <li onClick={this.handleClick} className={this.props.active ? "list-button active" : "list-button"}>
                <a className="list-link">{this.props.title}</a>
            </li>
        );
    }
}

export default CarouselItem;
