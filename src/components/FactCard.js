import React from 'react'
import { Card } from 'semantic-ui-react'

const FactCard = ({ fact }) => {
    return (
        <Card className='fact-card' content={fact.content}   />
    )
}

export default FactCard;