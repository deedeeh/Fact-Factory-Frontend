import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Card } from 'semantic-ui-react'

const CategoryCollection = ({categories, catNum, factNum}) => {


    return (
       
       
       <Card.Group itemsPerRow={4}>
           {categories.map(category => {
               return <CategoryCard key={category.id} category={category} catNum={catNum} factNum={factNum} />
           })}
       </Card.Group>
       
      
    )
}

export default CategoryCollection;
