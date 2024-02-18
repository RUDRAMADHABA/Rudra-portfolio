import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import '@/app/styles/globals.css'
export const metadata = {
  title: ' Rudra-Portfolio',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">

      <body>
       <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
