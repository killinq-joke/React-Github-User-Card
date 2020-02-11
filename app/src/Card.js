import React, { Component } from 'react';

class Card extends Component {

    render() {
        return(
            <div>
                <p>{this.props.name}</p>
                <img src={this.props.img}/>
            </div>
        )
    }
}

export default Card;