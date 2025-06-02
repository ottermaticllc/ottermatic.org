
import { useEffect } from "react"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

interface CalendlyPopupProps {
  children: React.ReactNode
  className?: string
}

export default function CalendlyPopup({ children, className }: CalendlyPopupProps) {
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.head.removeChild(script)
    }
  }, [])

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/jared-ottermatic/15min"
      })
    }
  }

  return (
    <div onClick={openCalendlyPopup} className={className}>
      {children}
    </div>
  )
}
