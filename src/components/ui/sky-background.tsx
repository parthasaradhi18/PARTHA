"use client";

import React, { useEffect, useState } from "react";

export function SkyBackground() {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: string; duration: string }[]>([]);

    useEffect(() => {
        // Generate random stars on mount to prevent hydration mismatch
        const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1.5,
            delay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 10 + 20}s`, // Between 20s and 30s
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
            <style>{`
                @keyframes star-move {
                    0% { transform: translateX(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateX(-150px); opacity: 0; }
                }
            `}</style>

            {/* Glowing Moon on the left side */}
            <div className="absolute top-[8%] left-[8%] md:top-[12%] md:left-[10%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-400 shadow-[0_0_100px_rgba(253,224,71,0.6)] opacity-100 transition-all duration-1000">
                {/* Subtle moon craters */}
                <div className="absolute top-[20%] left-[25%] w-4 h-4 md:w-6 md:h-6 rounded-full bg-black/10 blur-[1px]" />
                <div className="absolute top-[45%] left-[60%] w-5 h-5 md:w-10 md:h-10 rounded-full bg-black/10 blur-[1px]" />
                <div className="absolute top-[65%] left-[30%] w-4 h-4 md:w-8 md:h-8 rounded-full bg-black/10 blur-[1px]" />
            </div>

            {/* Moving Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `star-move ${star.duration} linear ${star.delay} infinite`
                    }}
                />
            ))}
        </div>
    );
}
