import React from 'react'
import { useState } from 'react'
import BarChart from "./BarChart"
import Searchbar from './Searchbar';
import { UserData } from "./Test"
import './ChartComponent.css'
import formattedData from '../Data';


export default function ChartComponent() {
  const [firstCountry,setFirstCountry] = React.useState()
  const [secondCountry,setSecondCountry] = React.useState()
  const [userData,setUserData] = React.useState({labels:[],datasets:[]})

  const userLabels = formattedData
    .filter(item => item.Name === firstCountry || item.Name === secondCountry)
    .map(item => item.Name)

  const firstIndex = formattedData.findIndex(item => item.Name === userLabels[0])
  const secondIndex = formattedData.findIndex(item => item.Name === userLabels[1])
  console.log(firstIndex,secondIndex)
  const firstData = formattedData[firstIndex]
  const secondData = formattedData[secondIndex]
  console.log(firstData,secondData)

    React.useEffect(() => {
      if (!firstData || !secondData) return
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