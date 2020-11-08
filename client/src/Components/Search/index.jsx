import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons'

import './search.css';

class Search extends Component {
    render() {
        return (
            <div className="wrap">
   <            div className="search">
                    <input type="text" className="searchTerm" placeholder="Search" />
                    <button type="submit" className="searchButton">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Search;