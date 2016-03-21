import React, { Component, PropTypes } from 'react';
import { KeyGroup } from './KeyGroup';
import { Controls } from './Controls';
import classNames from 'classnames';

export class Keypad extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        onEnter: PropTypes.func.isRequired
    };

    state = {
        value: [],
        isActive: false
    };

    handleClick = (event) => {
        const { value } = event.target;
        this.setState((state) => ({ value: state.value.concat(value) }));
    };

    handleChange = (event) => {
        const { onChange } = this.props;
    };

    handleInputClick = (event) => {
        this.setState({ isActive: true });
    };

    handleDelete = (event) => {
        const { value } = this.state;
        const v = value.slice(0, value.length - 1);
        this.setState({
            value: v
        });
    };

    render() {
        const { placeholder, onEnter, children } = this.props;
        const { value, isActive } = this.state;

        const padClass = classNames({
            'pad': true,
            'active': isActive
        });

        return(
            <div className="react-keypad">
                <input
                    type="text"
                    value={value.join('')}
                    onChange={this.handleChange}
                    onClick={this.handleInputClick}
                    placeholder={placeholder} />
                <div className={padClass}>
                    <div className="keygroups">
                        <KeyGroup keys={['1','2','3']} onClick={this.handleClick} />
                        <KeyGroup keys={['4','5','6']} onClick={this.handleClick} />
                        <KeyGroup keys={['7','8','9']} onClick={this.handleClick} />
                        <KeyGroup keys={['*','0','#']} onClick={this.handleClick} />
                    </div>
                    <Controls onDelete={this.handleDelete} onEnter={onEnter} />
                </div>
                {children}
            </div>
        )
    }
}
