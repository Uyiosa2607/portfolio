"use client"
import "./style.scss"
import Container from '@mui/material/Container';
import Header from '../header/Header';

export default function AppLayout({children}){

    return (
       <div className="layout">
         <Container style={{ maxWidth: '1024px', minHeight: '100vh' }}>
            <div className="wrapper">
              <Header/>
                {children}
            </div>
         </Container>
         <p style={{textAlign: "center", fontSize: "10px", textDecoration: "underline", padding: "8px"}}><a href="https://github.com/Uyiosa2607/portfolio">Powered by Next.js, built with Love❤️</a></p>
       </div>
    )
}