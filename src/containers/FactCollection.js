import React from 'react'
import FactCard from '../components/FactCard'
import { Card } from 'semantic-ui-react'

const FactCollection = ({ filteredFacts, handleClick, categories }) => {


    return (
       
       
       <Card.Group itemsPerRow={6}>
           {filteredFacts.map(fact => {
               return <FactCard key={fact.id} fact={fact} handleClick={handleClick} categories={categories} />
           })}
       </Card.Group>
       
      
    )
}

export default FactCollection;