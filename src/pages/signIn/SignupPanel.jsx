import { Link } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import { signupApiCall } from 'services/signupService'
import { validateSignup } from 'utils/validators/validateSignup'
import { useSignUpForm } from 'hooks/useSignupForm'
import './SignupPanel.scss'

export function SignupPanel() {
    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const { formData, errors, handleChange, handleSubmit, isSubmitting } =
        useSignUpForm(initialState, validateSignup)

    const onSubmit = async () => {
        try {
            const response = await signupApiCall(formData)
            if (response.success) {
                alert('Signup Successful')
            }
        } catch (err) {
            console.error('Signup Error:', err)
        }
    }

    return (
        <div className="SignupPanel">
            {isSubmitting && <Alert variant="success">Submitting...</Alert>}
            <h2 className="mb-4">Sign Up</h2>
            <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                    </Form.Control.Feedback>
                </Form.Group>

                <div>
                    <Button
                        variant="primary"
                        type="submit"
                        className="SignupSubmit">
                        Sign Up
                    </Button>
                    <div>
                        <Link to="/login">Back to login</Link>
                    </div>
                </div>
            </Form>
        </div>
    )
}
