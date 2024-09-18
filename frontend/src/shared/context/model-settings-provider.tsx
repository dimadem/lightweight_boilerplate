'use client';

import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react';

import {
    type ModelSettings,
    type MessageSettings
} from '@/shared/types/interfaces';


interface ModelSettingsInterface {
    modelSettings: ModelSettings;
    setModelSettings: (settings: ModelSettings) => void;
    messageSettings: MessageSettings;
    setMessageSettings: (settings: MessageSettings) => void;
}

const ModelSettingsContext = createContext<ModelSettingsInterface | undefined>(undefined);

const ModelSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modelSettings, setModelSettings] = useState<ModelSettings>({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1000,
        temperature: 0,
        top_p: 0,
        top_k: 0,
    });

    const [messageSettings, setMessageSettings] = useState<MessageSettings>({
        role: 'system',
        content: 'You are a helpful assistant.',
    });

    return (
        <ModelSettingsContext.Provider value={{ modelSettings, setModelSettings, messageSettings, setMessageSettings }}>
            {children}
        </ModelSettingsContext.Provider>
    );
};

const useModelSettingsContext = () => {
    const context = useContext(ModelSettingsContext);
    if (context === undefined) {
        throw new Error('useAppContext должен использоваться внутри AppProvider');
    }
    return context;
};

export { ModelSettingsProvider, useModelSettingsContext };