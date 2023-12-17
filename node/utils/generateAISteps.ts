import axios from 'axios';
import { envConfig } from '../config/env';

export const findSteps = async (title: string) => {
    try {
        const prompt = `How do I ${title}. Divide this statement into 6 steps for the result oriented solution.`

        const generateSteps = await axios.post('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1', { inputs: prompt }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${envConfig.HUGGING_FACE_TOKEN}`
            }
        });

        console.log('generateSteps', generateSteps)

    } catch (error) {
        throw error
    }
}