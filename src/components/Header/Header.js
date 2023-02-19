import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div className='header-container'>
        <h1 className="title"> The Basic Needs Atlas</h1> 
        <h1 className="sub-title"> A World Map of Access to Essentials </h1>
        <p className = "description"> Welcome to The Basic Needs Atlas! The purpose of this website is to spread 
        awareness about pressing resource crises that many countries around the world face. Check out the map below and click on a country
        to get information about the percent of its population that has access to food, water, electricity, and education, as well as the percent of 
        its population that is facing poverty.</p> 
    </div>
  )
}
