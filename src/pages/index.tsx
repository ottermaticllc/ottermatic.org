import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Zap, Target } from "lucide-react"
import CalendlyPopup from "@/components/CalendlyPopup"
import { useLanguage } from "@/contexts/LanguageContext"
import { trackEvent, getPageName, createButtonTag } from "@/lib/analytics"
import { useRouter } from "next/router"

export default function Home() {
  const { t } = useLanguage()
  const router = useRouter()
  const pageName = getPageName(router.pathname)

  const handleBookCallClick = (buttonText: string) => {
    const tag = createButtonTag(buttonText, pageName)
    trackEvent("button_click", "CTA", tag)
  }

  return (
    <>
      <Head>
        <title>OtterMatic - AI & Automation Solutions for Small Business</title>
        <meta name="description" content="Streamline your small business operations with personalized AI and automation solutions. Get custom pricing and dedicated support." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-gradient-to-br from-blue-50 to-white py-20" style={{ background: "linear-gradient(to bottom right, #E6F3FF, white)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("home.title")} <br />
            {t("home.subtitle")}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-content">
            {t("home.description")}
          </p>
          <CalendlyPopup>
            <Button 
              size="lg" 
              className="text-white text-lg px-8 py-4 btn-text-adjust" 
              style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}
              onClick={() => handleBookCallClick(t("home.cta"))}
            >
              {t("home.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CalendlyPopup>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("home.how_we_work")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-content">
              {t("home.process_description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#E6F3FF" }}>
                  <Users className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 card-title-es">{t("home.step1_title")}</h3>
                <p className="text-gray-600 text-content">
                  {t("home.step1_description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#E6F3FF" }}>
                  <Target className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 card-title-es">{t("home.step2_title")}</h3>
                <p className="text-gray-600 text-content">
                  {t("home.step2_description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#E6F3FF" }}>
                  <Zap className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 card-title-es">{t("home.step3_title")}</h3>
                <p className="text-gray-600 text-content">
                  {t("home.step3_description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("home.ready_title")}
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-content">
            {t("home.ready_description")}
          </p>
          <CalendlyPopup>
            <Button 
              size="lg" 
              className="text-white text-lg px-8 py-4 btn-text-adjust" 
              style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}
              onClick={() => handleBookCallClick(t("home.start_call"))}
            >
              {t("home.start_call")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CalendlyPopup>
        </div>
      </section>
    </>
  )
}
