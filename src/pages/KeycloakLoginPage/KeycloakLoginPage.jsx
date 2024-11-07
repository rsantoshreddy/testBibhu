import { Button, Col, Row } from 'react-bootstrap'
import envisionLogo from '/img/envision-logo-600.svg'
import { useKeycloak } from '@react-keycloak/web'
import { useState, useEffect } from 'react'
import './KeycloakLoginPage.scss'

export const KeyCloakLoginPage = () => {
    const { keycloak, initialized } = useKeycloak()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (initialized) {
            setIsLoading(false)
        }
    }, [initialized])
    const initateLogin = () => {
        setIsLoading(true)
        if (!keycloak.authenticated)
            keycloak?.login().finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <Col className="KeycloakLoginPage">
            <div>
                <img
                    src={envisionLogo}
                    className="logo"
                    alt="EnvisionDX Logo"
                />
            </div>
            <Button
                disabled={isLoading}
                className="mt-3 loginBtn"
                onClick={initateLogin}>
                {isLoading ? 'Loading...' : 'Sign in'}
            </Button>
        </Col>
    )
}
