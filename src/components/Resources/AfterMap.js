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
    <h2 className='resource-title'>Resources:</h2>   
      <div className='resource-container'>
        <div className="resource-subtitle">
          <div>Poverty</div>
          <a href='https://www.un.org/en/global-issues/ending-poverty' target="_blank" className="all-resources">UN - Ending Poverty </a>
          </div>
          <div>
          <a href='https://sdgs.un.org/topics/poverty-eradication' target="_blank" className="all=resources">UN - Poverty Eradication</a>
          </div>      

        <div className="resource-subtitle">
          <div>Education</div>
          <a href='https://www.un.org/en/global-issues/ending-poverty' target="_blank" className="all-resources">UN - Ending Poverty </a>
          </div>
          <div>         
          <a href='' target="_blank"></a>
          </div>
          
        <div className="resource-subtitle">
          <div>Food Shortage</div>
          <a href='https://www.un.org/en/global-issues/ending-poverty' target="_blank" className="all-resources">UN - Ending Poverty </a>
          </div>
          <div>
          <a href='' target="_blank"></a>
        </div>

        <div className="resource-subtitle">
          <div>Water Shortage</div>
          <a href='https://www.un.org/en/global-issues/ending-poverty' target="_blank" className="all-resources">UN - Ending Poverty </a>
          </div>
          <div>
          <a href='' target="_blank"></a>
          </div> 

        <div className="resource-subtitle">
          <div>Electricity</div>
          <a href='https://www.un.org/en/global-issues/ending-poverty' target="_blank" className="all-resources">UN - Ending Poverty </a>
          </div>
          <div>
          <a href='' target="_blank"></a> 
        </div>
        
    </div>
    </>
    

  )
}