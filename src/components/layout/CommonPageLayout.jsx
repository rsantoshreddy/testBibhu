import { Container } from 'react-bootstrap'
import { NavGlobal } from 'anima/pages/dashboard/sections/NavGlobal'
import AppFooter from './AppFooter'
import './CommonPageLayout.scss'
export const CommonPageLayout = ({ children }) => {
    return (
        <Container className="CommonPageLayout">
            <NavGlobal />
            {children}
            <AppFooter />
        </Container>
    )
}
