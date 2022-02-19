import { 
    Container, 
    Box, 
    Heading, 
    useColorModeValue, 
    Image, 
    Icon,
    Divider, 
    Button,
    UnorderedList,
    GridItem,
    ListItem,
    SimpleGrid,
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
import { 
    IoLogoTwitter, 
    IoLogoInstagram, 
    IoLogoGithub, 
    IoMail, 
    IoLogoTwitch, 
    IoLogoDiscord, 
    IoLogoRss,
    IoLogoLinkedin, 
    IoLogoYoutube} from 'react-icons/io5'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Footer from "../components/footer"
import ProjectCard from "../components/project-card"
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
                Hello, I&apos;m Yann Durand, AKA Nefaden, a french full-stack developer
            </Box>

            <Section id="bio" delay={0.2}>
                <Heading as="h3" variant="section-title">
                    About me
                </Heading>
                <Paragraph>
                    Born in Nantes in 1997, I&apos;ve always been a fan of digital and video games. 
                    In 2015 after my baccalaureate I decided to go to the university of computer science (without much success) but I continued in this field, to do what I like the most. 
                    Today, I&apos;m software engineer developer, salary and freele. 
                    I&apos;ve decided to participate more on the web by making video and blog posts to share my passion and my knowledge. 
                    I hope you will learn a lot of things here!
                </Paragraph>
            </Section>

            <br />
            <Divider />
            <br />

            <Section id="about" delay={0.2}>
                <Heading as="h3" variant="section-title">
                    I&apos;m on the web
                </Heading>
                <Paragraph>
                If you want to take a look on what am I doin on Internet, following these links :
                </Paragraph>
                <br/>
                <Table variant='unstyled' size='sm'>
                    <Thead>
                        <Tr>
                            <Th>
                                <Link 
                                    href="https://blog.codewithnefaden.com" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                    <Button
                                        variant="ghost"
                                        color="#8c45f4" 
                                        leftIcon={<Icon as={IoLogoRss} />}
                                    >
                                        Blog
                                    </Button>
                                </Link>
                            </Th>
                            <Th>
                                <Link 
                                    href="https://www.youtube.com/channel/UCQ_FfghiAQPDac9JWg_JYtg" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                    <Button
                                        variant="ghost"
                                        color="#8c45f4" 
                                        leftIcon={<Icon as={IoLogoYoutube} />}
                                    >
                                        YouTube
                                    </Button>
                                </Link>
                            </Th>
                            <Th>
                                <Link 
                                    href="https://www.twitch.tv/nefaden" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                    <Button
                                        variant="ghost"
                                        color="#8c45f4" 
                                        leftIcon={<Icon as={IoLogoTwitch} />}
                                    >
                                        Twitch
                                    </Button>
                                </Link>
                            </Th>
                            <Th>
                                <Link 
                                    href="https://discord.gg/KtgBuxms8f" 
                                    color="#8c45f4" 
                                    isExternal="true"
                                >
                                <Button
                                    variant="ghost"
                                    color="#8c45f4" 
                                    leftIcon={<Icon as={IoLogoDiscord} />}
                                >
                                    Discord
                                </Button>
                                </Link>
                            </Th>
                        </Tr>
                    </Thead>
                </Table>
            </Section>

            <Divider />
            <br/><br/>

            <Section id="skills" delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Projects and Skills
                </Heading>
                <Table variant='unstyled'>
                    <Thead>
                        <Tr color="#8c45f4" >
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
                                        CI (Actions, GitLab-CI, Drone-CI)
                                    </ListItem>
                                    <ListItem>
                                        Kubernetes | Ansible
                                    </ListItem>
                                    <ListItem>
                                        Scaleway (Debian & Ubuntu OS)
                                    </ListItem>
                                </UnorderedList>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Paragraph>
                    Some projects for example :
                </Paragraph>             
                <br/>
                    
                <SimpleGrid columns={[1, 1, 1, 1]} spacing={2}>
                    <GridItem>
                        <ProjectCard
                            projectName="cere-ar-lis"
                            stacks="JavaScript, Ionic, AR.js"
                            description="Children's color app using image and color recognition to generate 3D model based on the picture and colors. 3D Models are made with Blender and the app use Ionic-React along with AR.js who use Three.js aswell"
                            link="https://github.com/Nefaden/cere-ar-lis"
                        />
                    </GridItem>
                    <GridItem>
                        <ProjectCard
                            projectName="grasbook"
                            stacks="JavaScript, Hapi, Python"
                            description="Grasbook is a social network based on food. Using micro-services approaches to create it, with Hapi. Using Javascript for most API, Python for messaging API and React for the front. Using Keycloak as IAM and gitlab-ci for CI/CD"
                            link="https://github.com/Nefaden/grasbook-reaction-api"
                        />
                    </GridItem>
                    <GridItem>
                        <ProjectCard
                            projectName="Who's that actor"
                            stacks="Python, TensorFlow, Pulsar, React"
                            description="Voice recognition to identify who's speaking in a movie. Using AI (TensorFlow, deep learning and neuronal network), python for the model and API, React for the front app and Pulsar for managing requests and queues"
                            link="https://github.com/Nefaden/OpenInnovI2Backend"
                        />
                    </GridItem>
                    <GridItem>
                        <ProjectCard
                            projectName="Contact-Manager"
                            stacks="React, Ansible, GitHub Actions"
                            description="An App to manage your contacts. A playground for me to learn React, Ansible and GitHub Actions"
                            link="https://github.com/Nefaden/contact-manager"
                        />
                    </GridItem>
                </SimpleGrid>
                <Paragraph>
                    Take a look to other repositories
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="https://github.com/Nefaden?tab=repositories" passHref>
                        <Link target="_blank" color={useColorModeValue('black', 'white')} >
                            <Button
                                backgroundColor="#8c45f4" 
                                rightIcon={<ArrowForwardIcon />}
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                GitHub
                            </Button>
                        </Link>
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
                <BioSection spacing={3}>
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
                <br />
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
                <br />
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

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    My services
                </Heading>
                <Paragraph>
                    I offer my services to create website, applications or personal formations on my free time. 
                    If you have any idea, you can <Link href="mailto:yanndurand.contact@gmail.com" color="#8c45f4" target="_blank">contact me </Link> 
                    and we&apos;ll discuss if I can help you and make an offer !
                </Paragraph>
            </Section>

            <br />
            <Divider />
            <br />

            <Section in="contact" delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Contact me
                </Heading>
                <SimpleGrid columns={[2, 2, 2]}>
                    <GridItem>
                        <Link href="https://twitter.com/YannDurand11" color="#8c45f4" target="_blank">
                            <Button
                                variant="ghost"
                                color="#8c45f4" 
                                leftIcon={<Icon as={IoLogoTwitter} />}
                            >
                                @YannDurand11
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link href="https://www.linkedin.com/in/yann-durand-12456212a/" color="#8c45f4" target="_blank">
                            <Button
                                variant="ghost"
                                color="#8c45f4" 
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                @Yann Durand
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link href="https://www.instagram.com/codewithnefaden/" color="#8c45f4" target="_blank">
                            <Button
                                variant="ghost"
                                color="#8c45f4" 
                                leftIcon={<Icon as={IoLogoInstagram} />}
                            >
                                @codewithnefaden
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link href="mailto:yanndurand.contact@gmail.com" color="#8c45f4" target="_blank">
                            <Button
                                variant="ghost"
                                color="#8c45f4" 
                                leftIcon={<Icon as={IoMail} />}
                            >
                                yanndurand.contact@gmail.com
                            </Button>
                        </Link>
                    </GridItem>
                </SimpleGrid>
            </Section>

            <br />
            <Divider />
            <br />

            <Footer />
        </Container>
    )
}

export default Page
