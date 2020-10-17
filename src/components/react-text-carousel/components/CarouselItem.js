import React, {Component} from "react";
require('../css/carousel.css');

export default class CarouselItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
        }
    }

    handleClick = (e) => {
        this.props.onClick(e);
    }

    render() {
        return (
            <li onClick={this.handleClick} data-position={this.state.index} className={this.props.active ? "list-button active" : "list-button"}>
                {this.props.icon ?
                    this.props.icon('list-icon-left')
                    :
                    ''
                }
                <a className="list-link">{this.props.title}</a>
            </li>
        );
    }
}
