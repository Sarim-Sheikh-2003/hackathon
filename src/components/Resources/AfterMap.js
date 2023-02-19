import React from 'react'
import './afterMap.css'
import ResourcesModal from './ResourcesModal'

export default function AfterMap() {
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [isOpen,setIsOpen] = React.useState(false)

  return (
    <>
      <a cursor='pointer' onClick={() => setIsOpen(true)}>Want to help or something or click on this or something</a>
      <ResourcesModal isOpen={isOpen} handleClose={() => setIsOpen(false)}/>
  
    </>
    

  )
}