'use client'

import { Flex } from "@chakra-ui/react";
import Auth from "../../features/auth";
const dashboard = () => {
  try {
    Auth.login({ phone: '07034568787' })
      .then((response:any) => {
      

          console.log(response);
        }
      )
      .catch((error) => {
        console.log("Error => ", error);
      });
  
  } catch (error) {
    console.log(error);
  }
  return (
    <Flex
    w={["100%", "100%", "60%", "60%", "55%"]}
    p="3%"
    flexDir="column"
    overflow="auto"
    minH="100vh">
       
   </Flex>
  )
}

export default dashboard
