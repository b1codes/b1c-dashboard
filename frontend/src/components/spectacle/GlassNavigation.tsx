import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassNavigationProps {
  children: React.ReactNode
  className?: string
  transparent?: boolean
}

export const GlassNavigation = ({ children, className, transparent = false }: GlassNavigationProps) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "glass-effect fixed left-1/2 top-4 z-50 flex h-16 w-[90vw] -translate-x-1/2 items-center rounded-full px-6 py-4",
        transparent && "bg-transparent backdrop-blur-0 border-transparent shadow-none",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-brand-primary/5 opacity-50 blur-3xl" />
      <div className="flex w-full items-center justify-between">{children}</div>
    </motion.nav>
  )
}
