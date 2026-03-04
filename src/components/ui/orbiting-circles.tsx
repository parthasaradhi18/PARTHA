import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
}

export function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}: OrbitingCirclesProps) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                >
                    <circle
                        className="stroke-white/10 stroke-1"
                        strokeDasharray="4 4"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            {React.Children.map(children, (child, index) => {
                const angle = (360 / React.Children.count(children)) * index;
                return (
                    <div
                        style={
                            {
                                "--duration": duration,
                                "--radius": radius,
                                "--delay": -delay,
                                "--angle": angle,
                            } as React.CSSProperties
                        }
                        className={cn(
                            "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform-gpu animate-orbit items-center justify-center rounded-full [animation-delay:calc(var(--delay)*1000ms)]",
                            { "[animation-direction:reverse]": reverse },
                            className
                        )}
                    >
                        {child}
                    </div>
                );
            })}
        </>
    );
}
