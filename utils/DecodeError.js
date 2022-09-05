
const DecodeError = (err) => {
    const code = err.response?.status || 400;
    const resp = err.response?.data || { message: 'There was an error getting OTP' };

    return {
        code, 
        resp
    }
}

export default DecodeError;