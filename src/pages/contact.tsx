
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageCircle, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect } from "react"

export default function Contact() {
  const { t } = useLanguage()

  useEffect(() => {
    // Load Airtable embed script
    const script = document.createElement("script")
    script.src = "https://static.airtable.com/js/embed/embed_snippet_v1.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Contact OtterMatic - Get Your Free Discovery Call</title>
        <meta name="description" content="Ready to streamline your business? Contact OtterMatic for a free discovery call and custom automation quote." />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <Calendar className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl">{t("contact.book_discovery")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  {t("contact.book_discovery_desc")}
                </p>
                <div className="w-full">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/jared-ottermatic/15min" 
                    style={{ minWidth: "320px", height: "700px" }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <MessageCircle className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl">{t("contact.chat_needs")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  {t("contact.chat_needs_desc")}
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-sm text-gray-500 mb-2">AI Chatbot Interface</p>
                  <div className="h-32 bg-white border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                    <span className="text-gray-400">Chatbot Widget Here</span>
                  </div>
                </div>
                <Button className="w-full text-white" style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}>
                  {t("contact.start_chatting")}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors" style={{ borderColor: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#B3D9FF"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F3FF" }}>
                  <Mail className="h-8 w-8" style={{ color: "#1E90FF" }} />
                </div>
                <CardTitle className="text-xl">{t("contact.send_details")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  {t("contact.send_details_desc")}
                </p>
                <div className="w-full">
                  <iframe 
                    className="airtable-embed w-full rounded-lg border border-gray-200" 
                    src="https://airtable.com/embed/appqI8RZJVMbaGQwg/pag3eYlHOgJW8Rnou/form" 
                    frameBorder="0" 
                    width="100%" 
                    height="533"
                    style={{ background: "transparent" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#E6F3FF" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("contact.prefer_call_email")}
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" style={{ color: "#1E90FF" }} />
                <span className="text-gray-700">+1 (703) 939-4175</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" style={{ color: "#1E90FF" }} />
                <span className="text-gray-700">info@ottermatic.org</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              {t("contact.response_time")}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
