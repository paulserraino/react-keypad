import React, { Component, PropTypes } from 'react';

export class EnterKey extends Component {
    static propTypes = {
        onEnter: PropTypes.func.isRequired,
    };
    render() {
        const { onEnter } = this.props;
        return (
            <button
                className="key key-control key-enter"
                onClick={onEnter}
                onTouchDown={onEnter}>
                enter
            </button>
        );
    }
}

export class DeleteKey extends Component {
    static propTypes = {
        onDelete: PropTypes.func.isRequired,
    };

    render() {
        const { onDelete } = this.props;
        return (
            <button
                className="key key-control key-delete"
                onClick={onDelete}
                onTouchDown={onDelete}>
                del
            </button>
        );
    }
}
