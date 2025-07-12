'use client'
import Image from 'next/image';
import { useTheme } from 'next-themes';


const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return(
        <div className="rounded-md bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] dark:bg-[var(--neutral-700)] dark:hover:hover:bg-[var(--neutral-600)] p-2.5" onClick={toggleTheme}>
            <span>
              {theme === 'dark'?
                <Image
                    src="/assets/images/icon-sun.svg"
                    alt="Browser Extensions Manager Sun Image"
                    width={15}
                    height={15}
                    className="rounded-full"
                >  
                </Image>:
                <Image
                    src="/assets/images/icon-moon.svg"
                    alt="Browser Extensions Manager Sun Image"
                    width={15}
                    height={15}
                    className="rounded-full"
                >  
                </Image>
              }
            </span>
        </div>
    )
}
export default ThemeToggle;