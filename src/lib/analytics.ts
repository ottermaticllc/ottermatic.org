
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export const GA_MEASUREMENT_ID = "G-XBD9FD4WCW"

export const trackEvent = (action: string, category: string = "engagement", label?: string, value?: number) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export const getPageName = (pathname: string): string => {
  const pageMap: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/services": "Services", 
    "/industries": "Industries",
    "/contact": "Contact"
  }
  return pageMap[pathname] || "Unknown"
}

export const createButtonTag = (buttonText: string, pageName: string): string => {
  const cleanText = buttonText
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "_")
    .replace(/^_+|_+$/g, "")
  
  return `${cleanText}_Page_${pageName}`
}
