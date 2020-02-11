import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
background: white;
border: 1px solid black;
width: 40%;
margin: 10px;
padding: 10px 0;
`
const Avatar = styled.img`
width: 30%;
`
const Button = styled.a`
text-decoration: none;
color: black;
border: 2px solid black;
background: grey;
padding: 2px 10px;
cursor: pointer;
&:hover{
    background: #333333;
}
`

class Card extends Component {

    render() {
        const { login, html_url, avatar_url } = this.props.people;
        return(
            <Div> 
                <Avatar src={avatar_url}/>
                <div>
                    <h3>name: {login}</h3>
                    
                    <Button href={html_url}>{html_url}</Button>
                </div>
                
               
            </Div>
        )
    }
}

export default Card;