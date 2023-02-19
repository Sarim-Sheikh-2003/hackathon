import React from 'react'
import './afterMap.css'

export default function AfterMap() {
    const [selectedCategory,setSelectedCategory] = React.useState('')

    const handleButtonClicked = (category) => {
        if(selectedCategory === category){
            setSelectedCategory('')
            return
        }
        setSelectedCategory(category)
    }

  return (
    <>
    <div className='filter-container'>
        <p className='filter-title'>Filter by category:</p>
        <div classname='selected-category'>{`Selected Category: ${selectedCategory}`}</div>
        <button 
            type="button" 
            className='filter-button'
            onClick={() => handleButtonClicked('Water')}
        >Water</button>
        <button 
            type="button" 
            className='filter-button'
            onClick={() => handleButtonClicked('Food')}
        >Food</button>
        <button 
            type="button" 
            className='filter-button'
            onClick={() => handleButtonClicked('Poverty')}
        >Poverty</button>
        <button 
            type="button" 
            className='filter-button'
            onClick={() => handleButtonClicked('Education')}
        >Education</button>
        <button 
            type="button" 
            className='filter-button'
            onClick={() => handleButtonClicked('Electricity')}
        >Electricity</button>
    </div>
    <div className='description-container'>
        <p></p>
    </div>
    </>
    

  )
}