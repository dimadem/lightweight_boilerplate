import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Playground',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid flex-1 m-4 gap-4 md:grid-cols-2 lg:grid-cols-3 overscroll-none overflow-hidden">
            {children}
        </div>
    );
}
