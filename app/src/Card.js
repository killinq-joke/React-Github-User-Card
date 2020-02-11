import React, { Component } from 'react';

class Card extends Component {

    render() {
        const { login } = this.props.people;
        return(
            <div>
                <div>
                    <h3>name: {login}</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                    <a href={this.props.url}>{this.props.url}</a>
                </div>
                
                <img src={this.props.img}/>
            </div>
        )
    }
}

export default Card;