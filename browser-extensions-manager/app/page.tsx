import Image from "next/image";
//import { Button } from "@/components/ui/button";
import Extensions from './components/Extensions';
import ThemeToggle from './components/Theme-Toggle';
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 my-5 sm:my-10">
      <header className="w-full mb-5 sm:mb-15">
        <div className="flex items-center justify-between bg-[var(--neutral-0)] dark:bg-[var(--neutral-800)] p-2 rounded-xl shadow-lg">
          <div>
            <div className="rounded-full">
              <span>
                {/*<Image
                  src="/assets/images/logo.svg"
                  alt="Browser Extensions Manager Logo"
                  width={125}
                  height={125}
                  className="rounded-full"
                />*/}
                <Logo width={125} height={30}></Logo>
              </span>
            </div>
          </div>
          <ThemeToggle></ThemeToggle>
        </div>
      </header>
      <Extensions></Extensions>
    </div>
  );
}
