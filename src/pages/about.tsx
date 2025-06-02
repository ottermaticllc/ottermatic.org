
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, DollarSign, Users, Lightbulb } from "lucide-react"
import CalendlyPopup from "@/components/CalendlyPopup"
import { useLanguage } from "@/contexts/LanguageContext"

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        <title>About OtterMatic - Your Trusted Automation Partner</title>
        <meta name="description" content="Learn about OtterMatic's mission to help small businesses thrive with personalized AI and automation solutions." />
      </Head>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("about.title")}
            </h1>
            <p className="text-xl text-gray-600 text-content">
              {t("about.subtitle")}
            </p>
          </div>

          <div className="prose prose-lg mx-auto mb-16">
            <div className="p-8 rounded-lg mb-8" style={{ backgroundColor: "#E6F3FF" }}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t("about.founder_story")}</h2>
              <p className="text-gray-700 mb-4 text-content">
                {t("about.founder_p1")}
              </p>
              <p className="text-gray-700 mb-4 text-content">
                {t("about.founder_p2")}
              </p>
              <p className="text-gray-700 text-content">
                {t("about.founder_p3")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6 border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 mr-3" style={{ color: "#1E90FF" }} />
                  <h3 className="text-xl font-semibold text-gray-900 card-title-es">{t("about.personal_support")}</h3>
                </div>
                <p className="text-gray-600 text-content">
                  {t("about.personal_support_desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 mr-3" style={{ color: "#1E90FF" }} />
                  <h3 className="text-xl font-semibold text-gray-900 card-title-es">{t("about.custom_pricing")}</h3>
                </div>
                <p className="text-gray-600 text-content">
                  {t("about.custom_pricing_desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 mr-3" style={{ color: "#1E90FF" }} />
                  <h3 className="text-xl font-semibold text-gray-900 card-title-es">{t("about.industry_expertise")}</h3>
                </div>
                <p className="text-gray-600 text-content">
                  {t("about.industry_expertise_desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 mr-3" style={{ color: "#1E90FF" }} />
                  <h3 className="text-xl font-semibold text-gray-900 card-title-es">{t("about.practical_solutions")}</h3>
                </div>
                <p className="text-gray-600 text-content">
                  {t("about.practical_solutions_desc")}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("about.ready_title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-content">
              {t("about.ready_description")}
            </p>
            <CalendlyPopup>
              <Button size="lg" className="text-white btn-text-adjust" style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}>
                {t("about.schedule_call")}
              </Button>
            </CalendlyPopup>
          </div>
        </div>
      </section>
    </>
  )
}
