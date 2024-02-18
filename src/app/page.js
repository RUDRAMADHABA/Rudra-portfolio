"use client"

import { Avatar, Box, Button, Fab, Stack, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Suspense } from "react";
const Index = () => {
    const spring = {
        type: 'spring',
        damping: 20,
        stiffness: 50,
      };
    
      const containerVariants = {
        hidden: {
          opacity: 0,
          x: -20,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
          },
        },
      };
    
      const typographyVariants = {
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      };
    
      const boxVariants = {
        hidden: {
          width: '0%',
        },
        visible: {
          width: '30%',
          transition: {
            ease: 'linear',
          },
        },
        exit: {
          width: '0%',
        },
      };
      const link1 = ()=>{
        window.open('https://www.linkedin.com/in/rudramadhaba/', '_blank');
    }
    const link2 = ()=>{
      window.open('https://twitter.com/rudramadhabami1', '_blank');
  }

  const link3 = ()=>{
    window.open('https://github.com/RUDRAMADHABA', '_blank');
}
const link4 = ()=>{
  window.open('https://topmate.io/rudramadhaba_mishra', '_blank');
}

    return (  
        <>
          
        <Suspense>
        <Stack flexDirection={{md:"row" , xs:"column-reverse"}} justifyContent='center' alignItems={{md:"start" , xs:"center"}} padding={{md:"7em 0em" , sm:"1em 2em" , xs:"1em 1em"}} gap={{md:"0" , xs:"3em"}} sx={{bgcolor:"#161513" , height:"100%"}}>
        <Stack flexDirection='column' gap='1.7em' width={{md:"50%" , xs:"100%"}} padding={{md:"0" ,xs:"0 1em"}} >
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={typographyVariants}>
          <Typography color='#fff' fontWeight='400' fontSize={{lg:"50px",md:"45px" , sm:"40px" , xs:"30px"}}>Hi!👋</Typography>
        </motion.div>
        <motion.div variants={typographyVariants}>
          <Typography color='#fff' fontWeight='700' fontSize={{lg:"50px",md:"45px" , sm:"40px" , xs:"30px"}}>
            I'm <span style={{ color: "transparent", backgroundImage: "linear-gradient(to right, #ff5e69, #ff8a56)", backgroundClip: "text" }}>Rudramadhaba Mishra</span>
          </Typography>
        </motion.div>
        <motion.div variants={containerVariants}>
          <Stack flexDirection='row' marginTop='0.5em' gap='0.5em' alignItems='center'>
            <motion.div variants={boxVariants}>
              <Box sx={{ background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea)", width: "100%", height: "2px", borderRadius: "5px" }}></Box>
            </motion.div>
            <motion.div variants={typographyVariants}>
              <Typography color='#fff' fontWeight='400' fontSize={{lg:"23px",md:"21px" , sm:"20px" , xs:"16px"}}>Full Stack and DevOps Engineer</Typography>
            </motion.div>
          </Stack>
        </motion.div>
      </motion.div>

      {/* Additional elements with animations */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={typographyVariants}>
        <Typography color='#d2d2d2' fontWeight='400' fontSize={{lg:"18px",md:"17px" , sm:"15px" , xs:"14px"}}width={{md:"85%" , xs:"100%"}}>
        Hey everyone, I'm Rudramadhaba Mishra, I am currently working as a SDE Intern at iServeU. i have done my BTech majoring in Electronics and Telecommunication Engineering. I've interned as an SDE at multiple startups before, have actively contributed to open source and web development projects. I served as a Technical Team Member for Microsoft Learn Student Ambassador-SANINS and Idea Innovation Cell. As a founding member of GeeksforGeeks-Vssut chapter, I was a GFG campus ambassador for 2021-22. I am Looking for full-time software development opportunities to join !
        </Typography>
      </motion.div>
</motion.div>
      <Stack flexDirection='row' gap='0.5em' alignItems='center'>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={typographyVariants}>
          <Button onClick={() => {
    const mailtoLink = 'mailto:rudramadhabamishra@gmail.com';
    window.location.href = mailtoLink;
  }} variant="contained" sx={{ background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important", borderRadius: "5px", gap: "0.5em", textTransform: "none" }}>Hire Me <TelegramIcon color="#fff" /></Button>
        </motion.div>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={typographyVariants}>
        <a href='/Resume.pdf' download> <Button variant="outlined" sx={{ border: "1px solid #ff8a56 !important", borderRadius: "5px", textTransform: "none", color: "#fff" }}>View Resume</Button></a>
        </motion.div>
        </motion.div>
      </Stack>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Stack flexDirection='column' alignSelf='start' marginTop='0.5em'>
        <motion.div variants={typographyVariants}>
          <Typography color='#fff' fontWeight='400' fontSize={{lg:"18px",md:"17px" , sm:"16px" , xs:"16px"}}>Socials links:</Typography>
        </motion.div>
        <motion.div variants={containerVariants}>
          <Stack flexDirection='row' marginTop='0.5em' gap='0.5em' alignItems='start'>
            <motion.div variants={typographyVariants}>
              <Fab onClick={()=> link1()} sx={{ transform: "Scale(0.7)", background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important" }}><LinkedInIcon size={30}/></Fab>
            </motion.div>
            <motion.div variants={typographyVariants}>
              <Fab onClick={()=> link2()} sx={{ transform: "Scale(0.7)", background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important" }}><TwitterIcon size={30}/></Fab>
            </motion.div>
            <motion.div variants={typographyVariants}>
              <Fab onClick={()=> link3()} sx={{ transform: "Scale(0.7)", background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important" }}><FaGithub size={30}/></Fab>
            </motion.div>
            <motion.div variants={typographyVariants}>
              <Fab onClick={()=> link4()} sx={{ transform: "Scale(0.7)", background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important" }}><Box component='img' src="/topmate.png" sx={{width:"80%" , mixBlendMode:"color-dodge"}}/></Fab>
            </motion.div>
          </Stack>
        </motion.div>
      </Stack>
      </motion.div>
    </Stack>
            <Stack >
            <motion.div
            style={{position:"relative"}}
      initial={{ y: 500  , opacity:0}}
      animate={{ y: 0  , opacity:1}}
      transition={{ ...spring, duration: 1 }}
    >
      <Avatar
      src="/hero.png"
        sx={{
          borderRadius: '57% 43% 61% 39% / 64% 75% 25% 36% ',
          background: 'linear-gradient(to right, #ffa84b, #b16cea) !important',
          width: {sm:"400px" , xs:"270px"},
          height: {sm:"400px" , xs:"270px"},
        }}
      />
    </motion.div>
            </Stack>
        </Stack>
        </Suspense>
        </>
    );
}
 
export default Index;