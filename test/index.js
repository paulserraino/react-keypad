import test from 'tape';
import React, { Component } from'react';
import { render } from'react-dom';
import { Keypad, Controls } from '../dist';

test('component mounts', (t) => {
    render(<Keypad placeholder="Passcode" onEnter={function(){}} />, document.getElementById('app'));
    t.assert(true, 'component did mount');
    t.end();
});
