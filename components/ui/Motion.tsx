import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MotionProps extends HTMLMotionProps<"div"> {
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeIn: React.FC<MotionProps> = ({
    children,
    delay = 0,
    duration = 0.5,
    className,
    ...props
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const SlideUp: React.FC<MotionProps> = ({
    children,
    delay = 0,
    duration = 0.5,
    className,
    ...props
}) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for premium feel
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const ScaleIn: React.FC<MotionProps> = ({
    children,
    delay = 0,
    duration = 0.5,
    className,
    ...props
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

export const StaggerContainer: React.FC<MotionProps & { staggerChildren?: number }> = ({
    children,
    className,
    staggerChildren = 0.1,
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
            viewport={{ once: true, margin: "-100px" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem: React.FC<MotionProps> = ({ children, className, ...props }) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.div variants={itemVariants} className={className} {...props}>
            {children}
        </motion.div>
    );
};
