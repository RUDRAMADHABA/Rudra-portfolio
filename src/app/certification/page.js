"use client"

import React, { Suspense, useEffect, useState } from 'react';
import { Box, Fab, Stack, Typography, Button} from "@mui/material";
import Link from "next/link";
import styles from '@/app/styles/Navbar.module.css';
import { GoArrowUpRight } from "react-icons/go";

 
const Cloud = () => {
    const alldata = [
      {heading: "Amazon Web Services",  name: "AWS Academy Graduate - AWS Academy Cloud Foundations", redirect: <GoArrowUpRight fontSize={35} />, img: `/aws.jpeg` , issued:"Mar 2022" , link:'https://www.credly.com/badges/3a621516-ea34-4418-bbe0-081794e1868c?source=linked_in_profile'},
      { heading: "Google", name: "30 Days of Google Cloud", redirect: <GoArrowUpRight fontSize={35} />, img: `/google.jpeg`  , issued:"Oct 2021" , link:"https://www.cloudskillsboost.google/public_profiles/3ccefe81-1afd-4892-b77a-9c87ea0484d9"},
      {heading: "Hack The Mountains",  name: "Hack The Mountains 3.0", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/hack.jpeg`  , issued:"Sep 2022" , link:"/hack.pdf"},
      {heading: "Quizzine - VSSUT", name: "Heritage India Quiz", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/quiz.jpeg` , issued:"Jan 2022" , link:"https://quizzine-vssut-ae280.web.app/heritage/certify/verify.html?rudramadhabamishra" },
      {heading: "GirlScript Winter of Contributing",  name: "Girlscript Winter Of Contributing", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/girl.jpeg` , issued:"Dec 2021" , link:"https://drive.google.com/file/d/1BtGuQZBs-7g-PeY0k5XKUeVGQ9c3vSNV/view"},
      { heading: "ISRO VSSUT Space Innovation Centre", name: "Range Over Rocketry Webinar", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/vss.jpeg` , issued:"Jun 2021"  , link:"https://iic-vssut.org/RangeOverRocketry/login/certificategen/verify.html?LL0LBl2PVNgHDMWBvOpoGXE82Fx2"},
      { heading: "Aspiring Minds", name: "Data Processing Specialist", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/as.jpeg`  , issued:"Jan 2021" , link:"https://www.myamcat.com/certificate/16624849/data-processing-specialist/211"},
      {heading: "Aspiring Minds",  name: "Software Development trainee", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/as.jpeg`  , issued:"Jan 2021" , link:"https://www.myamcat.com/certificate/16624849/software-development-trainee/166"},
    ];

    return (
<Stack flexDirection='row' flexWrap='wrap' width='100%' justifyContent='center' gap='1.2em'>
  {alldata.map((data, id) => (
    <Box key={id} sx={{ 
        zIndex:"1",
      position: 'relative',
      borderRadius: "10px",
      height: "15em",
      backgroundImage: `url(${data.img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition:"center",
      display: "flex",
      flexDirection: "row",
      justifyContent:"space-between",
      alignItems: "flex-end",
      width: {md:"40%" , xs:"100%"},
      minWidth:"300px !important",
      padding: {sm:"1em 1em" , xs:"1em 1em"},
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',  // Adjust the height of the shadow overlay as needed
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
      }
    }}>
      <Stack flexDirection='row' justifyContent='space-between' alignItems='center' width='100%'>
        <Stack flexDirection='column' gap='0.4em'>
      <Typography sx={{ 
          color: "transparent",
          backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
          backgroundClip: "text",
          fontWeight: "700",
          fontSize: "18px",
          zIndex:"2"
        }}>
          • {data.heading}
        </Typography>
        <Stack flexDirection='column' >
        <Typography sx={{ 
          color:"#fff",
          fontWeight: "700",
          fontSize: "17px",
          zIndex:"2",
          width:"100%"
        }}>
          {data.name}
        </Typography>
        <Typography sx={{ 
          color:"#d2d2d2",
          fontWeight: "700",
          fontSize: "14px",
          zIndex:"2",
          width:"100%"
        }}>
          {data.issued}
        </Typography>
        </Stack>
        </Stack>
  <Stack>
        <a href={data.link}><Fab className='hoveri' sx={{transform:"scale(0.5)" , background:"#fff !important" , alignSelf:"flex-end"}}onClick={() => handleFabClick(data)}>{data.redirect}</Fab></a>
        </Stack>
      </Stack>
   
    </Box>
  ))}
</Stack>

    );
  };




const Portfolio = () => {

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
          Course Certification
        </Typography>
       
        <Stack width={{md:"70%" , xs:"auto"}} marginTop={{sm:"1em" , xs:"1em"}} justifyContent='center' flexDirection='row' >
        <Cloud/>
      </Stack>
      </Stack>
      </Suspense>
    </>
  );
};

export default Portfolio;
