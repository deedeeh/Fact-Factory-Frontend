import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Api from '../API'
import CategoryCollection from './CategoryCollection'
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
        e.preventDefault()
        this.setState({
            searchTerm: e.target.querySelector("input").value
        })
        
        e.target.querySelector("input").value = ''
    }

   

    filterFacts = () => {
        let facts = this.state.facts.filter(fact => fact.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return facts
    }

    // categoriesFromFacts = facts => {
    //     return facts.reduce((cats, fact) => {
    //         if (cats.includes(fact.category_id)) return cats

    //         cats.push(fact.category_id)
    //         return cats
    //     }, [])
    //         .map(cat_id => this.state.categories.find(cat => cat.id === cat_id))
    //         .filter(c => !!c)
    // }

    updateLikes = (fact) => {
        fetch(`http://localhost:3000/api/v1/facts/${fact.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({likes: fact.likes})
        }).then(resp => resp.json())
    }

    handleClick = (likeFact) => {
        let newFacts = [...this.state.facts].map(fact => {
            if(fact.id === likeFact.id && !fact.liked){
                fact.likes +=1
                fact.liked = true
                this.updateLikes(fact)
                return fact
            }
            else {
                return fact
            }
        })
        this.setState({
            facts: newFacts
        })
        
    }

    render() {
        const filteredFacts = this.filterFacts()
        // const categories = this.categoriesFromFacts(filteredFacts)
        // console.log(filteredFacts, categories)
        return (
            <div className="App">
            <div className='main_header'>
                <h1 className='header-text'>Fact Factory</h1>
                <SearchBar style={'padding-right= 2em'} handleChange={this.handleChange} />
            </div>
                {this.state.searchTerm 
                ? <FactCollection filteredFacts={filteredFacts}
                 handleClick={this.handleClick}
                 categories={this.state.categories}
                 />
                : <CategoryCollection categories={this.state.categories}
                 catNum={this.state.catNum}
                 factNum={this.state.factNum}
                  />
                }
            </div>
        )
    }
}

// categoriesFromFacts(filteredFacts)

export default FactsPage;

