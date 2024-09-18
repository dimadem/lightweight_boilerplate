'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ImageData {
    base64: string;
    fileType: string;
}

interface ImageBase64Interface {
    imageData: ImageData | null;
    setImageData: (data: ImageData | null) => void;
}

const ImageContext = createContext<ImageBase64Interface | undefined>(undefined);

const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [imageData, setImageData] = useState<ImageData | null>(null);

    return (
        <ImageContext.Provider value={{ imageData, setImageData }}>
            {children}
        </ImageContext.Provider>
    );
};

const useImageContext = () => {
    const context = useContext(ImageContext);
    if (context === undefined) {
        throw new Error('useImageContext used only in ImageProvider');
    }
    return context;
};

export { ImageProvider, useImageContext };