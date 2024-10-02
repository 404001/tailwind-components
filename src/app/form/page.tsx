"use client"
import Image from "next/image";
import { useRef } from "react";

export default function Form() {

    const inputRefs = useRef([]);

    const handleInputChange = (index: any) => (e: any) => {
        if (e.target.value.length === 1 && index < 5) {
            inputRefs.current[index + 1].focus();
        } else if (e.target.value.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <main className="flex items-center justify-center h-screen gap-4">
            <form className="bg-[#1b1b1b] p-4 border border-white/10 rounded-lg">
                <div className="flex items-center justify-center my-8">
                    <h1>2FA</h1>
                    <p className="text-white/70 font-sans text-[14px] my-1">Enter the code of your 2FA aplication</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        
                        <div className="flex justify-between gap-2">
                            {[...Array(6)].map((_, index) => (

                                <>
                                    <input
                                        key={index}
                                        placeholder="0"
                                        className="w-[40px] h-[40px] text-center text-[16px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none focus:ring-blue-500"
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                    />
                                    {index == 2 ? <span className="h-[40px] mx-2 text-white/20">_</span> : null}
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <button
                            className="font-semibold px-3 w-full text-[14px] bg-blue-700 hover:bg-opacity-80 text-white p-2 rounded-md outline-none"
                            type="submit"
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}
