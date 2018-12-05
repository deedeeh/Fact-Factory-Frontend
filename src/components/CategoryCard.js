import React from 'react'
import {Card} from 'semantic-ui-react'

const CategoryCard = ({category, catNum, factNum}) => {

    let display = category.id !== catNum? category.img_url : null
    let content = category.id === catNum? category.facts[factNum].content : null
    
{/* <Card color='teal' image={display} content={content}   /> */}
    return (
        <div className="card flip_card">
            <div className='flip_card_inner'>
                <div className="image_wrapper flip_card_front">
                    <img src={display}/>
                    <div className='category_text'>
                        {display ? category.name : null}
                    </div>
                </div>
                <div className="descripton_wrapper flip_card_back">
                    <h1 className='card_text'>{content}</h1>
                </div>
            </div>
        </div>
    )

}

export default CategoryCard;