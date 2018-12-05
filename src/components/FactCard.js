import React from 'react';
import { Card, Icon } from 'semantic-ui-react';



const FactCard = ({ fact,handleClick, categories }) => {
    const getCategoryName = () => {
       let cat = categories.find(cat => cat.id === fact.category_id)
       return cat.name
    }

    let extra = (
        <a onClick={() => handleClick(fact)}>
          <Icon name='heart outline' />
          {fact.likes}
        </a>
      )

    let filledExtra = (
       <a onClick={() => handleClick(fact)}>
          <Icon name='heart' />
          {fact.likes}
        </a> 
    )
    extra = fact.liked? filledExtra : extra
    return (
        

        <Card 
            header={getCategoryName()}
            description={fact.content}
            extra={extra}
        />
      
       
    )
}

export default FactCard;