import React from 'react'
import {Card} from 'semantic-ui-react'

const CategoryCard = ({category, catNum, factNum}) => {

    let display = category.id !== catNum? category.img_url : null
    let content = category.id === catNum? category.facts[factNum].content : null
    

    return (
        <Card color='teal' image={display} content={content}   />
    )

}

export default CategoryCard;