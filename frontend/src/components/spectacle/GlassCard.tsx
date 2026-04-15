import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

export const GlassCard = ({ children, className, gradient = false, ...props }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass-effect relative overflow-hidden rounded-2xl p-6",
        gradient && "bg-liquid-gradient",
        className
      )}
      {...props}
    >
      {/* Background Glow Effect */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-brand-accent/5 blur-3xl" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
