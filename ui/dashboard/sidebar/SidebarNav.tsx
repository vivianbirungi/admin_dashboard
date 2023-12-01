"use client"
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import {
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiHome,
  FiMenu,
  FiSettings,
  FiUser
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'

export default function Sidebar() {
    // const [navSize, changeNavSize] = useState("large")
    // const navWidth = useBreakpointValue({
    //   base: navSize === "small" ? "0px" : "75px",
    //   md: navSize === "small" ? "75px" : "200px",
    // });
    const navSize = useBreakpointValue({
      base: "small", // set small for mobile screens
      sm: "medium", // set medium for tablet screens
      md: "large",  // set large for small laptop screens
      lg: "x-large", // set x-large for larger laptop screens
      xl: "xx-large", // set xx-large for extra-large screens
    });
   
   
    return (
      
        <Flex
            pos="sticky"
            left={navSize == "small" ? "0" : "5"}
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    aria-label = 'none'
                   
                />
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active />
                <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        
    )
}