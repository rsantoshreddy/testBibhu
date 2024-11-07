import React from 'react'
import { Nav, Navbar, Dropdown, Container } from 'react-bootstrap'
import { UserRound, CircleAlert, ChevronDown } from 'lucide-react'
import useTheme from 'hooks/useTheme'
import { useChangeLanguage } from 'hooks/useChangeLanguage'
import { useTranslation } from 'react-i18next'
import NavbarLogo from '../navbarLogo/NavbarLogo'
import './NavbarHeader.scss'
import { useKeycloak } from '@react-keycloak/web'

// @todo -- create a folder "components/NavBarHeader", and move this and the NavBarLogo into the NavBarHeader folder.

const navItems = [
    { name: 'Sites', link: '/sites' },
    { name: 'Network', link: '/network' },
    { name: 'Security', link: '/security' },
    { name: 'Voice', link: '/voice' },
    { name: 'Billing', link: '/billing' },
    { name: 'Support', link: '/support' },
]

export default function NavbarHeader() {
    const { theme } = useTheme()
    const { t } = useTranslation()

    return (
        <Navbar
            expand="lg"
            bg={theme}
            data-bs-theme={theme}
            fixed="top"
            className="NavbarHeader shadow">
            <Container xxl="true">
                <NavbarLogo />
                <NavBarIconElemaentComponent styleClass="collapsed-view" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navItems.map((item, i) => (
                            <Nav.Link
                                className="NavbarHeader-link-items"
                                key={i}
                                href={item.link}>
                                {t(`${item.name}`)}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <NavBarIconElemaentComponent styleClass="extended-view" />
            </Container>
        </Navbar>
    )
}

const DropdownCustomButton = React.forwardRef(({ onClick }, ref) => {
    const isIconClick = (e) => {
        e.preventDefault()
        onClick(e)
    }
    return (
        <div className="NavbarHeader-icons-main-container" ref={ref}>
            <CircleAlert size={20} className="NavbarHeader-icons alert-icon" />
            <UserRound
                size={20}
                className="NavbarHeader-icons user-icon"
                onClick={isIconClick}
            />
            <div>Username</div>
            <ChevronDown
                size={20}
                className="NavbarHeader-icons chevron-icon"
                onClick={isIconClick}
            />
        </div>
    )
})

DropdownCustomButton.displayName = 'DropdownCustomButton'

function NavBarIconElemaentComponent({ styleClass }) {
    const { theme, toggleTheme } = useTheme()
    const { changeLanguage } = useChangeLanguage()
    const { t } = useTranslation()
    const { keycloak } = useKeycloak()

    const logoutHandler = () => {
        keycloak.logout()
    }

    const themeMode =
        theme === 'light'
            ? t('Dark') + ' ' + t('Mode')
            : t('Light') + ' ' + t('Mode')
    return (
        <Dropdown className={styleClass}>
            <Dropdown.Toggle
                as={DropdownCustomButton}
                id="dropdown-custom-components"></Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={toggleTheme}>{themeMode}</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('en')}>
                    {t('Switch to English')}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('fr')}>
                    {t('Switch to French')}
                </Dropdown.Item>
                <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
