import { Container, Row, Col } from 'react-bootstrap'
import envisionLogo from '../../../public/img/envision-logo-600.svg'
import { LoginPanel } from './LoginPanel'
import { ForgotPasswordPanel } from './ForgotPasswordPanel'
import { SignupPanel } from './SignupPanel'
import './SignInPage.scss'

/**
 * Displays the sign-in screen.
 *
 * @param {object} props Component props
 * @param {string} props.panel Sign-in panel to render.
 * @returns
 */
export default function SignInPage({ mode }) {
    return (
        <Container>
            <Row className="SignInPage">
                <Col lg={8} className="SignInLogo">
                    <img
                        src={envisionLogo}
                        className="logo"
                        alt="EnvisionDX Logo"
                    />
                </Col>
                <Col lg={4} className="SignInContent">
                    <div className="SignInSpacer" />
                    {mode == 'login' ? (
                        <LoginPanel />
                    ) : mode == 'forgot-pw' ? (
                        <ForgotPasswordPanel />
                    ) : mode == 'signup' ? (
                        <SignupPanel />
                    ) : null}
                    <div className="SignInSpacer" />
                </Col>
            </Row>
        </Container>
    )
}
