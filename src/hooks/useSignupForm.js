import { useState } from 'react'

export const useSignUpForm = (initialState, validate) => {
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e, callback) => {
        e.preventDefault()
        const validationErrors = validate(formData)
        if (Object.keys(validationErrors).length === 0) {
            setErrors({})
            setIsSubmitting(true)
            callback() // Proceed with form submission
        } else {
            setErrors(validationErrors)
        }
    }

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
    }
}
