"use client"

import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArticleIcon from "@mui/icons-material/Article";
import React, { useState, useEffect, Suspense } from "react";
import Aboutcompo from "../Components/Aboutcompo";
const About = () => {
  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 80,
  };
  const spring1 = {
    type: "spring",
    damping: 20,
    stiffness: 50,
  };

  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [loremVisible, setLoremVisible] = useState(false);
  const [stackDividerVisible, setStackDividerVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAboutMeVisible(true);
    }, 500);

    setTimeout(() => {
      setLoremVisible(true);
    }, 1000);

    setTimeout(() => {
      setStackDividerVisible(true);
    }, 1500);

    setTimeout(() => {
      setButtonVisible(true);
    }, 2000);
  }, []);
  return (
    <>
    <Suspense>
      <Stack
  flexDirection={{md:"row" , xs:"column"}} justifyContent='space-evenly' alignItems={{md:"start" , xs:"center"}} padding={{md:"7em 0em" , sm:"1em 1em" , xs:"1em 1em"}} 
        gap="2em"
        height="100%"
        bgcolor="#161513"
      >
        <Stack>
          <motion.div
            style={{ position: "relative" }}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: aboutMeVisible ? 1 : 0 }}
            transition={{ ...spring1, duration: 1 }}
          >
            <Avatar
              src="/hero.png"
              sx={{
                borderRadius: "50% 50% 100% 0% / 92% 100% 0% 8% ",
                background:
                  "linear-gradient(to right, #ffa84b, #b16cea) !important",
                  width: {sm:"400px" , xs:"270px"},
                  height: {sm:"400px" , xs:"270px"},
              }}
            />
          </motion.div>
        </Stack>
        <Stack flexDirection="column" gap="1.7em" width={{md:"50%" , xs:"100%"}} padding={{md:"0" ,xs:"0 1em"}} >
          <Stack flexDirection="column" gap="1em">
            <AnimatePresence>
              {aboutMeVisible && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ...spring, duration: 1 }}
                  onExitComplete={() => setLoremVisible(true)}
                >
                  <Typography
                    sx={{
                      color: "transparent",
                      backgroundImage:
                        "linear-gradient(to right, #ff8a56, #b16cea)",
                      backgroundClip: "text",
                    }}
                    fontWeight="700"
                    fontSize={{lg:"40px",md:"35px" , sm:"35px" , xs:"30px"}}
                  >
                    About Me
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {loremVisible && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ...spring, duration: 1 }}
                  onExitComplete={() => setStackDividerVisible(true)}
                >
                  <Typography
                    color="#d2d2d2"
                    fontWeight="400"
                    fontSize={{lg:"18px",md:"17px" , sm:"16px" , xs:"15px"}}
                    width={{sm:"80%" , xs:"100%"}}
                  >
                  
                  Hey everyone, I'm Rudramadhaba Mishra, I am currently working as a SDE Intern at iServeU. i have done my BTech majoring in Electronics and Telecommunication Engineering. I've interned as an SDE at multiple startups before, have actively contributed to open source and web development projects. I served as a Technical Team Member for Microsoft Learn Student Ambassador-SANINS and Idea Innovation Cell. As a founding member of GeeksforGeeks-Vssut chapter, I was a GFG campus ambassador for 2021-22. I am Looking for full-time software development opportunities to join !
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
          </Stack>
          <AnimatePresence>
            {stackDividerVisible && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ ...spring, duration: 1 }}
              >
                <Stack flexDirection="row" justifyContent="start" width={{sm:"100%" , xs:"auto"}} gap={{sm:"2em" , xs:"0.5em"}}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ ...spring, duration: 1 }}
                  >
                    <Stack flexDirection='row' justifyContent='center' gap='0.2em'>
                      <Stack flexDirection='column' >
                        <Typography
                          sx={{
                            color: "transparent",
                            backgroundImage: "linear-gradient(to right, #ff8a56, #b16cea)",
                            backgroundClip: "text",
                          }}
                          fontWeight='700'
                          fontSize={{lg:"30px", md:"29px" , sm:"25px" , xs:"23px"}}
                        >
                          2 +
                        </Typography>
                        <Typography
                          color='#d2d2d2'
                          fontWeight='400'
                          fontSize='15px'
                          width="80%"
                        >
                          Years Of Experience in Development
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" sx={{ height: "6em", borderColor: "#312f2e" , position:"relative" , right:{sm:"0" , xs:"1em"} }} />
                    </Stack>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ ...spring, duration: 1 }}
                  >
                    <Stack flexDirection='row' justifyContent='center' gap='0.2em'>
                      <Stack flexDirection='column' >
                        <Typography
                          sx={{
                            color: "transparent",
                            backgroundImage: "linear-gradient(to right, #ff8a56, #b16cea)",
                            backgroundClip: "text",
                          }}
                          fontWeight='700'
                          fontSize={{lg:"30px", md:"29px" , sm:"25px" , xs:"23px"}}
                        >
                          15 +
                        </Typography>
                        <Typography
                          color='#d2d2d2'
                          fontWeight='400'
                          fontSize='15px'
                          width="80%"
                        >
                          Successfully Projects Completed
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" sx={{ height: "6em", borderColor: "#312f2e",position:"relative" , right:{sm:"0" , xs:"1em"} }} />
                    </Stack>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ ...spring, duration: 1 }}
                  >
                    <Stack flexDirection='column' >
                      <Typography
                        sx={{
                          color: "transparent",
                          backgroundImage: "linear-gradient(to right, #ff8a56, #b16cea)",
                          backgroundClip: "text",
                        }}
                        fontWeight='700'
                        fontSize={{lg:"30px", md:"29px" , sm:"25px" , xs:"23px"}}
                      >
                        50 +
                      </Typography>
                      <Typography
                        color='#d2d2d2'
                        fontWeight='400'
                        fontSize='15px'
                        width="100%"
                      >
                        Clients Worked with
                      </Typography>
                    </Stack>
                  </motion.div>
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
    {buttonVisible && (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ ...spring, duration: 1 }}
      >
     <a href='/Resume.pdf' download><Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important",
            borderRadius: "5px",
            gap: "0.3em",
            textTransform: "none",
            width: "14em",
          }}
        >
          Download Resume <ArticleIcon color="#fff" />
        </Button></a>
      </motion.div>
    )}
  </AnimatePresence>
        </Stack>
      </Stack>
      <Stack  bgcolor="#161513"  height='100%' padding='2em 0'>
<Aboutcompo/>
      </Stack>
      </Suspense>
    </>
  );
};

export default About;
