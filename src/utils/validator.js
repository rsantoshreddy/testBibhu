/* eslint-disable no-useless-escape */
export const isEmailValid = (value) => {
    const regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    const isValid = regex.test(value)
    return isValid
}

export const passwordValidator = (value) => {
    console.log(value)
}
