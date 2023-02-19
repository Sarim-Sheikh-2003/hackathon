import React from 'react'
import {
  Modal,
  Flex,
  Stack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Divider,
  Text,
} from '@chakra-ui/react'

import formattedData from '../Data'

export default function InformationModal({ isOpen, country, handleClose }) {
  const [data,setData] = React.useState(formattedData)
  const [countryData,setCountryData] = React.useState({})


  React.useEffect(()=>{
    const countryData = data.find(obj => obj.Name === country)
    setCountryData(countryData)
  },[isOpen])
  

  return (
    <>
        <Modal isOpen={isOpen} onClose={handleClose} size='3xl'>
          <ModalOverlay>
            <ModalContent >
              <ModalHeader 
              
                fontFamily='Rubik' 
                display='flex' 
                flexDirection='column' 
                fontSize='30px' 
                padding={3}
                bgGradient='gradient(#e7feff, white)'
              >
                <Text bgClip='text' bgGradient='radial(#2ECFBF,#AECF55)'>{country}</Text>
              </ModalHeader>
              <Box pl={3} pr={3}>
                <Divider />
                <ModalCloseButton />
                <ModalBody display='flex' flexDirection='column' padding='5px 5px' width='100%'>
                  {countryData && 
                  (
                  <Flex marginTop={3} marginBottom={15} fontSize="15px" fontFamily='Rubik'>
                    <Text>
                      {`Percent of Population without Access to Food: 
                      ${countryData.Food === 'Data Not Available' ? 'Data Not Available' : Math.round(countryData.Food)}`}
                    </Text>
                    <Text mr={2}>{countryData.Food === 'Data Not Available' ? '' : '%'}</Text>
                    <Text fontWeight={700}>{`(${countryData.FoodYear})`}</Text>
                  </Flex>
                  )}
                  {countryData &&   
                  (
                  <Flex fontSize="15px" fontFamily='Rubik' marginBottom={15}>
                    <Text>
                      {`Percent of Population with Access to Drinking Water: 
                      ${countryData.Water === 'Data Not Available' ? 'Data Not Available' : Math.round(countryData.Water)}`}
                    </Text>
                    <Text mr={2}>{countryData.Water === 'Data Not Available' ? '' : '%'}</Text>
                    <Text fontWeight={700}>{`(${countryData.WaterYear})`}</Text>
                  </Flex>
                  )}
                  {countryData && 
                  (
                  <Flex  marginBottom={15} fontSize="15px" fontFamily='Rubik'>
                    <Text>
                      {`Percent of Population in Poverty:
                      ${countryData.Poverty === 'Data Not Available' ? 'Data Not Available' : Math.round(countryData.Poverty)}`}
                    </Text>
                    <Text mr={2}>{countryData.Poverty === 'Data Not Available' ? '' : '%'}</Text>
                    <Text fontWeight={700}>{`(${countryData.PovertyYear})`}</Text>
                  </Flex>
                  )}
                  {countryData && 
                  (
                  <Flex marginBottom={15} fontSize="15px" fontFamily='Rubik'>
                    <Text>
                      {`Percent of Population without Access to Education: 
                      ${countryData.Education === 'Data Not Available' ? 'Data Not Available' : Math.round(countryData.Education)}`}
                    </Text>
                    <Text mr={2}>{countryData.Education === 'Data Not Available' ? '' : '%'}</Text>
                    <Text fontWeight={700}>{`(${countryData.EducationYear})`}</Text>
                  </Flex>
                  )}
                  {countryData && 
                  (
                  <Flex marginBottom={15} fontSize="15px" fontFamily='Rubik'>
                    <Text>
                      {`Percent of Population with Access to Electricity:
                      ${countryData.Electricity === 'Data Not Available' ? 'Data Not Available' : Math.round(countryData.Electricity)}`}
                    </Text>
                    <Text mr={2}>{countryData.Electricity === 'Data Not Available' ? '' : '%'}</Text>
                    <Text fontWeight={700}>{`(${countryData.ElectricityYear})`}</Text>
                  </Flex>
                  )}
                </ModalBody>
              </Box>

              <ModalFooter bg='white' borderRadius='0px 0px 10px 10px'>
                <Text fontFamily='Rubik' fontSize="15px" textAlign={'center'}><a href="https://www.worldbank.org/en/home" target="_blank">Credit to World Bank</a></Text>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
      </Modal>
    </>
  )
}
