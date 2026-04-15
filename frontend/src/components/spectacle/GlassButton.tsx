import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const GlassButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className, 
  ...props 
}: GlassButtonProps) => {
  const variants = {
    primary: "bg-brand-primary/20 hover:bg-brand-primary/30 border-brand-primary/20 text-brand-background",
    outline: "bg-transparent border-brand-border hover:bg-white/10",
    ghost: "bg-transparent border-transparent hover:bg-white/5",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-base",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "glass-effect inline-flex items-center justify-center rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 -z-10 bg-brand-accent/5 opacity-0 blur-xl transition-opacity hover:opacity-100" />
      {children}
    </motion.button>
  )
}
