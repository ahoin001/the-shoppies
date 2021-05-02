import { Box,Heading } from '@chakra-ui/layout'
import React from 'react'

export default function Movie({movie}) {
    return (
        <Box p="6" m="4" boxShadow="xl">
            <Heading size="xl">{movie.Title}</Heading>
            <Heading size="md">{movie.Year}</Heading>
        </Box>
    )
}
