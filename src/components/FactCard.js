import React from 'react'
import { Card, Icon } from 'semantic-ui-react'



const FactCard = ({ fact }) => {
    const extra = (
        <a>
          <Icon name='heart outline' />
          {fact.likes}
        </a>
      )
    
    return (
        
        <Card 
            header='Fact'
            description={fact.content}
            extra={extra}
        />
      
       
    )
}

export default FactCard;