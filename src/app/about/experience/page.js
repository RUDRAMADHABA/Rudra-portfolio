"use client"

import { Button, Stack, Typography } from "@mui/material";
import {motion} from 'framer-motion'
import { Suspense } from "react";
const Experience = () => {

    
     
   const workdata =  [
        {
          "position": "Software Engineer Intern",
          "company": "iServeU",
          "duration": "Dec 2023 - Present",
          "responsibilities": [
            "Working in the Backend and DevOps Team of IserveU Products.",
            "Developing APIs and working in API Gateway team of DevOps.",
            "Tech Stack: Nodejs, Express.js, Go-lang, Docker, Kubernetes, PostgreSQL, Cassandra, GCP"
          ]
        },
        
        {
          "position": "Software Development Intern",
          "company": "Param.ai",
          "duration": "Nov 2023 - Dec 2023",
          "responsibilities": [
            "Worked on Product Tidyhire.",
            "Worked on Resume to Email feature using GCP, Chat GPT, Nodejs, Express.Js.",
            "Tech Stack: Nuxt.js (Frontend)"
          ]
        },
      
        {
          "position": "Software Development Intern",
          "company": "Ostello AI",
          "duration": "Sep 2023 - Nov 2023",
          "responsibilities": [
            "Worked on the Backend side of Product Ostello AI.",
            "Tech Stack: Node.Js, Express.Js, Nest.js, AWS, Docker, Kubernetes."
          ]
        },
        
        {
          "position": "Software Development Intern",
          "company": "ELVDRIVE",
          "duration": "Sep 2023 - Sep 2023 ",
          "responsibilities": [
            "Developed webpages using React.js and Node.js."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "Buildorz",
          "duration": "Jul 2023 - Sep 2023",
          "responsibilities": [
            "Developed Multiple pages on React.Js.",
            "Worked on Solidity, smart contract Projects."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "RagaAI Inc",
          "duration": "Jul 2023 - Sep 2023 ",
          "responsibilities": [
            "Worked on a stealth product.",
            "Integrated LLMs and built pages using React.js."
          ]
        },
     
        {
          "position": "Software Development Intern",
          "company": "KiloPe",
          "duration": "May 2023 - Jul 2023",
          "responsibilities": [
            "Worked on both the frontend and backend sections of the web-app.",
            "Tech Stack: (Frontend and Backend)"
          ]
        },
      
        {
          "position": "Software Development Intern",
          "company": "IG Drones",
          "duration": "Apr 2023 - Jun 2023",
          "responsibilities": [
            "Worked on Project IG-ONE.",
            "Integrated APIs, used tech stack React.js and Redux Saga."
          ]
        },
        {
          "position": "Full Stack Developer Intern",
          "company": "Wasper Tech",
          "duration": "Sep 2022 - Jun 2023",
          "responsibilities": [
            "Made and Deployed the landing page of Wasper Tech in React.Js on AWS.",
            "Led the team in building the full stack web app using MERN stack."
          ]
        },
        {
          "position": "Full Stack Developer Intern",
          "company": "Lancyfirm",
          "duration": "Dec 2022 - May 2023",
          "responsibilities": [
            "Full Stack Developer Intern, managing Frontend and DevOps sections of the FMS."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "Markoknow",
          "duration": "Apr 2023 - Apr 2023",
          "responsibilities": [
            "Developed web apps using React and React Native."
          ]
        },
        {
          "position": "Software Developer Intern",
          "company": "Alchemial",
          "duration": "Nov 2022 - Apr 2023",
          "responsibilities": [
            "Optimized code, developed new pages with MERN stack.",
            "Managed live server using AWS."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "Clickdee",
          "duration": "Sep 2022 - Oct 2022",
          "responsibilities": [
            "Worked in both frontend and backend departments.",
            "Developed APIs and blockchain protocols for web3 technologies."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "MarketInc",
          "duration": "Aug 2022 - Sep 2022",
          "responsibilities": [
            "Worked as an SDE Intern to develop the MVP of the Company."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "MADAlgos",
          "duration": "Aug 2022 - Sep 2022 ",
          "responsibilities": [
            "Developed the MadAlgos live website at production level.",
            "Integrated APIs and developed new components using Next.JS."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "Briefly™",
          "duration": "May 2022 - Jul 2022",
          "responsibilities": [
            "Developed the Briefly Products from scratch using ReactJS and NodeJS.",
            "Integrated REST APIs."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "Xdigics Technologies Private Limited",
          "duration": "May 2022 - Jul 2022",
          "responsibilities": [
            "Developed the platform 'Earlyrise' in both Frontend and Backend Departments."
          ]
        },
        {
          "position": "Software Development Intern",
          "company": "WebThreeX",
          "duration": "May 2022 - Jul 2022",
          "responsibilities": [
            "Contributed to various projects for clients using different tech stacks."
          ]
        },
       
       
     
        {
          "position": "Analyst",
          "company": "Namekart",
          "duration": "Jan 2021 - Jun 2021 ",
          "responsibilities": [
            "Data Analyst - Domain name research and marketing."
          ]
        },
        
      ]
      



      const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 , transition: { delay: 0.25 } },
      };
    
    
    return ( 
        <>
        <Suspense>
 <Stack
        flexDirection="column"
        gap="2em"
        alignItems="center"
        height="100%"
        minHeight="100vh"
        bgcolor="#161513"
        padding={{ md: "4em 0", xs: "1em 1em" }}
      >
        <Typography
          sx={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #b16cea,#ff8a56)",
            backgroundClip: "text",
          }}
          fontWeight="500"
          fontSize={{lg:"39px",md:"35px" , sm:"35px" , xs:"37px"}}
        >
          My Experience
        </Typography>
        <Stack flexDirection='column' width={{md:"70%" , xs:"100%"}} justifyContent='center' gap='1.3em' flexWrap='wrap'>
        {workdata.map((data, id) => (
              <motion.div key={id} initial="hidden" animate="visible" variants={fadeInLeft} style={{display:"flex" , gap:"1em"}}>
                <Stack className="border" flexDirection='column' width='100%' minWidth={{sm:"auto" , xs:"300px"}} borderColor='#fff'sx={{ border:"1px solid #1e1e1e" }} padding='1em 1em' borderRadius='10px'>
                  <Typography color='#f5f5f5' fontWeight='700' fontSize={{sm:"20px" , xs:"18px"}} >{data.company}</Typography>
                
                    <Stack flexDirection='column' marginLeft='1em'>
                    <Stack flexDirection={{sm:"row" , xs:"column"}} gap={{sm:"0" ,xs:"0.1em"}} justifyContent='space-between' alignItems={{sm:"center" , xs:"start"}}>
                    <Typography color='#f5f5f5' fontWeight='400' fontSize='16px'>● {data.position}</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px' marginLeft={{sm:"0" ,xs:"0.7em"}}>● {data.duration}</Typography>
                    </Stack>
                    {
                        data.responsibilities && (
                            <Typography color='#d2d2d2' fontWeight='400' fontSize='14px' marginLeft='1.2em' width={{sm:"80%" , xs:"100%"}}>-- {data.responsibilities}</Typography>
                        )
                    }
                    </Stack>
                  {
                    data.oldposition && data.oldduration &&  data.oldresponsibilities  &&(

<Stack flexDirection='column' marginLeft='1em'>
<Stack flexDirection={{sm:"row" , xs:"column"}} gap={{sm:"0" ,xs:"0.1em"}} justifyContent='space-between' alignItems={{sm:"center" , xs:"start"}}>
                    <Typography color='#f5f5f5' fontWeight='400' fontSize='16px' marginTop='0.7em'>● {data.oldposition}</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'  marginLeft={{sm:"0" ,xs:"0.7em"}}>● {data.oldduration}</Typography>
                    </Stack>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px' marginLeft='1.2em' width={{sm:"80%" , xs:"100%"}}>--{data.oldresponsibilities}</Typography>
                    </Stack>
                    )
                  }
                 {
                    data.oldposition1 && data.oldduration1 &&  data.oldresponsibilities1  &&(

<Stack flexDirection='column' marginLeft='1em'>
<Stack flexDirection={{sm:"row" , xs:"column"}} gap={{sm:"0" ,xs:"0.1em"}} justifyContent='space-between' alignItems={{sm:"center" , xs:"start"}}>
                    <Typography color='#f5f5f5' fontWeight='400' fontSize='16px' marginTop='0.7em'>● {data.oldposition1}</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'  marginLeft={{sm:"0" ,xs:"0.7em"}}>● {data.oldduration1}</Typography>
                    </Stack>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px' marginLeft='1.2em' width={{sm:"80%" , xs:"100%"}}>--{data.oldresponsibilities1}</Typography>
                    </Stack>
                    
                      )
                }
                </Stack>
              </motion.div>
            ))}
        </Stack>
        </Stack>
        </Suspense>
        </>
    );
}
 
export default Experience;