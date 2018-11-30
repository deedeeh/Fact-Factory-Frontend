import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Api from '../API'
import FactCollection from './FactCollection'

class FactsPage extends Component {
    state = {
        facts: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/categories')
        .then(res => res.json())
        .then(res => this.setState({
            facts: [...res]
        }))
    }

    render() {
        return (
            <div className="App">
            <Segment>
            <Header as='h3' color='teal' textAlign='center'>
            Fact Factory
            </Header>
            <SearchBar />
            </Segment>
                
                {/* <FactCollection /> */}
            </div>
        )
    }
}

export default FactsPage;