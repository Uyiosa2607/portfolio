"use client"
import Container from '@mui/material/Container';
import "./style.scss"
import Footer from '../footer/Footer';

export default function Layout({children}){

    return (
       <div className="layout">
         <Container style={{ maxWidth: '1024px', minHeight: '100vh' }}>
            <div className="wrapper">
                {children}
               <Footer/>
            </div>
         </Container>
       </div>
    )
}