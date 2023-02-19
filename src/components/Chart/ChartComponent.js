import React from 'react'
import { useState } from 'react'
import BarChart from "./BarChart"
import Searchbar from './Searchbar';
import './ChartComponent.css'
import formattedData from '../Data';


export default function ChartComponent() {
  const [firstCountry,setFirstCountry] = React.useState()
  const [secondCountry,setSecondCountry] = React.useState()
  const [userData,setUserData] = React.useState({labels:[],datasets:[]})

    React.useEffect(() => {
      if (!firstCountry || !secondCountry) return
      let userLabels = formattedData
        .filter(item => item.Name === firstCountry)
        .map(item => item.Name)

      let item2 = formattedData
      .filter(item => item.Name === secondCountry)
      .map(item => item.Name)

      userLabels = [...userLabels,...item2]
      console.log('labels0',userLabels[0])
      console.log('labels1',userLabels[1])
      const firstIndex = formattedData.findIndex(item => item.Name === userLabels[0])
      const secondIndex = formattedData.findIndex(item => item.Name === userLabels[1])
      const firstData = formattedData[firstIndex]
      const secondData = formattedData[secondIndex]
      setUserData({
        labels: [`Food Insecurity - ${firstCountry}`,`Food Insecurity - ${secondCountry}`,
        `Water Access - ${firstCountry}`,`Water Access - ${secondCountry}`,
        `Education Unavailability - ${firstCountry}`, `Education Unavailability - ${secondCountry}`,
        `Poverty - ${firstCountry}`, `Poverty- ${secondCountry}`,
        `Access to Electricity - ${firstCountry}`, `Access to Electricity - ${secondCountry}`,
                                                        
      ],
        datasets: [
            {
                label: `Comparison of ${firstCountry} and ${secondCountry}`,
                data: [
                      firstData.Food,
                      secondData.Food,
                      firstData.Water,
                      secondData.Water,
                      firstData.Education,
                      secondData.Education,
                      firstData.Poverty,
                      secondData.Poverty,
                      firstData.Electricity,
                      secondData.Electricity,  
                      ],
                backgroundColor: ["#218380", "#d81159"],

            },
        ]
    });
    },[firstCountry,secondCountry])
    
    return (
      <>
        <div className='chart-search-container1'>Chart Comparisons</div>
          <div className='chart-search-container'>
            <Searchbar country={firstCountry} setCountry={setFirstCountry}/>
            <Searchbar country={secondCountry} setCountry={setSecondCountry}/>
          </div>
        
      
        <div className="chart">
            <div className='chart-inner'>
                <BarChart chartData={userData} />
            </div>
        </div>
      </>
      
    )
}