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
        let classNames = this.props.position === 'top' ? "list-button-top" : "list-button";
        classNames += this.props.active ? this.props.position === 'top' ? " active-top" : " active" : '';
        return (
            <li onClick={this.handleClick} data-position={this.state.index} className={classNames}>
                {this.props.icon ?
                    this.props.icon('list-icon-left')
                    :
                    ''
                }
                <a className="list-link" style={this.props.icon ? {} : {marginLeft: 0}}>{this.props.title}</a>
            </li>
        );
    }
}
