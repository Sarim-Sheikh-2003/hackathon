import { useState } from "react";
import React from 'react'
import formattedData from "../Data";
import './Searchbar.css'

export default function Searchbar({country,setCountry}) {
    const [searchValue, setSearchValue] = useState("");

    const onCompleteSearch = (event, searchTerm) => {
        event.stopPropagation()
        setCountry(searchTerm)
        setSearchValue(searchTerm)
    };

    const onChange = (event) => {
        setSearchValue(event.target.value);
    };

    React.useEffect(() => {
        const test = formattedData.find(item => item.Name.toLowerCase() === searchValue.toLowerCase())
        if (test) {
            setCountry(test.Name)
        }
    }, [searchValue])

    return (
        <div className="search-container">
            <p>Country Selected: {country}</p>
            <div>
                <input
                    className="search-bar"
                    placeholder="Enter Country Here"
                    type="text"
                    value={searchValue}
                    onChange={onChange}
                />
            </div>
            <div>
                {formattedData.filter((country) => {
                    const searchTerm = searchValue.toLowerCase();
                    const countryName = country.Name.toLowerCase();

                    return (
                        searchTerm && countryName.startsWith(searchTerm) && countryName !== searchTerm
                    );
                }).slice(0, 10)
                    .map((searchListItem) => (
                        <div
                            className='search-suggestion'
                            onClick={(event) => onCompleteSearch(event, searchListItem.Name)}
                            key={searchListItem.Name}
                        >
                            {searchListItem.Name}
                        </div>
                    ))}
            </div>
        </div>
    );
}
