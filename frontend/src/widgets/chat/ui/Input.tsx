import React from 'react';
import { CornerDownLeft } from 'lucide-react';
import { Button, Label, Textarea } from '@/shared/ui';
import { LoadFile } from './LoadFile';
import { UseChatHelpers } from 'ai/react';
import { useImageContext } from '@/shared/context/image-base64-provider';

interface ChatInputProps {
    chatHook: UseChatHelpers;
}

const Input: React.FC<ChatInputProps> = React.memo(({ chatHook }) => {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    const [isComposing, setIsComposing] = React.useState<boolean>(false);
    const { imageData, setImageData } = useImageContext();

    React.useEffect(() => {
        const timer = setTimeout(() => inputRef.current?.focus(), 500);
        return () => clearTimeout(timer);
    }, [chatHook.handleSubmit]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (isComposing) return;
        if (e.key === 'Enter' && !e.shiftKey) {
            if (!e.metaKey && !e.ctrlKey) {
                e.preventDefault();
                handleSubmit(e);
            }
        } else if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleSubmit = React.useCallback((e: React.FormEvent) => {
        e.preventDefault();
        chatHook.handleSubmit(e);
        if (imageData) setImageData(null);
        handleClearImage();
    }, [chatHook, imageData, setImageData]);

    const handleClearImage = () => {
        console.log('handleClearImage called');
    };

    return (
        <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
            <Label htmlFor="message" className="sr-only">
                Message
            </Label>
            <Textarea
                id="message"
                placeholder="Start chatting..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                value={chatHook.input}
                ref={inputRef}
                onChange={chatHook.handleInputChange}
                onKeyDown={handleKeyDown}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
            // disabled={chatHook.isLoading}
            />
            <div className="flex items-center p-3 pt-0 relative">
                <LoadFile onClearImage={handleClearImage} />
                <Button type="submit" size="sm" className="ml-auto gap-1.5" aria-label="Send Message">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                </Button>
            </div>
        </form>
    );
});

Input.displayName = 'Input';

export { Input };