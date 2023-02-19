import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { Tooltip } from 'react-tooltip'
import { Tooltip as ChakraTooltip } from "@chakra-ui/react"
import InformationModal from "./InformationModal"
import './Map.css'

export default function Map() {
  const [name,setName] = React.useState('')
  const [isOpen,setIsOpen]  = React.useState(false)
  const [content, setcontent] = React.useState("")
  
  React.useEffect(() => {
    console.log(name)
  },[name])

  const handleClick = (name) => {
    setName(name)
    setIsOpen(true)
  }
  
  const mapWidth = 625;
  const mapHeight = 600;
  <Tooltip>{content}</Tooltip>
  return (
    <div className='map-container'>
      <div className='map'>
      <ComposableMap
        width={mapWidth}
        height={mapHeight}
        projection="geoMercator"
        projectionConfig={{
          center: [0.75, 0],
          scale: 100,
        }}
      >
      <ZoomableGroup zoom = {1} center={[0, 0]} translateExtent={[[0, 0],[mapWidth, mapHeight]]}	>
        <Geographies geography = "/countries-110m.json" cursor='pointer' >
          {({ geographies }) =>
            geographies.map((geo,idx) => {

              return (
              <ChakraTooltip label={geo.properties.name} key={idx}>
              <Geography 
              key = {geo.rsmKey} 
              geography = {geo}
              onMouseEnter={() => {
                setcontent(`${geo.properties.name}`)
              }}
              onMouseLeave={() => {
                setcontent("");
              }}
              fill = "#FFFFFF"
              stroke="#000000"
              color='#000000'
              style = {{
                default: {
                  fill: '#FFFFFF',
                  outline: "none",
                },
                hover: {
                  fill: "#66a3ff",
                  outline: "none",
                },
                pressed: {
                  fill: "#0066ff",
                  outline: "none"
                },

              }}
              onClick={() => handleClick(geo.properties.name,)}
              onMouseOver={() => console.log(name)}
              />
              </ChakraTooltip>
              )
            }
              
            )
          }
        </Geographies> 
      </ZoomableGroup>
    </ComposableMap>
    <InformationModal isOpen={isOpen} handleClose={() => setIsOpen(false)} country={name}/>
    </div>
  </div>
    
  )
}
