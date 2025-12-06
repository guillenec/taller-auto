"use client";

import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

export default function AnimatedSection({ children, delay = 0, className = "" }: Props) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.section>
    );
}
