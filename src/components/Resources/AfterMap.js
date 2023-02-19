import React from 'react'
import './afterMap.css'
import ResourcesModal from './ResourcesModal'

export default function AfterMap() {
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [isOpen,setIsOpen] = React.useState(false)

  return (
    <>
      <div className='recources'> 
        <p>
          After reviewing the information presented, if you are interested in extending assistance to these countries in need, click
          <a className='link' onClick={() => setIsOpen(true)}> here.</a>
          <ResourcesModal isOpen={isOpen} handleClose={() => setIsOpen(false)}/>
        </p>
      </div>
      <div className='footer'>
        Developed by:  Haziq Khawaja, Saksham Puri, Sarim Sheikh, Umar Ahmed, Umesh Oad
      </div>
    </>
  )
}