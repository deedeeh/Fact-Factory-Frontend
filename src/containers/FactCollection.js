import React from 'react'
import FactCard from '../components/FactCard'
import { Card } from 'semantic-ui-react'

const FactCollection = ({categories, catNum, factNum}) => {


    return (
       
       
       <Card.Group itemsPerRow={4}>
           {categories.map(category => {
               return <FactCard key={category.id} category={category} catNum={catNum} factNum={factNum} />
           })}
       </Card.Group>
       
      
    )
}

export default FactCollection;
