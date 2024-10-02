## Tailwind Components List

All of this components are only styled by tailwind, no css & no js, only html with tailinwd

- [Menu](https://github.com/404001/tailwind-components/blob/main/components/Menu.md)

<a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>

```tsx
"use client";

import { useState } from "react";

export default function Home() {
    const [links, setLinks] = useState([
        {
            selected: true,
            label: "Packages",
        },
        {
            selected: false,
            label: "Extras",
        },
        {
            selected: false,
            label: "Github",
        }
    ]);

    const [tabs, setTabs] = useState([
        {
            open: true,
        },
    ]);

    const handleClick = (index: any) => {
        const updatedLinks = links.map((link, i) => ({
            ...link,
            selected: i === index,
        }));
        setLinks(updatedLinks);
    };

    const toggleTab = (index: any) => {
        const updatedTabs = tabs.map((tab, i) => ({
            ...tab,
            open: i === index ? !tab.open : tab.open,
        }));
        setTabs(updatedTabs);
    };

    return (
        <main className="flex items-center justify-center h-screen">
            <div className="flex flex-col w-[200px] items-start">
                <div onClick={() => toggleTab(0)} className="flex items-center mb-2 space-x-2 select-none cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-chevron-right h-4 w-4 shrink-0 transition-transform duration-200 ${tabs[0].open ? " rotate-90" : ""}`}><path d="m9 18 6-6-6-6"></path></svg>
                    <span>Components</span>
                </div>
                {tabs[0].open ? (
                    <div className="ml-2 flex flex-col w-24 border-l border-l-white/10">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`w-full h-8 flex text-white/60 items-center justify-center ${link.selected ? "border-l-[1px] border-l-white" : ""
                                    }`}
                            >
                                <span className={`px-4 duration-200 transition-all ease-in-out cursor-pointer hover:ml-2 hover:text-white w-full py-1 flex justify-left items-center ${link.selected ? "text-white" : ""}`}>
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </div>
                ) : ""}
            </div>
        </main>
    );
}

```
