import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from "../navbar"
import dynamic from 'next/dynamic'
import VoxelCwnLoader from '../../libs/voxel-cwn-loader'

const LazyVoxelCwn = dynamic(() => import('../../libs/voxel-cwn'), {
    ssr: false,
    loading: () => <VoxelCwnLoader />
  })

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>CodeWithNefaden Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={15}>
                <LazyVoxelCwn />
                {children}
            </Container>
        </Box>
    )
}

export default Main