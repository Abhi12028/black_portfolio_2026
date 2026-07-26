import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect if touch screen / mobile pointer
        if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
            setIsTouchDevice(true);
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
              window.getComputedStyle(target).cursor === 'pointer' || 
              target.tagName === 'A' || 
              target.tagName === 'BUTTON'
            );
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer Glowing Cyan Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-cyan-400/60 rounded-full pointer-events-none z-50 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isMouseDown ? 0.8 : isPointer ? 1.8 : 1,
                    borderColor: isPointer ? '#38bdf8' : 'rgba(255,255,255,0.4)',
                }}
                transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                    mass: 0.15
                }}
            />

            {/* Inner Precision Core Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-300 rounded-full pointer-events-none z-50 shadow-[0_0_10px_#38bdf8]"
                animate={{
                    x: position.x - 5,
                    y: position.y - 5,
                    scale: isMouseDown ? 1.5 : isPointer ? 0.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    mass: 0.01
                }}
            />
        </>
    );
};

export default CustomCursor;
