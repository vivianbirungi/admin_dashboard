"use client"
import Sidebar from '@/ui/dashboard/sidebar/SidebarNav'
import {
    Flex
} from '@chakra-ui/react'
import { useState } from 'react'
// import MyChart from '../components/MyChart'

export default function layout({Children}:any) {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Sidebar/>

            {/* Column 2 */}
            {Children}
            
        </Flex>
    )
}