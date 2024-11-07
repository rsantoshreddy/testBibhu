/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap'
import { InputFormGroup } from '../../components/form/InputFormGroup'
import './LoginPanel.scss'

export function LoginPanel() {
    const [iniState, setIniState] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState({})
    const { t } = useTranslation()

    const onChangeHandler = (e) => {
        setIniState({ ...iniState, [e.target.type]: e.target.value })
        // if (e.target.type === 'email') {
        //     if (isEmailValid(e.target.type)) {
        //         setError({})
        //     } else {
        //         setError({email: 'Invalid email'})
        //     }
        // }
    }

    const handleSubmit = () => {
        console.log(iniState)
    }

    return (
        <div className="LoginPanel">
            <div className="login-title mb-15">
                <h3>{t('Login')}</h3>
            </div>
            <InputFormGroup
                type="email"
                onChange={onChangeHandler}
                error={error.email ? error.email : ''}
                value={iniState.email}
                label="Email"
                className="mb-15"
            />

            <InputFormGroup
                type="password"
                onChange={onChangeHandler}
                value={iniState.pass}
                label="Password"
                className="mb-15"
            />

            <div>
                <Button
                    variant="primary"
                    className="login-page-submit-btn"
                    onClick={handleSubmit}>
                    {t('Submit')}
                </Button>
                <div>
                    <Link to="/forgot-pw" className="mb-15">
                        {t('Forgot password?')}
                    </Link>
                </div>
                <div>
                    <Link to="/signup" className="mb-15">
                        {t('Sign up for an account')}
                    </Link>
                </div>
            </div>
        </div>
    )
}
