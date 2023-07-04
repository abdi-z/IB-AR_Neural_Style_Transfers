import React from 'react'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
const H2 = () => {
  return (
    <div>
        <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Welcome to ART
          <Text as={'span'} color={'pink.400'}>
          ficial.
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        Join the ARTficial community today and unlock a world of possibilities. Whether you're an individual, professional, or organization, our platform caters to your unique needs, helping you thrive in an interconnected and ever-changing landscape. Start your journey with us and experience the power of connection, inspiration, and growth.
        </Text>
        <Stack spacing={6} direction={'row'}>
        <Link to="/allartworks">

          <Button
            rounded={'full'}
            px={6}
            colorScheme={'pink'}
            bg={'pink.400'}
            size={'lg'}
            _hover={{ bg: 'pink.300' }}>
            Get started
          </Button>
              </Link>
        
        </Stack>
        <Flex w={'full'}>
          
        </Flex>
      </Stack>
    </Container>
    </div>
  )
}

export default H2