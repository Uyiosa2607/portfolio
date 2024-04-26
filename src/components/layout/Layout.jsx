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
       </div>
    )
}