import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FactCollection from './FactCollection'

class FactsPage extends Component {
    state = {
        facts: []
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Fact Factory</h1>
                </header>
                <SearchBar />
                <FactCollection />
            </div>
        )
    }
}

export default FactsPage;