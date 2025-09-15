// import * as React from "react"
// import { cn } from "@/lib/utils"

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "default" | "ghost" | "outline" | "destructive"
//   size?: "default" | "sm" | "lg"
// }

// export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant = "default", size = "default", ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         className={cn(
//           "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
//           variant === "default" && "bg-slate-900 text-white hover:bg-slate-700",
//           variant === "ghost" && "hover:bg-slate-100 text-slate-900",
//           variant === "outline" && "border border-slate-300 hover:bg-slate-100",
//           variant === "destructive" && "bg-red-600 text-white hover:bg-red-700",
//           size === "sm" && "h-8 px-3",
//           size === "lg" && "h-11 px-8",
//           size === "default" && "h-10 px-4",
//           className
//         )}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"
