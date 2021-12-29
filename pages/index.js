import { 
    Container, 
    Box, 
    Heading, 
    useColorModeValue, 
    Image, 
    Divider, 
    Button,
    UnorderedList,
    ListItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Link
} from "@chakra-ui/react"
import NextLink from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Footer from "../components/footer"
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box display={{md: 'flex'}} textAlign="center">
                <Box flexGrow={1}>
                    <Heading variant="page-title">
                        code with <p style={{color:"#8c45f4", display:"inline"}}>nefaden</p>
                    </Heading>
                </Box>
            </Box>
            <br /><br />
            <Box id="bio" borderRadius="lg" p={3} mb ={6} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
                Hello, I&apos;m Yann Durand, AKA Nefaden, a french full-stack developer
                <br /><br />
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image
                        borderColor="#4f5b62"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/me.png"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section id="bio" delay={0.2}>
                <Heading as="h3" variant="section-title">
                    About me
                </Heading>
                <Paragraph>
                Born in Nantes in 1997, I&apos;ve always been a fan of digital and video games. In 2015 after my baccalaureate I decided to go to the university of computer science (without much success) but I continued in this field, to do what I like the most. Today, I&apos;m freelancing and creating on the web (video and blog) to share my passion, my knowledge. I hope you will learn a lot of things here!
                </Paragraph>
            </Section>

            <br />
            <Divider />
            <br />

            <Section id="bio" delay={0.2}>
                <Heading as="h3" variant="section-title">
                    What about Internet ?
                </Heading>
                <Paragraph>
                Find me on Internet, following these links :
                </Paragraph>
                <br/>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>
                                <Link 
                                    href="https://blog.codewithnefaden.com" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                    Blog
                                </Link>
                            </Th>
                            <Th>
                                <Link 
                                    href="https://www.youtube.com/channel/UCQ_FfghiAQPDac9JWg_JYtg" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                    Youtube
                                </Link>
                            </Th>
                            <Th>
                                <Link 
                                    href="https://www.twitch.tv/nefaden" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                    Twitch
                                </Link>
                            </Th>
                            <Th>
                                <Link 
                                    href="https://discord.gg/KtgBuxms8f" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                    Discord
                                </Link>
                            </Th>
                        </Tr>
                    </Thead>
                </Table>
            </Section>
            <br/><br/>

            <Section id="skills" delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Projects and Skills
                </Heading>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Language Skills</Th>
                            <Th>Tools Mastery</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <UnorderedList>
                                    <ListItem>
                                        JavaScript
                                    </ListItem>
                                    <ListItem>
                                        TypeScript
                                    </ListItem>
                                    <ListItem>
                                        Java
                                    </ListItem>
                                    <ListItem>
                                        Kotlin
                                    </ListItem>
                                    <ListItem>
                                        Python
                                    </ListItem>
                                    <ListItem>
                                        Swift
                                    </ListItem>
                                    <ListItem>
                                        SQL (and NoSQL)
                                    </ListItem>
                                </UnorderedList>
                            </Td>
                            <Td>
                                <UnorderedList>
                                    <ListItem>
                                        Git (GitHub & GitLab)
                                    </ListItem>
                                    <ListItem>
                                        PostgreSQL | MongoDB
                                    </ListItem>
                                    <ListItem>
                                        ElasticSearch | Redis
                                    </ListItem>
                                    <ListItem>
                                        Docker
                                    </ListItem>
                                    <ListItem>
                                        Drone-CI
                                    </ListItem>
                                    <ListItem>
                                        Kubernetes | Ansible
                                    </ListItem>
                                    <ListItem>
                                        Scaleway
                                    </ListItem>
                                </UnorderedList>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                    
                <br />
                ADD SOME PROJECT CARD
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ArrowForwardIcon />} background="#8c45f4">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <br />
            <Divider />
            <br />

            <Section id="resume" delay={0.2}>
                <Heading as="h3" variant="section-title">
                    My resume
                </Heading>
                <br />
                <BioSection>
                    <BioYear>2021 - NOW</BioYear>
                        Backend developer for the France Interior Ministry @
                        <Link 
                            href="https://www.accenture.com/fr-fr?c=acn_glb_brandexpressiongoogle_11613278&n=psgs_1020&gclid=CjwKCAiAiKuOBhBQEiwAId_sK3LTVcUCj0YxZLOelEyVpPHkd-zHNTuR9JZVYVek9UApZPlqCfSsrhoC9bsQAvD_BwE" 
                            color="#8c45f4" 
                            isExternal="true"
                        >
                            Accenture
                        </Link>
                        <br />
                        and teacher intervenor @
                        <Link 
                            href="https://www.digi-activity.com/?gclid=CjwKCAiAiKuOBhBQEiwAId_sKze_P8wBWMbj5WYxlEGqgOrjGh6wFNMHQ6IxpFOJ4w_698BJ2bvMZRoCG4YQAvD_BwE" 
                            color="#8c45f4" 
                            isExternal="true"
                        >
                            Digi Activity
                        </Link>
                </BioSection>
                <BioSection>
                    <BioYear>2018 - 2021</BioYear>
                        Sandwich course @
                        <Link 
                            href="https://www.epsi.fr/campus/campus-de-nantes/" 
                            color="#8c45f4" 
                            isExternal="true"
                        >
                            EPSI Nantes
                        </Link>
                        <br />
                        and IoT developer @
                        <Link 
                            href="https://www.la-joliverie.com/formation/129-bts-services-informatiques-aux-organisations.html" 
                            color="#8c45f4" 
                            isExternal="true"
                        >
                            4CAD Group 
                        </Link>
                        - Engineering graduate
                </BioSection>
                <BioSection>
                    <BioYear>2016 - 2018</BioYear>
                        Doing my BTS SIO (SLAM option) @
                        <Link 
                            href="https://www.la-joliverie.com/formation/129-bts-services-informatiques-aux-organisations.html" 
                            color="#8c45f4" 
                            isExternal="true"
                        >
                            La Joliverie
                        </Link>
                    </BioSection>
            </Section>

            <br />
            <Divider />
            <br />

            <Footer />
        </Container>
    )
}

export default Page
