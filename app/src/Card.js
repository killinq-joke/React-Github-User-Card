import React, { Component } from 'react';

class Card extends Component {

    render() {
        const { login, html_url, avatar_url } = this.props.people;
        return(
            <div>
                <div>
                    <h3>name: {login}</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                    <a href={html_url}>{html_url}</a>
                </div>
                
                <img src={avatar_url}/>
            </div>
        )
    }
}

export default Card;