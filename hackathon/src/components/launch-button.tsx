'use client'

import { useState } from 'react'
import Link from 'next/link'
//import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

interface LaunchButtonProps {
  href: string;
  text: string;
}

export function LaunchButton({ href, text }: LaunchButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      asChild
      className="bg-black text-white hover:bg-black/90 px-6 py-3 text-lg rounded-xl" // Slightly larger padding and font size
      size="lg" // Retained size "lg" for a moderate size
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>
        {text}
        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* <ArrowRight className="ml-2 h-5 w-5" /> Maintained a balanced arrow size */}
        </motion.div>
      </Link>
    </Button>
  );
}

