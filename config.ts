export const Envs = {
    OPEN_AI_KEY: process.env.OPEN_AI_KEY || '',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
    MONGODB_URI: process.env.MONGODB_URI || '',

    EMAIL_HOST: process.env.EMAIL_SERVER_HOST || '',
    EMAIL_PORT: process.env.EMAIL_SERVER_PORT || '',
    EMAIL_USER: process.env.EMAIL_SERVER_USER || '',
    EMAIL_PASS: process.env.EMAIL_SERVER_PASSWORD || '',
    EMAIL_FROM: process.env.EMAIL_FROM || '',
};