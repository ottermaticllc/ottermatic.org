import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageToggle from "@/components/LanguageToggle"
import CalendlyPopup from "@/components/CalendlyPopup"
import { trackEvent, getPageName, createButtonTag } from "@/lib/analytics"

export default function Navigation() {
  const router = useRouter()
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pageName = getPageName(router.pathname)

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/industries", label: t("nav.industries") },
    { href: "/contact", label: t("nav.contact") }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    trackEvent("button_click", "Navigation", `MobileMenu_Toggle_Page_${pageName}`)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNavLinkClick = (linkLabel: string) => {
    trackEvent("navigation_click", "Navigation", `${linkLabel.replace(/\s+/g, "_")}_Page_${pageName}`)
  }

  const handleBookCallClick = () => {
    const buttonText = t("nav.book_call")
    const tag = createButtonTag(buttonText, pageName)
    trackEvent("button_click", "CTA", tag)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                src="/ottermatic-logo-resize-for-website-mb74lmnn.png"
                alt="OtterMatic Logo"
                width={375}
                height={150}
                className="h-20 w-auto"
              />
            </Link>
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
          </div>

          <div className="hidden md:flex items-center nav-items-container">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-gray-600 transition-colors nav-link",
                  router.pathname === item.href ? "font-semibold" : ""
                )}
                style={{
                  color: router.pathname === item.href ? "#1E90FF" : "#6B7280"
                }}
                onClick={() => handleNavLinkClick(item.label)}
                onMouseEnter={(e) => e.currentTarget.style.color = "#1E90FF"}
                onMouseLeave={(e) => e.currentTarget.style.color = router.pathname === item.href ? "#1E90FF" : "#6B7280"}
              >
                {item.label}
              </Link>
            ))}
            <CalendlyPopup>
              <Button 
                className="text-white nav-button" 
                style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }} 
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"} 
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}
                onClick={handleBookCallClick}
              >
                {t("nav.book_call")}
              </Button>
            </CalendlyPopup>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    closeMobileMenu()
                    handleNavLinkClick(item.label)
                  }}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors mobile-nav-link",
                    router.pathname === item.href 
                      ? "font-semibold" 
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                  style={{
                    color: router.pathname === item.href ? "#1E90FF" : "#6B7280",
                    backgroundColor: router.pathname === item.href ? "#E6F3FF" : "transparent"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1E90FF"
                    if (router.pathname !== item.href) {
                      e.currentTarget.style.backgroundColor = "#F9FAFB"
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = router.pathname === item.href ? "#1E90FF" : "#6B7280"
                    e.currentTarget.style.backgroundColor = router.pathname === item.href ? "#E6F3FF" : "transparent"
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <CalendlyPopup>
                  <Button 
                    className="w-full text-white mobile-nav-button"
                    onClick={() => {
                      closeMobileMenu()
                      handleBookCallClick()
                    }}
                    style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}
                  >
                    {t("nav.book_call")}
                  </Button>
                </CalendlyPopup>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
