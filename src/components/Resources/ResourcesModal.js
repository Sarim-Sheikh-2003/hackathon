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

import './afterMap.css'

export default function ResourcesModal({ isOpen, country, handleClose }) {

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose} size='4xl' >
                <ModalOverlay>
                    <ModalContent >
                        <ModalHeader
                            fontFamily='Rubik'
                            display='flex'
                            flexDirection='column'
                            fontSize='30px'
                            bgGradient='gradient(#e7feff, white)'
                            pb={0}
                            pt={0}
                        >
                            <h2 className='resource-title'>Resources</h2>
                        </ModalHeader>
                        <Box pl={3} pr={3}>
                            <Divider />
                            <ModalCloseButton />
                            <ModalBody width='100%' height='300px' pl={0} pr={0}>
                                <div className='resource-container'>
                                    <div>
                                        <div className='resource-subtitle'>Poverty</div>
                                        <a href='https://www.un.org/en/global-issues/ending-poverty' target="_blank" className="all-resources">UN - Ending Poverty </a>
                                        <div>
                                            <a href='https://sdgs.un.org/topics/poverty-eradication' target="_blank" className="all-resources">Poverty Eradication</a>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='resource-subtitle'>Education</div>
                                        <a href='https://www.worldbank.org/en/topic/education/overview' target="_blank" className="all-resources">World Bank - Education </a>
                                        <div>
                                            <a href='https://www.unicef.org/education' target="_blank" className="all-resources">Unicef - Education</a>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='resource-subtitle'>Food Shortage</div>
                                        <a href='https://www.worldbank.org/en/topic/agriculture/brief/food-security-update' target="_blank" className="all-resources">World Bank Food Security Update </a>
                                        <div>
                                            <a href='https://foodbankscanada.ca/' target="_blank" className="all-resources">Food Banks Canada</a>
                                        </div>
                                        <a href='https://www.foodbanking.org/' target="_blank" className="all-resources">The Global Food Banking Network</a>
                                        <div>
                                            <a href='https://nationaltoday.com/world-hunger-day/' target="_blank" className="all-resources">World Hunger Day</a>
                                        </div>
                                    </div>


                                    <div>
                                        <div className='resource-subtitle'>Water Shortage</div>
                                        <a href='https://www.unwater.org/water-facts/water-scarcity' target="_blank" className="all-resources">UN - Water Scarcity </a>
                                        <div>
                                            <a href='https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/environmental_protection-protection_environnement/water-eau.aspx?lang=eng' target="_blank" className="all-resources">Water in developing countries</a>
                                            <div>
                                                <a href='https://www.worldbank.org/en/topic/water/overview' target="_blank" className="all-resources">Worldbank - Water</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='resource-subtitle'>Electricity</div>
                                        <a href='https://www.worldbank.org/en/news/video/2020/09/22/electricity-availability-and-economic-activity-lessons-from-developing-countries#:~:text=Electricity%20Availability%20and%20Economic%20Activity%3A%20Lessons%20from%20Developing,the%20power%20supply%20is%20limited%20and%20highly%20unreliable' target="_blank" className="all-resources">Worldbank - Electricity Availability</a>
                                        <div>
                                            <a href='https://ourworldindata.org/energy-access' target="_blank" className="all-resources">Energy Access</a>
                                            <div>
                                                <a href='https://www.weforum.org/agenda/2019/01/energizing-the-world-how-electrification-will-drive-inclusion/' target="_blank" className="all-resources">How electrification will make the world more inclusive</a>
                                                <div>
                                                    <a href="https://www.weforum.org/impact/clean-energy-in-emerging-markets/" target="_blank" className="all-resources">Clean Energy in Emerging Markets</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </Box>
                        <ModalFooter bg='white' borderRadius='0px 0px 10px 10px'>
                            <Text fontFamily='Rubik' fontSize="10px" textAlign={'center'}><a href="https://www.worldbank.org/en/home" target="_blank">Credit to World Bank</a></Text>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}
