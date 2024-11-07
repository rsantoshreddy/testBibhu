export const signupApiCall = async (formData) => {
    // Mock API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true })
        }, 1000)
    })
}
