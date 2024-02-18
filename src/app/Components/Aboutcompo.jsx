
"use client";

import { motion } from "framer-motion";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";

const Aboutcompo = () => {
  const edudata = [
    { name: "Stanford University", position: "Full Stack Web Developer", year: "2021-2024" },
    { name: "Harvard University", position: "Software Engineer", year: "2019-2021" },
    { name: "MIT", position: "Frontend Developer", year: "2017-2019" }
  ];
  const workdata = [
    { name: "iServeU", position: "Software Development Engineer Intern", year: "Dec 2023 - June 2024" },
    { name: "Param.ai", position: "Software Development Engineer Intern", year: "Nov 2023 - Dec 2023" },
    { name: "IG Drones", position: "Software Development Engineer Intern", year: "April 2023 - July 2023" }
  ];

  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 , transition: { delay: 2.5 } },
  };

  const educationAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2 } },
  };
  const compnydata = [
    { name:"/javascript.svg" },
    { name:"/react.svg" },
    { name:"/nextjs.svg" },
    { name:"/nodejs.svg" },
    { name:"/expresss.svg" },
    { name:"/docker.svg" },
    { name:"/kubernate.svg" },
    { name:"/istio.jpeg" },
    { name:"/ama.svg" },
    { name:"/gcp.svg" },
   
  ];
  const route = useRouter()
  return (
    <>
      <Stack flexDirection='column' justifyContent='center' alignItems='center' gap='5em'>
      <Stack flexDirection='column' gap='2.7em' width={{md:"75%" , xs:"auto"}} alignItems='center' justifyContent='center' padding='0 0em'>
          <motion.div initial="hidden" animate="visible" variants={educationAnimation} style={{display:"flex" , flexDirection:"column" , gap:"1em"}}>
            <Typography
              fontWeight="500"
              fontSize={{lg:"39px",md:"35px" , sm:"35px" , xs:"37px"}}
             sx={{ color: "transparent",
             backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
             backgroundClip: "text"}}
            >
             Education
            </Typography>
          </motion.div>
          <Stack flexDirection={{lg:"row" , xs:"column"}} gap='1em' width={{md:"100%" , xs:"auto"}} justifyContent='space-evenly' alignItems='center' flexWrap={{lg:"nowrap" , xs:"wrap"}} padding='0em 0.5em'>
           <Stack  width={{lg:"60%" , md:"70%" , sm:"80%" , xs:"auto"}}  className="border" flexDirection='column' borderColor='#fff' height='100%' sx={{ border:"1px solid rgba(255, 255, 255, 0.125)" , backdropFilter:"blur(16px) saturate(180%)" , background:"rgba(30, 30, 30, 0.75)"}} padding={{sm:"1em 1em" , xs:"0.5em 0.5em"}} borderRadius='10px' gap='0.2em'>
     <Box component='img' src="/vssut.jpg" sx={{width:"100%", height:{sm:"350px" , xs:"100%"}, borderRadius:"7px"}}/>
     <Typography color='#f5f5f5' fontWeight='700' fontSize='17px' marginTop='1em'>Veer Surendra Sai University Of Technology-(Burla,India)</Typography>
                  <Stack flexDirection={{sm:"row" , xs:"column"}} gap={{sm:"0" ,xs:"0.1em"}} justifyContent='space-between' >
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>BTech in Electronics and Telecommunication Engineering</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● 2020-2024</Typography>
                  </Stack>
           </Stack>
           
           <Stack  width={{lg:"60%" , md:"70%" , sm:"80%" , xs:"auto"}}  className="border" flexDirection='column' borderColor='#fff' height='100%' sx={{ border:"1px solid rgba(255, 255, 255, 0.125)" , backdropFilter:"blur(16px) saturate(180%)" , background:"rgba(30, 30, 30, 0.75)"}} padding={{sm:"1em 1em" , xs:"0.5em 0.5em"}} borderRadius='10px' gap='0.2em'>
     <Box component='img' src="/bjem.jpg" sx={{width:"100%", height:{sm:"328px" , xs:"300px"}, borderRadius:"7px"}}/>
     <Typography color='#f5f5f5' fontWeight='700' fontSize='17px' marginTop='1em'>Buxi Jagabandhu English Medium School-(Bhubaneswar, India)</Typography>
                  <Stack flexDirection={{sm:"row" , xs:"column"}} gap={{sm:"0" ,xs:"0.1em"}} justifyContent='space-between' >
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>Intermediate Education in Science</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● 2017-2019</Typography>
                  </Stack>
                  <Stack flexDirection={{sm:"row" , xs:"column"}} gap={{sm:"0" ,xs:"0.1em"}} justifyContent='space-between' >
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>Matriculation Education in Science</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● 2005-2017</Typography>
                  </Stack>
           </Stack>
          </Stack>
        </Stack>
        <Stack flexDirection={{md:"row" , xs:"column"}} gap={{xl:"20em",lg:"10em" , md:"10em" , sm:"2em" ,xs:"2em" }} width={{md:"55%" , xs:"auto"}} justifyContent='space-between' padding='0 1em'>
          <motion.div initial="hidden" animate="visible" variants={educationAnimation} style={{display:"flex" , flexDirection:"column" , gap:"1em"}}>
            <Typography
              fontWeight="500"
              fontSize={{lg:"39px",md:"35px" , sm:"35px" , xs:"37px"}}
             sx={{ color: "transparent",
             backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
             backgroundClip: "text"}}
            >
             Work <span style={{  fontWeight:"700"}}>Experience</span>
            </Typography>
          </motion.div>
          <Stack flexDirection='column' gap='1em' width='100%'>
            {workdata.map((data, id) => (
              <motion.div key={id} initial="hidden" animate="visible" variants={fadeInLeft}>
                <Stack className="border" flexDirection='column' width={{sm:"100%" , xs:"auto"}} borderColor='#fff' height='auto' sx={{ border:"1px solid #1e1e1e" }} padding='1em 1em' borderRadius='10px'>
                  <Typography color='#f5f5f5' fontWeight='700' fontSize='20px'>{data.name}</Typography>
                  <Stack flexDirection='row' justifyContent='space-between'>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>{data.position}</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● {data.year}</Typography>
                  </Stack>
                  
                </Stack>
              </motion.div>
            ))}
                        <Stack 
                        marginTop='0.7em'
                        alignSelf={{md:"flex-end" , xs:"center"}}
                        marginRight={{md:"3.1em" , xs:"-4.5em"}}
  position='relative' 
  width='4em' 
  padding='2em 0.5em' 
  sx={{
    background: "#1e1e1e",
    overflow: 'visible', // Set overflow to 'visible' to allow Typography to overflow
  }}
>
  <Typography 
    position='absolute' 
    left='139%' 
    top='50%' 
    fontSize='17px' 
    fontWeight='500' 
    color='#fff' 
    sx={{
      transform: 'translate(-50%, -50%)', // Center the Typography
      width: '180%', // Make Typography wider than the Stack to overflow
      display:"flex", alignItems:"center",gap:"1em",cursor:"pointer"
    }}
    onClick={()=> route.push('/about/experience') }
  >
    View More <HiOutlineArrowNarrowRight fontSize='20'/>
  </Typography>
</Stack>
          </Stack>
        </Stack>
        <Stack flexDirection='column' alignItems='center' gap='2em'>
        <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
          <Typography
            sx={{
              color: "transparent",
              backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
              backgroundClip: "text",
              textAlign: "center"
            }}
            fontWeight="500"
            fontSize={{lg:"39px",md:"35px" , sm:"35px" , xs:"37px"}}
          >
            Skills
          </Typography>
        </motion.div>
        <Stack flexDirection='row' width={{md:"60%" , xs:"100%"}} justifyContent='center' gap='1.5em' flexWrap='wrap'>
          {compnydata.map((data, id) => (
            <motion.div key={id} initial="hidden" animate="visible" variants={fadeInLeft} style={{display:"flex" , gap:"1em"}}>
              <Button variant="contained" sx={{textTransform:"none", background:"#f5f5f5 !important", border:"3px solid", borderImageSource:"linear-gradient(to right, #b16cea,#ff8a56)", borderImageSlice:"1",backdropFilter:"blur(16px) saturate(180%)", color:"#fff" , fontWeight:"700" , maxWidth:"150px" , maxHeight:"100px"}}>
<Box component='img' src={data.name} sx={{width:"50%"}}/>
              </Button>
            </motion.div>
          ))}
        </Stack>
      </Stack>
      </Stack>
    </>
  );
}

export default Aboutcompo;
