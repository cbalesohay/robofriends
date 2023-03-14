import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="searchBox1">
            <input
            className="searchBox2"
            type="search"
            placeholder="search robots"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;