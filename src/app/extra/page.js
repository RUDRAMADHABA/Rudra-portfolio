"use client"

import {  Divider, Fab, Stack, Typography } from "@mui/material";
import {motion} from 'framer-motion'
const Extra = () => {

const data = [
  {
    "position": "AWS Educate Student",
    "company": "AWS Educate Student Community India",
    "duration": "Jul 2021 - May 2022 ",
    "responsibilities": [
      "Learned and contributed in the AWS community."
    ]
  },
  {
    "position": "Core Technical Team Member",
    "company": "GeeksForGeeks VSSUT",
    "duration": "Nov 2021 - Oct 2023",
    "responsibilities": [
      "Worked as a Core Tech Team member and a founding member of GFG VSSUT."
    ]
  },
  {
    "position": "Campus Ambassador",
    "company": "Dell Technologies",
    "duration": "Oct 2021 - Apr 2022 ",
    "responsibilities": [
      "Campus Ambassador of Dell Technologies."
    ]
  },
  {
    "position": "Core Techno-Management Member",
    "oldposition": "Community Member",
    "company": "GDG Cloud Bhubaneswar",
    "duration": "Jul 2023 - Present",
    "oldduration": "Nov 2021 - Jul 2023",
    "responsibilities": [
      "Developed GDG BBSR Website and Devfest 2023 website.",
      "Serving as a Core Management Member.",
      "Full Stack Web Developer for GDG BBSR events."
    ],
    "oldresponsibilities": [
      "Active community member.",
      "Participated in all GDG events."
    ]
  },
  {
    "position": "Community Member",
    "company": "Google Developer Student Clubs - VSSUT, Burla",
    "duration": "Dec 2020 - Jul 2023",
    "responsibilities": [
      "Active community member in Developer Students Club VSSUT, Burla."
    ]
  },
  
  
  {
    "position": "Open Source Contributor",
    "company": "GirlScript Summer of Code",
    "duration": "Mar 2022 - May 2022",
    "responsibilities": [
      "Contributed as an open source contributor for GSSOC'22."
    ]
  },
  {
  "position": "Open Source Contributor",
    "company": "GirlScript Winter of Contributing",
    "duration": "Aug 2021 - Nov 2021 ",
    "responsibilities": [
      "GWOC'21 in Web development domain."
    ]
  },{
    "position": "Ninja Entrepreneur",
    "company": "Coding Ninjas",
    "duration": "Aug 2021 - Jan 2022 ",
    "responsibilities": [
      "Campus Ambassador representing Coding Ninjas."
    ]
  },
  {
    "position": "Coding Team Lead",
    "company": "Idea and Innovation Cell, VSSUT, Burla",
    "duration": "Apr 2023 - Dec 2023",
    "responsibilities": [
      "Managed and handled different coding projects and web app development."
    ],
    "oldposition": "Core Technical Team Member",
    "oldduration": "Jul 2022 - Jul 2023 ",
    "oldresponsibilities": [
      "Worked as a Core Technical Team Member in CS-Electronics domain.",
      "Helped in development of the overall official IIC website."
    ],
    "oldposition1": "Technical Team Member",
    "oldduration1": "May 2021 - Jul 2022 ",
    "oldresponsibilities1": [
      "Core Tech Team Member."
    ]
  },
  
  {
    "position": "Core Technical Team Member",
    "company": "ISRO VSSUT Space Innovation Centre",
    "duration": "Aug 2022 - Dec 2023 ",
    "responsibilities": [
      "Worked in core electronics team and aviation.",
      "Handled the website of VSSSIC using MERN stack.",
      "Worked on Integration of software with IoT."
    ]
  },
   
  {
    "position": "Core Team Member and Mentor",
    "company": "SATT - Startup Accelerator Think Tank",
    "duration": "Feb 2023 - Dec 2023 ",
    "responsibilities": [
      "Worked as a core team member and mentored new budding startups."
    ]
  },
 
  {
    "position": "Campus Ambassador",
    "company": "Belong Education",
    "duration": "Feb 2021 - Feb 2021",
    "responsibilities": [
      "Campus brand ambassador for InternIn, awarded as the Best Intern."
    ]
  },
  {
    "position": "Social Media Marketing Intern",
    "company": "Yoobbel",
    "duration": "May 2021 - Jul 2021 ",
    "responsibilities": [
      "I worked here as a Social Media Marketing Intern."
    ]
  },  {
    "position": "Social Media Marketing Intern",
    "company": "FASTECH",
    "duration": "May 2021 - Jul 2021 ",
    "responsibilities": [
      "I worked here as a Social Media Marketing Intern."
    ]
  },{
    "oldposition": "Open Source Contributor",
    "company": "LetsGrowMore",
    "oldduration": "Jun 2021 - Aug 2021",
    "oldresponsibilities": [
      "Contributed to the open source projects in Letsgrowmore Summer Of Code 2021."
    ],
    "responsibilities": [
     "I worked here as a Webdevelopment Intern ."
    ],
    "position": "Web Development Intern",
    "duration": "Jul 2021 - Jul 2021"
  },  {
    "position": "Web Development Intern",
    "company": "The Sparks Foundation",
    "duration": "Jul 2021 - Aug 2021 ",
    "responsibilities": [
      "I worked here as a Webdevelopment Intern ."
     ],

  }, {
    "position": "Participant",
    "company": "The Uplift Project",
    "duration": "Jun 2021 - Sep 2021 ",
  },
  {
    "position": "IT Intern",
    "company": "Youth India Burla Chapter",
    "duration": "May 2021 - Nov 2021 ",
    "responsibilities": [
      "Intern at IT department of YIF Burla Chapter."
    ]
  },

 {
    "position": "Core Team Member",
    "company": "CodeIN Community",
    "duration": "Sep 2021 - Jun 2022 ",
    "responsibilities": [
      "Active core team member in the tech team."
    ]
  },
   {
    "position": "Core Technical Team Member",
    "oldposition": "Social Media and Outreach Lead",
    "company": "SANINS",
    "oldduration": "Nov 2021 - Sep 2023",
    "duration": "Apr 2021 - Jul 2023",
    "oldresponsibilities": [
      "Active community member in Developer Students Club VSSUT, Burla."
    ],
    "responsibilities": [
      "Team Member in Web Development Domain."
    ]
  },
   {
    "position": "Core Team Member",
    "company": "Quizzine - VSSUT",
    "duration": "May 2021 - Dec 2023 ",
    "responsibilities": [
      "Role of Quizzer and Web Developer at Quizzine-VSSUT."
    ]
  }, 
  {
    "position": "Web Developer",
    "company": "Eduhub Community",
    "duration": "Sep 2021 - May 2022",
    "responsibilities": [
      "AWS Educate Student."
    ],
    "oldposition": "Campus Leader",
  
    "oldduration": "Aug 2021 - Jan 2022",
    "oldresponsibilities": [
      "Campus Leader for VSSUT, Burla."
    ],
    "oldposition1": "Technical Team Member",
    "oldduration1": "Jul 2021 - May 2022 ",
    "oldresponsibilities1": [
      "Technical Team Member of Eduhub Community."
    ]
  },
 
    {
    "position": "Campus Mantri",
    "company": "GeeksforGeeks",
    "duration": "Jun 2021 - Apr 2022 ",
    "responsibilities": [
      "Campus Ambassador at Geeks For Geeks."
    ]
  },

]

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 , transition: { delay: 0.25 } },
};

    return (
        <>
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
          Extra Curricular
        </Typography>
    
        <Stack gap={{sm:"1.5em" , xs:"0em"}} flexDirection='row' justifyContent='center'>
          <Stack flexDirection='column' alignItems='center'>
                <Stack width='1.5em' height='1.5em' borderRadius='7px' sx={{background:"linear-gradient(to right, #b16cea,#ff8a56)"}}></Stack>
                <Divider sx={{ borderColor: "#f5f5f5", height: "96.5%"  }} orientation="vertical" />
                <Stack width='0.7em'  height='0.7em' borderRadius='50%'  sx={{background:"linear-gradient(to right, #b16cea,#ff8a56)"}}></Stack>
          </Stack>
        <Stack flexDirection='column' width={{md:"50%" , xs:"100%"}} justifyContent='center' gap='1.3em' marginTop='2.5em'>
        {data.map((data, id) => (
              <motion.div key={id} initial="hidden" animate="visible" variants={fadeInLeft} style={{display:"flex" , gap:"1em"}}>
                <Stack flexDirection='column' width='100%' minWidth={{sm:"auto" , xs:"300px"}} padding='1em 1em' borderRadius='10px'>
                  <Typography sx={{  color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #b16cea,#ff8a56)",
            backgroundClip: "text",}} fontWeight='700' fontSize={{sm:"20px" , xs:"18px"}} >{data.company}</Typography>
                
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
        </Stack>
        </>
      );
}
 
export default Extra;