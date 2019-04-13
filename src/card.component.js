import React, { Component } from 'react';
import { ColorSlide } from "./colorSlide.component";

export class CardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        }
    }
    containerStyle = {
        width: "180px",
        height: "260px",
        marginLeft: "10px",
        
        position: "relative",
        marginTop: "5px"
    }

    containerBoxShadowHover = {
        boxShadow: "0 0 10px #666",
    }
    containerBoxShadow = {
        boxShadow: "0 0 5px #666",
    }

    cardIdentifier = {
        width: "100%",
        height: "60px",
        backgroundColor: "white",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        
        fontWeight: 600,
        bottom: 0
    }

    toggleHover = () => {
        this.setState({hovered: !this.state.hovered})
    }

    render() {
        
        return (
            <div style={{...this.containerStyle, ...this.state.hovered ? this.containerBoxShadowHover : this.containerBoxShadow }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <ColorSlide color={this.props.color}></ColorSlide>
                <div style={this.cardIdentifier}>{this.props.color}</div>
            </div>
        );
    }
}
