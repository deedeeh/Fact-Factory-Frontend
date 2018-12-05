import React from 'react';

const CategoryCard = ({category, catNum, factNum}) => {

    let display = category.id !== catNum? category.img_url : null
    let content = category.id === catNum? category.facts[factNum].content : null

    let fliped = category.id === catNum ? 'fliped' : ''
    
{/* <Card color='teal' image={display} content={content}   /> */}
    return (
        <div className={`card ${fliped}`}>
            <div className="image_wrapper">
                <img src={category.img_url}/>
            </div>
            <div className="descripton_wrapper">
                <h4 className='card_text'>{category.facts[factNum].content}</h4>
            </div>
        </div>
    )

}

export default CategoryCard;