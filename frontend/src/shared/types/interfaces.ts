interface ModelSettings {
    model: string;
    max_tokens: number;
    temperature: number;
    top_p: number;
    top_k: number;
}

interface MessageSettings {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export {
    type ModelSettings,
    type MessageSettings
};