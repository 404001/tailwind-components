"use client";

import { useState } from "react";

const data = [
    {
        label: "Getting Started",
        links: [
            { selected: true, label: "Instalation", url: "/instalation" },
            { selected: false, label: "Overview", url: "/overview" },
        ],
    },
    {
        label: "Components",
        links: [
            { selected: false, label: "Button", url: "/button" },
            { selected: false, label: "FileTrigger", url: "/file-trigger" },
            { selected: false, label: "Input", url: "/input" },
            { selected: false, label: "Label", url: "/label" },
            { selected: false, label: "Tabs", url: "/tabs" },
        ],
    }
];

export default function Home() {
    const [tabs, setTabs] = useState(data.map(() => ({ open: true })));
    const [links, setLinks] = useState(data.map(tab => tab.links));

    const handleClick = (tabIndex: any, linkIndex: any) => {
        const updatedLinks = links.map((tabLinks, i) =>
            tabLinks.map((link, j) => ({
                ...link,
                selected: i === tabIndex && j === linkIndex,
            }))
        );
        setLinks(updatedLinks);
    };

    const toggleTab = (index: any) => {
        setTabs((prevTabs) =>
            prevTabs.map((tab, i) => ({
                ...tab,
                open: i === index ? !tab.open : tab.open,
            }))
        );
    };

    return (
        <main className="flex items-center justify-center h-screen">
            <div className="flex flex-col w-[200px] h-[500px] items-start">
                {data.map((tab, tabIndex) => (
                    <div key={tabIndex}>
                        <div onClick={() => toggleTab(tabIndex)} className="flex items-center mb-2 mt-4 space-x-2 select-none cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`lucide lucide-chevron-right h-4 w-4 shrink-0 transition-transform duration-200 ${tabs[tabIndex].open ? "rotate-90" : ""
                                    }`}
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span>{tab.label}</span>
                        </div>
                        {tabs[tabIndex].open ? (
                            <div className="ml-2 flex flex-col w-24 border-l border-l-white/10">
                                {links[tabIndex].map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        onClick={() => handleClick(tabIndex, linkIndex)}
                                        className={`w-full h-8 flex text-white/60 items-center justify-center ${link.selected ? "border-l-[1px] border-l-white" : ""
                                            }`}
                                    >
                                        <span className={`px-4 duration-200 transition-all ease-in-out cursor-pointer hover:ml-2 hover:text-white w-full py-1 flex justify-left items-center ${link.selected ? "text-white" : ""}`}>
                                            {link.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </main>
    );
}
