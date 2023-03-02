"use client"
// grid
import { motion } from "framer-motion"

export default function Buttons({ children }: any) {
    return (
        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
            <button>{children}</button>
        </motion.div>
    )
}