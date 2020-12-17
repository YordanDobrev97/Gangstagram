import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    handler(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.onChange(name, value);
    }

    render() {
        return (
            <input type={this.props.type} className="input-field" name={this.props.name} placeholder={this.props.placeholder} onChange={this.handler.bind(this)}/>
        )
    }
}

export default Input;