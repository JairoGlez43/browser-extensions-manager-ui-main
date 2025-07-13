'use client'
import Image from 'next/image';
import { useTheme } from 'next-themes';


const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    if(theme === undefined|| theme === null) {
        return null;
    }

    return(
        <button className="focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-offset-1 focus:ring-offset-[var(--neutral-0)] dark:focus:ring-offset-[var(--neutral-900)] dark:focus:bg-[var(--neutral-600)] focus-visible:ring-[var(--red-500)] dark:focus-visible:ring-[var(--red-400)] rounded-md bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] dark:bg-[var(--neutral-700)] dark:hover:hover:bg-[var(--neutral-600)] p-2.5" onClick={toggleTheme}>
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
        </button>
    )
}
export default ThemeToggle;