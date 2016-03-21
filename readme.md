# react-keypad
mobile ready keypad

## Example
```js
import React, { Component } from'react';
import { Keypad } from 'react-keypad';

class App extends Component {
    handleEnter = () => {
        // handle keypad value
    };

    render() {
        return (
            <Keypad onEnter={this.handleEnter} />
        )
    }
}
```

## License
MIT
