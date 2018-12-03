import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

class SearchBar extends Component {

    render(){
        const {handleChange} = this.props
        return (
            <Form onSubmit={(e) => handleChange(e)}>
                <Input focus placeholder='Search...' />
                <Button type='submit' color='teal'>Submit</Button>
            </Form>
        )
    }

}

export default SearchBar;