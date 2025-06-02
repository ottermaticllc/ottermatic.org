
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Utensils, ShoppingBag, Heart, Calendar, MessageSquare, BarChart3 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Industries() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        <title>Industries We Serve - OtterMatic Automation Solutions</title>
        <meta name="description" content="Specialized automation and AI solutions for restaurants, hotels, retail shops, and healthcare providers." />
      </Head>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("industries.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("industries.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <Utensils className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl">{t("industries.restaurants_hotels")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {t("industries.restaurants_desc")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.reservation_mgmt")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.review_monitoring")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.staff_scheduling")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.inventory_tracking")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <ShoppingBag className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl">{t("industries.retail_shops")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {t("industries.retail_desc")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.loyalty_program")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.inventory_mgmt")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.social_scheduling")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.sales_analytics")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <Heart className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl">{t("industries.healthcare")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {t("industries.healthcare_desc")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.appointment_scheduling")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.patient_intake")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.followup_care")}</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#1E90FF" }} />
                    <span className="text-sm text-gray-600">{t("industries.insurance_verification")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("industries.automation_examples")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 mr-2" style={{ color: "#1E90FF" }} />
                  <h3 className="font-semibold text-gray-900">{t("industries.smart_scheduling")}</h3>
                </div>
                <p className="text-sm text-gray-600">
                  {t("industries.smart_scheduling_desc")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 mr-2" style={{ color: "#1E90FF" }} />
                  <h3 className="font-semibold text-gray-900">{t("industries.customer_communication")}</h3>
                </div>
                <p className="text-sm text-gray-600">
                  {t("industries.customer_communication_desc")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-6 w-6 mr-2" style={{ color: "#1E90FF" }} />
                  <h3 className="font-semibold text-gray-900">{t("industries.performance_insights")}</h3>
                </div>
                <p className="text-sm text-gray-600">
                  {t("industries.performance_insights_desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("industries.dont_see_industry")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t("industries.dont_see_desc")}
            </p>
            <Button size="lg" className="text-white" style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}>
              {t("industries.discuss_industry")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
