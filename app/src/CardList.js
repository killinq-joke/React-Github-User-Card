import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    
    render() {
        return(
            <div>
                {this.props.peoples.map(people => {
                    
                    return(
                        <Card key={people.id} people={people}/>
                    )
                })}
            </div>
        )
    }
}

export default CardList;