import React from 'react'
import CategoryCard from '../components/CategoryCard'

const CategoryCollection = ({categories, catNum, factNum}) => {


    return (
       
       
       <div className="card_list">
           {categories.map(category => {
               return <CategoryCard key={category.id} category={category} catNum={catNum} factNum={factNum} />
           })}
       </div>
       
      
    )
}

export default CategoryCollection;
