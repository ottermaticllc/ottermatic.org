
import Navigation from "./Navigation"
import Footer from "./Footer"
import Chatbot from "@/components/Chatbot/Chatbot"
import { useLanguage } from "@/contexts/LanguageContext"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { language } = useLanguage()

  return (
    <div className={`min-h-screen flex flex-col ${language === 'es' ? 'lang-es' : 'lang-en'}`}>
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
