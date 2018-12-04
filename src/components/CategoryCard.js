import React from 'react'
import {Card} from 'semantic-ui-react'

const CategoryCard = ({category, catNum, factNum}) => {

    let display = category.id !== catNum? category.img_url : null
    let content = category.id === catNum? category.facts[factNum].content : null
    
{/* <Card color='teal' image={display} content={content}   /> */}
    return (
        <div className="card">
            <div className="image_wrapper">
                <img src={display}/>
            </div>
            <div className="descripton_wrapper">
                <h4 className='card_text'>{content}</h4>
            </div>
        </div>
    )

}

export default CategoryCard;