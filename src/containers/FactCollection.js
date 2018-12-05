import React from 'react'
import FactCard from '../components/FactCard'
import { Card, Image } from 'semantic-ui-react'

const FactCollection = ({ filteredFacts, handleClick, categories }) => {
    let error = "http://give.kureit.org/assets/404.png"
    let num = filteredFacts.length

    return (
       <>
       { !!num ?  
       <Card.Group itemsPerRow={6}>
           {filteredFacts.map(fact => {
               return <FactCard key={fact.id} fact={fact} handleClick={handleClick} categories={categories} />
           })}
       </Card.Group> :
       <Image src={error} fluid />
    }
    </>
      
    )
}

export default FactCollection;