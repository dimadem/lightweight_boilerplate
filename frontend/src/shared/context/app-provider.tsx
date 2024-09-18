import React, { ReactNode } from 'react';
import { ModelSettingsProvider } from './model-settings-provider';
import { ThemeProvider } from './theme-provider';
import { ImageProvider } from './image-base64-provider';

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <ModelSettingsProvider>
                    <ImageProvider>
                        {children}
                    </ImageProvider>
                </ModelSettingsProvider>
            </ThemeProvider>
        </>
    );
}

export { AppProvider };