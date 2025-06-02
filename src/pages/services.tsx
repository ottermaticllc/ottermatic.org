
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Settings, Zap, BarChart3 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import CalendlyPopup from "@/components/CalendlyPopup"

export default function Services() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        <title>Services & Pricing - OtterMatic Automation Solutions</title>
        <meta name="description" content="Comprehensive automation and AI services for small businesses including strategy, implementation, and ongoing support." />
      </Head>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("services.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-content">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <Settings className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl card-title-es">{t("services.automation_strategy")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-content">
                  {t("services.automation_strategy_desc")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.process_audit")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.custom_roadmap")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.roi_projections")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <Zap className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl card-title-es">{t("services.ai_integration")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-content">
                  {t("services.ai_integration_desc")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.custom_ai_setup")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.system_integration")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.team_training")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <BarChart3 className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl card-title-es">{t("services.ongoing_support")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-content">
                  {t("services.ongoing_support_desc")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.system_monitoring")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.optimization_reviews")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t("services.priority_support")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl text-center card-title-es">{t("services.internal_organization")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.crm_systems")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.automated_communications")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.realtime_reporting")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.workflow_automation")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl text-center card-title-es">{t("services.marketing_automation")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.lead_generation")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.custom_websites")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.social_media")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.email_marketing")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl text-center card-title-es">{t("services.analytics_insights")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.sales_dashboards")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.funnel_analysis")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.revenue_projections")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("services.ai_insights")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#E6F3FF" }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("services.custom_pricing_title")}
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto text-content">
              {t("services.custom_pricing_desc")}
            </p>
            <CalendlyPopup>
              <Button size="lg" className="text-white btn-text-adjust" style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}>
                {t("services.get_quote")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CalendlyPopup>
          </div>
        </div>
      </section>
    </>
  )
}
