import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export class Key extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    state = {
        isClicked: false
    };

    handlePressDown = () => {
        this.setState({ isClicked: true });
        setTimeout(() => {
            this.setState({ isClicked: false });
        }, 200);
    };

    render() {
        const { value, onClick } = this.props;
        const { isClicked } = this.state;

        const btnClass = classNames({
            'key': true,
            'clicked': isClicked
        });

        return (
            <button
                className={btnClass}
                value={value}
                onMouseDown={this.handlePressDown}
                onTouchStart={this.handlePressDown}
                onClick={onClick}>
                {value}
            </button>
        )
    }
}
