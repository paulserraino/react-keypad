import React, { Component, PropTypes } from 'react';
import { Key } from './Key';

export class KeyGroup extends Component {
    static propTypes = {
        keys: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const { keys, onClick } = this.props;

        const group = keys.map((k, i) => {
            if (!k) {
                <button key={i} className="key">&nbsp;</button>
            }

            if (typeof k === 'object') {
                const { component } = k;
                return (component);
            }

            return (<Key key={i} value={k} onClick={onClick} />);
        });

        return (
            <div className="row">
                {group}
            </div>
        )
    }
}
