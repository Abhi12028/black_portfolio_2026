import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

interface MotionProps extends HTMLMotionProps<"div"> {
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeIn: React.FC<MotionProps> = ({
    children,
    delay = 0,
    duration = 0.6,
    className,
    ...props
}) => (
    <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const SlideUp: React.FC<MotionProps> = ({
    children,
    delay = 0,
    duration = 0.7,
    className,
    ...props
}) => (
    <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const ScaleIn: React.FC<MotionProps> = ({
    children,
    delay = 0,
    duration = 0.6,
    className,
    ...props
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const StaggerContainer: React.FC<MotionProps & { staggerChildren?: number }> = ({
    children,
    className,
    staggerChildren = 0.12,
    ...props
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem: React.FC<MotionProps> = ({ children, className, ...props }) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.97 },
        show: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            className={className} 
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const GlowCard: React.FC<MotionProps> = ({ children, className, ...props }) => (
    <motion.div
        whileHover={{ 
            y: -5,
            borderColor: "rgba(56, 189, 248, 0.4)",
            boxShadow: "0px 10px 30px -10px rgba(56, 189, 248, 0.15)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);
