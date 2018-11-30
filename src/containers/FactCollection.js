import React, { Fragment} from 'react'
import FactCard from '../components/FactCard'
import {Grid, Card} from 'semantic-ui-react'

const FactCollection = (props) => {


    return (
       
       
        <Grid>
            <Grid.Row columns={4}>
                <Grid.Column>
                <FactCard />
                </Grid.Column>
            </Grid.Row>
        </Grid>
       
      
    )
}

export default FactCollection;
