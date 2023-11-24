import axios from 'axios';
import config from '../config';

export class Client {
    async chat(request: string): Promise<any> {
        try {
            const response = await axios.post(
                config.CHAT_GPT_URL ?? '',
                {
                    prompt: request,
                    max_tokens: 50
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${config.CHAT_GPT_SECRET_KEY}`
                    }
                }
            );

            return response.data.choices[0].text.trim();
        } catch (error: any) {
            console.error(error.response)
            return  Promise.resolve('');
        }
    }
}

