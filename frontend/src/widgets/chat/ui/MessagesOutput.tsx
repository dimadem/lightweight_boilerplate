import React from 'react';
import { Message } from 'ai/react';
import { Badge } from '@/shared/ui';

interface ChatMessagesProps {
    messages: Message[];
}

const MessagesOutput: React.FC<ChatMessagesProps> = ({ messages }) => (
    <div className="flex-1 overflow-hidden">
        <div className="relative h-full flex flex-col">
            <Badge variant="outline" className="absolute right-3 top-3">
                Output
            </Badge>
            {/* <div className="flex-1" /> */}
            <div className="flex flex-col p-4 gap-2 overflow-y-auto max-h-[calc(100vh-200px)]">
                {messages.map(message => (
                    <div key={message.id} className="flex flex-row gap-2">
                        <div className="w-24 text-zinc-500 flex-shrink-0">
                            {`${message.role}: `}
                        </div>
                        <div className="flex flex-col gap-2">
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export { MessagesOutput };