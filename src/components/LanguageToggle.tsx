import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe } from "lucide-react"
import { trackEvent, getPageName } from "@/lib/analytics"
import { useRouter } from "next/router"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const router = useRouter()
  const pageName = getPageName(router.pathname)

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    trackEvent("language_toggle", "Localization", `Switch_To_${newLanguage.toUpperCase()}_Page_${pageName}`)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-gray-600 hover:text-blue-500 transition-colors px-2 py-1"
    >
      <Globe className="h-3 w-3" />
      <span className="text-xs font-medium">
        {t("language.switch_to")}
      </span>
    </Button>
  )
}
