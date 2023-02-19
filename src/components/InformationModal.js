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

export default function InformationModal({ isOpen, country, handleClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size='lg'>
        <ModalOverlay>
          <ModalContent maxW='56rem'>
            <ModalHeader display='flex' flexDirection='column' fontSize={15} padding={3}>{country}</ModalHeader>
            <Box pl={3} pr={3}>
              <Divider />
              <ModalCloseButton />
              <ModalBody display='flex' flexDirection='column' padding='10px 10px'>
                <Text fontWeight={600} fontSize={15}>{country}</Text>
                <Text fontSize={11} color='gray.500'>
                  aaaa
                </Text>
                <Text fontSize='9pt' color='red' pt={1}>hi</Text>
                <Box mt={4} mb={4}>
                  <Text fontWeight={600} fontSize={15}>aaa</Text>
                  <Stack spacing={2}>
                    <Flex align='center'>
                      <Text fontSize='10pt' mr={1}>Public</Text>
                      <Text fontSize='8pt' color='gray.500' >aaaa</Text>
                    </Flex>
                  </Stack>
                </Box>



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
