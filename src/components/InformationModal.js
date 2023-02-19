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

import formattedData from './Data'

export default function InformationModal({ isOpen, country, handleClose }) {
  const [data,setData] = React.useState(formattedData)


  React.useEffect(()=>{
    const countryData = data.find(obj => obj.Name === country)
    console.log(countryData)
  },[isOpen])
  

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size='lg'>
        <ModalOverlay>
          <ModalContent >
            <ModalHeader display='flex' flexDirection='column' fontSize={15} padding={3}>{country}</ModalHeader>
            <Box pl={3} pr={3}>
              <Divider />
              <ModalCloseButton />
              <ModalBody display='flex' flexDirection='column' padding='10px 10px'>
                
              </ModalBody>
            </Box>

            <ModalFooter bg='gray.100' borderRadius='0px 0px 10px 10px'>
              <Text>Credit to Sarim</Text>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
