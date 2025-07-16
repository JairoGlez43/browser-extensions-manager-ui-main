'use client'
import dynamic from 'next/dynamic';
const ThemeToggle = dynamic(() => import('./Theme-Toggle'), { ssr: false });

const ClientToggle = () => {
    return (
        <ThemeToggle />
    );
}   

export default ClientToggle;