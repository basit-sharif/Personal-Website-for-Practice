"use client"
import { motion } from "framer-motion"


export default function Framer() {
    return (
        <motion.div
            className="bg-blue-600 h-96 w-full" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
        />
    )
}
// For animate on x axis and to bring in low opacity and after comming opacity will full
// initial = {{ opacity: 0 }}
// animate = {{ x: 100, opacity: 2 }}

// Hover effects
// whileHover={{  scale: 1.2 }}

// when focus
// whileTap={{ scale: 1.1 }}

// When it will come in front of you
// whileInView={{ opacity: 13 }}

// It will takes time to animate how much you will give
// transition={{ duration: 2.5 }}

// How much scale you want like in x and y axis mean to zoom up
// scale: 0.5

// Rotate on value which you give
// rotate: [0, 90, 0],

// Change border Radius depneds upon your provided value
// borderRadius: ["0%", "50%", "0%"]

// You need to use this for rotate borderRadius and scale
// transition={{
//     duration: 2,
//     times: [0, 0.2, 0.5, 0.8, 1],
//     repeat: Infinity,
// }}

// Drag
// drag="y"

// How much distance do you want to give him to be able to drag by user
// dragConstraints={{ top: -100, bottom: 300 }}