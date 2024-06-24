import ThemeToggler from "@/components/ThemeToggler"
import React from "react"

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
        {children}

      <div className="absolute bottom-7 right-5">
        <ThemeToggler/>
      </div>

    </div>
  )
}

export default AuthLayout