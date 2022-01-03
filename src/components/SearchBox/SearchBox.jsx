import {useContext} from 'react'
import { InputGroup, FormControl } from "react-bootstrap";
import {FilterContext} from '../context/TodoContext'

const SearchBox = () => {
    const {filter,setFilter}= useContext(FilterContext)
    return (
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Type Todo Name To search"
          aria-label="Type Todo Name To search"
          aria-describedby="basic-addon2"
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
      </InputGroup>
    )
}

export default SearchBox
