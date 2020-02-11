import React, { Component } from 'react';
import Card from './Card';

import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-flow: row, wrap;
justify-content: space-evenly;
align-items: center;
height: 100vh;
`

class CardList extends Component {
    
    render() {
        return(
            <Container>
                {this.props.peoples.map(people => {
                    
                    return(
                        <Card key={people.id} people={people}/>
                    )
                })}
            </Container>
        )
    }
}

export default CardList;