import React from 'react'
import axios from 'axios'
import formattedData from './Data'

export default function ApiData() {
    const [data,setData] = React.useState(formattedData)
    
    

  return (
    <div>
      {data.map((item, idx) => 
      (
      <div key = {idx}>
        <p>Name: {item.Name}</p>
        <p>Water: {item.Water}</p>
        <p>Food: {item.Food}</p>
        <p>Poverty: {item.Poverty}</p>
        <p>Education: {item.Education}</p>
      </div>
      )
      )}
    </div>
  )
}
