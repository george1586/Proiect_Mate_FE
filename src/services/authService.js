import axios from 'axios';


 const postFormData = async (formData) => {
    console.log('API URL:', import.meta.env.VITE_API_URL);
    const API_URL = `${import.meta.env.VITE_API_URL}/signIn`;
    try {
        const response = await axios.post(API_URL, formData);
        return response.data;
    } catch (error) {
        console.error('Error posting form data:', error);
        throw error;
    }
}

export default postFormData;