import { useState } from "react";
import React from 'react'
import formattedData from "../Data";
import './Searchbar.css'

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const [comparisonCountry,setComparisonCountry] = React.useState('')

  const onCompleteSearch = (event,searchTerm) => {
    event.stopPropagation()
    setComparisonCountry(searchTerm)
    setSearchValue(searchTerm)
  };
  
  const onChange = (event) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {
    const test = formattedData.find(item => item.Name.toLowerCase() === searchValue.toLowerCase())
    if(test){
        setComparisonCountry(test.Name)
    }
  },[searchValue])

    return (
        <div>
            <div className="search-container">
                <p>Search</p>
                <p>First Country {comparisonCountry}</p>
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
        </div>
    );
}
