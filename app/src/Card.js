import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
width: 40%;
margin: 30px 0;
`

const Avatar = styled.img`
width: 30%;
`

class Card extends Component {

    render() {
        const { login, html_url, avatar_url } = this.props.people;
        return(
            <Div> 
                <Avatar src={avatar_url}/>
                <div>
                    <h3>name: {login}</h3>
                    
                    <a href={html_url}>{html_url}</a>
                </div>
                
               
            </Div>
        )
    }
}

export default Card;