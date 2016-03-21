import React, { Component, PropTypes } from 'react';

export class Controls extends Component {
    static propTypes = {
        onDelete: PropTypes.func.isRequired,
        onEnter: PropTypes.func.isRequired
    };
    render() {
        const { onDelete, onEnter } = this.props;

        return (
            <div className="controls">
                <button
                    className="key key-del"
                    onClick={onDelete}
                    onTouchDown={onDelete}>
                    delete
                </button>
                <button
                    className="key key-enter"
                    onClick={onEnter}
                    onTouchDown={onEnter}>
                    enter
                </button>
            </div>
        )
    }
}
