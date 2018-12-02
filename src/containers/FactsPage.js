import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Api from '../API'
import FactCollection from './FactCollection'

class FactsPage extends Component {
    state = {
        categories: [],
        facts: [],
        catNum: 0,
        factNum: 0,
        searchTerm: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/categories')
        .then(res => res.json())
        .then(res => this.setState({
            categories: [...res]
        })
        )

        fetch('http://localhost:3000/api/v1/facts')
        .then(res => res.json())
        .then(res => this.setState({
            facts: [...res]
        })
        )

        setInterval(() => { 
            let rand = Math.round(Math.random()*(this.state.categories.length - 1));
            this.setState({
                catNum: rand
            })
         }, 5000)
         setInterval(() => { 
            let rand = Math.round(Math.random()*(this.state.categories.length - 3));
            this.setState({
                factNum: rand
            })
         }, 5000)
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }

    filterFacts = () => {
        if(!this.state.searchTerm){
         
        }
        else {
            return this.state.categories
        }
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