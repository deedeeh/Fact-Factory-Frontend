import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    render(){
        const {handleChange} = this.props
        return (
            <Input onChange={(e) => handleChange(e)} focus placeholder='Search...' />
        )
    }

}

export default SearchBar;