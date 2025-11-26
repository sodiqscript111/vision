"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
    value: string | number;
    duration?: number;
    className?: string;
}

export default function Counter({ value, duration = 2000, className }: CounterProps) {
    const [displayValue, setDisplayValue] = useState<string | number>(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Parse the value to find the number and any prefix/suffix
    const parseValue = (val: string | number) => {
        if (typeof val === "number") return { number: val, prefix: "", suffix: "" };

        // Regex to separate prefix, number (including decimals and commas), and suffix
        // Example: "$8.7M" -> prefix: "$", number: "8.7", suffix: "M"
        const match = val.match(/^([^0-9.-]*)([\d,.]+)([^0-9]*)$/);
        if (!match) return { number: 0, prefix: "", suffix: val };

        const prefix = match[1];
        const numberStr = match[2].replace(/,/g, ""); // Remove commas for parsing
        const suffix = match[3];
        const number = parseFloat(numberStr);

        return { number: isNaN(number) ? 0 : number, prefix, suffix };
    };

    useEffect(() => {
        if (!inView) return;

        const { number: endValue, prefix, suffix } = parseValue(value);

        // Fallback for non-numeric strings that couldn't be parsed
        if (endValue === 0 && typeof value === "string" && !/\d/.test(value)) {
            setDisplayValue(value);
            return;
        }

        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Easing function for smoother animation (Ease Out Quart)
            const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
            const easedProgress = easeOutQuart(progress);

            const currentNumber = endValue * easedProgress;

            // Determine decimal places based on original value
            const originalString = typeof value === "string" ? value : value.toString();
            const numberMatch = originalString.match(/[\d,.]+/);
            const decimalPlaces = numberMatch && numberMatch[0].includes('.')
                ? numberMatch[0].split('.')[1].length
                : 0;

            // Format number
            let formattedNumber: string;
            if (decimalPlaces > 0) {
                formattedNumber = currentNumber.toFixed(decimalPlaces);
            } else {
                formattedNumber = Math.floor(currentNumber).toLocaleString();
            }

            setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final value matches exactly what was passed
                setDisplayValue(value);
            }
        };

        requestAnimationFrame(animate);
    }, [value, duration, inView]);

    return <span ref={ref} className={className}>{displayValue}</span>;
}
