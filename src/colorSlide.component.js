import React, { Component } from 'react';

export class ColorSlide extends Component {

    style = {
        backgroundColor: this.props.color,
        width: "100%",
        height: "100%",
       
    }

    render() {
        return (
            <div style={this.style}></div>
        );
    }
}