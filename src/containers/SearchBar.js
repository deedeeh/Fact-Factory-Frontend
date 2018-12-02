import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    render(){
        return (
            <Input onChange={(e) => console.log(e.target.value)} focus placeholder='Search...' />
        )
    }

}

export default SearchBar;