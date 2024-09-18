import React from 'react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    Button,
    Input
} from '@/shared/ui';
import { Paperclip, Check, X } from 'lucide-react';
import { useImageContext } from '@/shared/context/image-base64-provider';

const FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

const LoadFile: React.FC<{ onClearImage: () => void }> = ({ onClearImage }) => {
    const { setImageData, imageData } = useImageContext();
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [uploadStatus, setUploadStatus] = React.useState<'init' | 'success' | 'error'>('init');
    const handleLoadImage = React.useCallback(() => fileInputRef.current?.click(), []);

    const handleFileChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !FILE_TYPES.includes(file.type)) {
            setUploadStatus('error');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            if (typeof result === 'string') {
                const base64String = result.split(',')[1];
                setImageData({ base64: base64String, fileType: file.type });
                setUploadStatus('success');
            } else
                setUploadStatus('error');
        };
        reader.onerror = () => setUploadStatus('error');
        reader.readAsDataURL(file);
    }, [setImageData]);

    const handleClearImage = React.useCallback(() => {
        setImageData(null);
        setUploadStatus('init');
        onClearImage();
    }, [setImageData, onClearImage]);

    const statusIcons = {
        success: <Check className="ml-2 h-4 w-4 text-green-500" />,
        error: <X className="ml-2 h-4 w-4 text-red-500" />,
        init: null
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Paperclip className="size-4" />
                    <span className="sr-only">Upload</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="top" className="z-50">
                <DropdownMenuItem onClick={handleLoadImage}>
                    Load Image
                    {statusIcons[uploadStatus]}
                </DropdownMenuItem>
                {imageData && (
                    <DropdownMenuItem onClick={handleClearImage}>
                        Clear Image
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
            <Input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept={FILE_TYPES.join(',')}
            />
        </DropdownMenu>
    );
};

export { LoadFile };