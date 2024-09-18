import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chat',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4">
            {children}
        </div>
    );
}
