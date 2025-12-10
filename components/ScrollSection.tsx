"use client";

import { motion } from "framer-motion";

export default function ScrollSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode,
    className?: string,
    delay?: number
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
