"use client";

import { Box, Button, Fab, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "@/app/styles/Navbar.module.css"; 
import { CiCircleChevRight } from "react-icons/ci";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Footer = () => {
    const [data , setData]= useState({
        name:"",
        email:"",
        message:""
       })
    const sendmessage = async()=>{
        try{
            const res = await axios.post('https://rudra-backend.onrender.com/api/send'  , {
              name:data.name,
              email:data.email,
              message:data.message
             } )
             console.log(res.data.message);
            toast.success(res.data.message)
            setData({
                name:"",
                email:"",
                message:""
            })
          } catch(err){
            console.log(err.response.data.message);
            toast.error(err.response.data.message)
          }
        }

    return (  
        <>
           <Toaster/>
            <Stack
             id="connectSection"
                flexDirection={{md:"row" , xs:"column"}}
                bgcolor='#1e1e1e'
                height='100%'
                padding={{lg:"2em 12em",md:"2em 7em" , xs:"1em 1em"}}
                justifyContent='space-evenly'
                gap={{md:"0" , xs:"3em"}}
                borderBottom='0'
                border='1px solid'
                sx={{
                    backgroundImage: "linear-gradient(to right, #b16cea, #ff8a56)",
                    backgroundSize: "100% 2px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                }}
            >
               <Stack flexDirection='column' gap='1em' >
                <Stack flexDirection='row' alignItems='center' gap='1.5em'>
               <Typography
              sx={{
                color: "#fff"
              }}
              fontWeight="500"
              fontSize={{lg:"45px",md:"42px" , sm:"40px" , xs:"30px"}}>Let's <br/> <span style={{ 
              color: "transparent",
              backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
              backgroundClip: "text"}}> Connect.</span></Typography>
              <CiCircleChevRight fontSize='62' color="#fff"/>
              </Stack>
         <Typography color='#d2d2d2' fontWeight='400' fontSize={{lg:"20px",md:"19px" , sm:"18px" , xs:"16px"}} width={{sm:"70%" , xs:"90%"}}>I'm always open to discuss anything about tech or getting hired.</Typography>
               </Stack>
               <Stack flexDirection='column' gap='1.5em' width={{md:"50%" , xs:"100%"}} >
               <TextField
               onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))}
                        id="standard-basic"
                        placeholder="Name *"
                        variant="standard"
                        sx={{
                            '& input': {
                                color: '#fff', // Text color
                                caretColor: '#fff', // Caret color
                            },
                            '& label': {
                                color: '#d2d2d2', // Label color
                            },
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#d2d2d2', // Underline color
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#ff5e69', // Underline color after focus
                            },
                        }}
                    />

<TextField
onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))}
                        id="standard-basic"
                       placeholder="Email *"
                        variant="standard"
                        sx={{
                            '& input': {
                                color: '#fff', // Text color
                                caretColor: '#fff', // Caret color
                            },
                            '& label': {
                                color: '#d2d2d2', // Label color
                            },
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#d2d2d2', // Underline color
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#ff8a4b', // Underline color after focus
                            },
                        }}
                    />
<TextField
onChange={(e) => setData((prevData) => ({ ...prevData, message: e.target.value }))}
    id="standard-basic"
    placeholder="Message *"
    variant="standard"
    multiline
    rows={4}
    sx={{
        '& textarea': {
            color: '#fff',
            caretColor: '#fff',
            resize: 'vertical',  // Allow vertical resizing
            overflow: 'auto',    // Display a scrollbar when needed
        },
        '& label': {
            color: '#d2d2d2',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#d2d2d2',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#b16cea',
        },
    }}
/>


<Button  onClick={sendmessage}  className="hoverbut" variant="outlined" sx={{ borderImageSource: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important",borderImageSlice:"1 !important" , color:"#fff",borderRadius: "5px", gap: "0.5em", textTransform: "none" , fontWeight:"700" , width:"10em" }}>Send Message</Button>
              </Stack>
            </Stack>
        </>
    );
}

export default Footer;
