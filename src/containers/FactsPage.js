import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Api from '../API'
import FactCollection from './FactCollection'

class FactsPage extends Component {
    state = {
        categories: [],
        catNum: 0,
        factNum: 0
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/categories')
        .then(res => res.json())
        .then(res => this.setState({
            categories: [...res]
        })
        )
        setInterval(() => { 
            let rand = Math.round(Math.random()*(this.state.categories.length - 1));
            this.setState({
                catNum: rand
            })
         }, 5000)
         setInterval(() => { 
            let rand = Math.round(Math.random()*(this.state.categories.length - 1));
            this.setState({
                factNum: rand
            })
         }, 5000)
        

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
                
                <FactCollection categories={this.state.categories}
                 catNum={this.state.catNum}
                 factNum={this.state.factNum}  />
            </div>
        )
    }
}

export default FactsPage;