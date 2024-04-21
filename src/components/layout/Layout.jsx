import Container from '@mui/material/Container';
import "./style.scss"
import Header from '../header/Header';

export default function Layout({children}){
    return (
       <div className="layout">
         <Container style={{ maxWidth: '1024px', minHeight: '100vh' }}>
            <div className="wrapper">
               {/* <Header/> */}
                {children}
            </div>
         </Container>
       </div>
    )
}