export const validateSignup = (formData) => {
    let errors = {}

    if (!formData.name) {
        errors.name = 'Name is required'
    }

    if (!formData.email) {
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid'
    }

    if (!formData.password) {
        errors.password = 'Password is required'
    }

    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
    }

    return errors
}
