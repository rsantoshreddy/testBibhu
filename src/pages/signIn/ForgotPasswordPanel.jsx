/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { InputFormGroup } from 'components/form/InputFormGroup'
import './ForgotPasswordPanel.scss'

export function ForgotPasswordPanel() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState({})
    const { t } = useTranslation()

    const onChangeHandler = (e) => {
        setEmail(e.target.value)
        // if (e.target.type === 'email') {
        //     if (isEmailValid(e.target.type)) {
        //         setError({})
        //     } else {
        //         setError({email: 'Invalid email'})
        //     }
        // }
    }

    const handleSubmit = () => {
        console.log(email)
    }

    return (
        <div className="ForgotPasswordPanel">
            <div className="forgetPassword-title mb-15">
                <h3>{t('Forgot Password?')}</h3>
            </div>
            <div className="forgetPassword-sub-title mb-15">
                <p>
                    {t(
                        'Provide your registered Email address and your Username / Temporary Password will be sent to you!'
                    )}
                </p>
            </div>

            <InputFormGroup
                type="email"
                onChange={onChangeHandler}
                error={error.email ? error.email : ''}
                value={email}
                label="Email"
                className="mb-15"
            />

            <div>
                <Button
                    variant="primary"
                    className="forgetPassword-page-submit-btn mb-15"
                    onClick={handleSubmit}>
                    {t('Submit')}
                </Button>
                <Link to="/login" className="mb-15">
                    {t('Go back to Login?')}
                </Link>
            </div>
        </div>
    )
}
