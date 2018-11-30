import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    render(){
        return (
            <Input focus placeholder='Search...' />
        )
    }

}

export default SearchBar;