
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About", 
    "nav.services": "Services & Pricing",
    "nav.industries": "Industries",
    "nav.contact": "Contact",
    "nav.book_call": "Book Discovery Call",
    
    // Home Page
    "home.title": "Automation and AI Integrations",
    "home.subtitle": "for Small Businesses",
    "home.description": "Get personalized attention and customized solutions that actually fit your business. No cookie-cutter approaches, no overwhelming tech jargon—just results that matter.",
    "home.cta": "Book a Free Discovery Call",
    "home.how_we_work": "How We Work Together",
    "home.process_description": "Our simple 3-step process ensures you get exactly what your business needs",
    "home.step1_title": "1. Discovery Call",
    "home.step1_description": "We learn about your business, challenges, and goals. No sales pressure—just genuine conversation about what you need.",
    "home.step2_title": "2. Custom Strategy", 
    "home.step2_description": "We design a tailored automation and AI plan that fits your budget, timeline, and specific industry needs.",
    "home.step3_title": "3. Implementation & Support",
    "home.step3_description": "We implement your solutions and provide ongoing support. You focus on your business while we handle the tech.",
    "home.ready_title": "Ready to Streamline Your Operations?",
    "home.ready_description": "Join small businesses who've already transformed their operations with our personalized approach.",
    "home.start_call": "Schedule a 15 Minute Discovery Call",
    
    // About Page
    "about.title": "Why OtterMatic Exists",
    "about.subtitle": "We believe small businesses deserve the same powerful tools as big corporations—without the complexity or cost.",
    "about.founder_story": "Our Founder's Story",
    "about.founder_p1": "After years of watching small business owners struggle with outdated systems and overwhelming tech solutions, our founder realized there was a better way. Small businesses don't need enterprise-level complexity and one-stop shop integrations—they need smart, simple solutions that address their specific needs.",
    "about.founder_p2": "That's why OtterMatic was born. We're not here to sell you the latest shiny tech. We're here to understand your business, identify what's slowing you down, and implement solutions that make your life easier—not harder. We customize pricing and solutions for your specific budget and business needs.",
    "about.founder_p3": "Just like real otters, we hold your hand throughout the process. We ensure that you know exactly what we are building for you, how to use it, and make sure your goals never drift away.",
    "about.personal_support": "Personal Support",
    "about.personal_support_desc": "You'll work directly with our team, not a call center. We get to know your business and provide ongoing support that feels personal.",
    "about.custom_pricing": "Custom Pricing",
    "about.custom_pricing_desc": "No one-size-fits-all packages. We create pricing that works for your budget and scales with your growth.",
    "about.industry_expertise": "Industry Expertise",
    "about.industry_expertise_desc": "Deep understanding of hospitality, retail, and care provider operations. We know your challenges because we've solved them before.",
    "about.practical_solutions": "Practical Solutions",
    "about.practical_solutions_desc": "We focus on solutions that deliver real results, not impressive demos. Every recommendation is designed to save you time and money.",
    "about.ready_title": "Ready to Work Together?",
    "about.ready_description": "Let's have a conversation about how we can help your business thrive with the right tools and support.",
    "about.schedule_call": "Schedule Your Discovery Call",

    // Services Page
    "services.title": "Services & Pricing",
    "services.subtitle": "Comprehensive automation and AI solutions designed specifically for small businesses. Everything you need to streamline operations and accelerate growth.",
    "services.automation_strategy": "Automation Strategy",
    "services.automation_strategy_desc": "We analyze your current processes and design a comprehensive automation roadmap tailored to your business.",
    "services.ai_integration": "AI Tool Integration",
    "services.ai_integration_desc": "Implementation of AI-powered tools that integrate seamlessly with your existing systems and workflows.",
    "services.ongoing_support": "Ongoing Support",
    "services.ongoing_support_desc": "Continuous monitoring, optimization, and support to ensure your automation solutions keep delivering results.",
    "services.process_audit": "Process audit and optimization",
    "services.custom_roadmap": "Custom automation roadmap",
    "services.roi_projections": "ROI projections and timeline",
    "services.custom_ai_setup": "Custom AI solution setup",
    "services.system_integration": "System integration and testing",
    "services.team_training": "Team training and documentation",
    "services.system_monitoring": "24/7 system monitoring",
    "services.optimization_reviews": "Regular optimization reviews",
    "services.priority_support": "Priority technical support",
    "services.internal_organization": "Internal Organization",
    "services.marketing_automation": "Marketing Automation",
    "services.analytics_insights": "Analytics & Insights",
    "services.crm_systems": "CRM systems setup and optimization",
    "services.automated_communications": "Automated customer communications",
    "services.realtime_reporting": "Real-time reporting and alerts",
    "services.workflow_automation": "Workflow automation",
    "services.lead_generation": "Lead generation systems",
    "services.custom_websites": "Custom websites and chatbots",
    "services.social_media": "Social media content automation",
    "services.email_marketing": "Email marketing campaigns",
    "services.sales_dashboards": "Custom sales dashboards",
    "services.funnel_analysis": "Funnel analysis and optimization",
    "services.revenue_projections": "Revenue projections and forecasting",
    "services.ai_insights": "AI-powered business insights",
    "services.custom_pricing_title": "Custom Pricing for Your Business",
    "services.custom_pricing_desc": "Every business is unique, and so are our solutions. We create pricing packages that fit your budget and scale with your growth.",
    "services.get_quote": "Get Your Custom Quote",

    // Industries Page
    "industries.title": "Industries We Specialize In",
    "industries.subtitle": "We focus on specific small business industries where we can deliver the most impact. Deep expertise means better solutions for your unique challenges.",
    "industries.restaurants_hotels": "Restaurants & Hotels",
    "industries.restaurants_desc": "Streamline operations from reservations to customer feedback with hospitality-focused automation.",
    "industries.retail_shops": "Retail Shops",
    "industries.retail_desc": "Boost sales and customer loyalty with smart retail automation that works for small shops.",
    "industries.healthcare": "Healthcare Providers",
    "industries.healthcare_desc": "Improve patient care and reduce administrative burden with healthcare-specific automation.",
    "industries.reservation_mgmt": "Automated reservation management",
    "industries.review_monitoring": "Customer review monitoring & response",
    "industries.staff_scheduling": "Staff scheduling optimization",
    "industries.inventory_tracking": "Inventory tracking & alerts",
    "industries.loyalty_program": "Customer loyalty program automation",
    "industries.inventory_mgmt": "Inventory management & reordering",
    "industries.social_scheduling": "Social media content scheduling",
    "industries.sales_analytics": "Sales analytics & forecasting",
    "industries.appointment_scheduling": "Appointment scheduling & reminders",
    "industries.patient_intake": "Patient intake form automation",
    "industries.followup_care": "Follow-up care coordination",
    "industries.insurance_verification": "Insurance verification workflows",
    "industries.automation_examples": "Real Automation Examples",
    "industries.smart_scheduling": "Smart Scheduling",
    "industries.smart_scheduling_desc": "Automatically sync appointments across platforms, send reminders, and handle rescheduling requests.",
    "industries.customer_communication": "Customer Communication",
    "industries.customer_communication_desc": "AI-powered chatbots that handle common questions and route complex issues to your team.",
    "industries.performance_insights": "Performance Insights",
    "industries.performance_insights_desc": "Daily dashboards showing key metrics and automated alerts when attention is needed.",
    "industries.dont_see_industry": "Don't See Your Industry?",
    "industries.dont_see_desc": "While we specialize in these areas, we're always exploring new industries. Let's discuss how our expertise might apply to your business.",
    "industries.discuss_industry": "Discuss Your Industry",

    // Contact Page
    "contact.title": "Let's Start the Conversation",
    "contact.subtitle": "Ready to streamline your operations? Choose the way that works best for you to get started.",
    "contact.book_discovery": "Book a Discovery Call",
    "contact.book_discovery_desc": "Schedule a free 15-minute call to discuss your business needs and explore automation opportunities.",
    "contact.chat_needs": "Chat About Your Needs",
    "contact.chat_needs_desc": "Describe your business challenges and get instant insights on how automation could help.",
    "contact.send_details": "Send Us Details",
    "contact.send_details_desc": "Prefer to write? Send us your information and we'll get back to you within 24 hours.",
    "contact.start_chatting": "Start Chatting",
    "contact.prefer_call_email": "Prefer to Call or Email?",
    "contact.response_time": "We typically respond within 2-4 hours during business hours (9 AM - 6 PM EST)",
    
    // Language Toggle
    "language.switch_to": "Español"
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.services": "Servicios y Precios", 
    "nav.industries": "Industrias",
    "nav.contact": "Contacto",
    "nav.book_call": "Reservar Llamada de Descubrimiento",
    
    // Home Page
    "home.title": "Automatización e Integraciones de IA",
    "home.subtitle": "para Pequeñas Empresas",
    "home.description": "Obtenga atención personalizada y soluciones personalizadas que realmente se adapten a su negocio. Sin enfoques genéricos, sin jerga tecnológica abrumadora, solo resultados que importan.",
    "home.cta": "Reservar una Llamada de Descubrimiento Gratuita",
    "home.how_we_work": "Cómo Trabajamos Juntos",
    "home.process_description": "Nuestro simple proceso de 3 pasos asegura que obtenga exactamente lo que su negocio necesita",
    "home.step1_title": "1. Llamada de Descubrimiento",
    "home.step1_description": "Aprendemos sobre su negocio, desafíos y objetivos. Sin presión de ventas, solo conversación genuina sobre lo que necesita.",
    "home.step2_title": "2. Estrategia Personalizada",
    "home.step2_description": "Diseñamos un plan de automatización e IA personalizado que se adapte a su presupuesto, cronograma y necesidades específicas de la industria.",
    "home.step3_title": "3. Implementación y Soporte",
    "home.step3_description": "Implementamos sus soluciones y brindamos soporte continuo. Usted se enfoca en su negocio mientras nosotros manejamos la tecnología.",
    "home.ready_title": "¿Listo para Optimizar sus Operaciones?",
    "home.ready_description": "Únase a las pequeñas empresas que ya han transformado sus operaciones con nuestro enfoque personalizado.",
    "home.start_call": "Programe una Llamada de Descubrimiento de 15 Minutos",
    
    // About Page
    "about.title": "Por Qué Existe OtterMatic",
    "about.subtitle": "Creemos que las pequeñas empresas merecen las mismas herramientas poderosas que las grandes corporaciones, sin la complejidad o el costo.",
    "about.founder_story": "La Historia de Nuestro Fundador",
    "about.founder_p1": "Después de años de ver a los propietarios de pequeñas empresas luchar con sistemas obsoletos y soluciones tecnológicas abrumadoras, nuestro fundador se dio cuenta de que había una mejor manera. Las pequeñas empresas no necesitan complejidad a nivel empresarial e integraciones de ventanilla única: necesitan soluciones inteligentes y simples que aborden sus necesidades específicas.",
    "about.founder_p2": "Por eso nació OtterMatic. No estamos aquí para venderle la última tecnología brillante. Estamos aquí para entender su negocio, identificar lo que lo está ralentizando e implementar soluciones que hagan su vida más fácil, no más difícil. Personalizamos precios y soluciones para su presupuesto específico y necesidades comerciales.",
    "about.founder_p3": "Al igual que las nutrias reales, le tomamos de la mano durante todo el proceso. Nos aseguramos de que sepa exactamente lo que estamos construyendo para usted, cómo usarlo y nos aseguramos de que sus objetivos nunca se alejen.",
    "about.personal_support": "Soporte Personal",
    "about.personal_support_desc": "Trabajará directamente con nuestro equipo, no con un centro de llamadas. Conocemos su negocio y brindamos soporte continuo que se siente personal.",
    "about.custom_pricing": "Precios Personalizados",
    "about.custom_pricing_desc": "Sin paquetes únicos para todos. Creamos precios que funcionan para su presupuesto y escalan con su crecimiento.",
    "about.industry_expertise": "Experiencia en la Industria",
    "about.industry_expertise_desc": "Comprensión profunda de las operaciones de hospitalidad, comercio minorista y proveedores de atención. Conocemos sus desafíos porque los hemos resuelto antes.",
    "about.practical_solutions": "Soluciones Prácticas",
    "about.practical_solutions_desc": "Nos enfocamos en soluciones que entregan resultados reales, no demostraciones impresionantes. Cada recomendación está diseñada para ahorrarle tiempo y dinero.",
    "about.ready_title": "¿Listo para Trabajar Juntos?",
    "about.ready_description": "Tengamos una conversación sobre cómo podemos ayudar a que su negocio prospere con las herramientas y el soporte adecuados.",
    "about.schedule_call": "Programe su Llamada de Descubrimiento",

    // Services Page
    "services.title": "Servicios y Precios",
    "services.subtitle": "Soluciones integrales de automatización e IA diseñadas específicamente para pequeñas empresas. Todo lo que necesita para optimizar operaciones y acelerar el crecimiento.",
    "services.automation_strategy": "Estrategia de Automatización",
    "services.automation_strategy_desc": "Analizamos sus procesos actuales y diseñamos una hoja de ruta de automatización integral adaptada a su negocio.",
    "services.ai_integration": "Integración de Herramientas de IA",
    "services.ai_integration_desc": "Implementación de herramientas impulsadas por IA que se integran perfectamente con sus sistemas y flujos de trabajo existentes.",
    "services.ongoing_support": "Soporte Continuo",
    "services.ongoing_support_desc": "Monitoreo continuo, optimización y soporte para asegurar que sus soluciones de automatización sigan entregando resultados.",
    "services.process_audit": "Auditoría y optimización de procesos",
    "services.custom_roadmap": "Hoja de ruta de automatización personalizada",
    "services.roi_projections": "Proyecciones de ROI y cronograma",
    "services.custom_ai_setup": "Configuración de solución de IA personalizada",
    "services.system_integration": "Integración y prueba de sistemas",
    "services.team_training": "Capacitación del equipo y documentación",
    "services.system_monitoring": "Monitoreo del sistema 24/7",
    "services.optimization_reviews": "Revisiones regulares de optimización",
    "services.priority_support": "Soporte técnico prioritario",
    "services.internal_organization": "Organización Interna",
    "services.marketing_automation": "Automatización de Marketing",
    "services.analytics_insights": "Análisis e Insights",
    "services.crm_systems": "Configuración y optimización de sistemas CRM",
    "services.automated_communications": "Comunicaciones automatizadas con clientes",
    "services.realtime_reporting": "Informes y alertas en tiempo real",
    "services.workflow_automation": "Automatización de flujo de trabajo",
    "services.lead_generation": "Sistemas de generación de leads",
    "services.custom_websites": "Sitios web personalizados y chatbots",
    "services.social_media": "Automatización de contenido de redes sociales",
    "services.email_marketing": "Campañas de marketing por correo electrónico",
    "services.sales_dashboards": "Paneles de ventas personalizados",
    "services.funnel_analysis": "Análisis y optimización de embudo",
    "services.revenue_projections": "Proyecciones de ingresos y pronósticos",
    "services.ai_insights": "Insights empresariales impulsados por IA",
    "services.custom_pricing_title": "Precios Personalizados para su Negocio",
    "services.custom_pricing_desc": "Cada negocio es único, y también lo son nuestras soluciones. Creamos paquetes de precios que se adaptan a su presupuesto y escalan con su crecimiento.",
    "services.get_quote": "Obtenga su Cotización Personalizada",

    // Industries Page
    "industries.title": "Industrias en las que nos Especializamos",
    "industries.subtitle": "Nos enfocamos en industrias específicas de pequeñas empresas donde podemos entregar el mayor impacto. La experiencia profunda significa mejores soluciones para sus desafíos únicos.",
    "industries.restaurants_hotels": "Restaurantes y Hoteles",
    "industries.restaurants_desc": "Optimice las operaciones desde reservas hasta comentarios de clientes con automatización enfocada en hospitalidad.",
    "industries.retail_shops": "Tiendas Minoristas",
    "industries.retail_desc": "Impulse las ventas y la lealtad del cliente con automatización inteligente para comercio minorista que funciona para tiendas pequeñas.",
    "industries.healthcare": "Proveedores de Atención Médica",
    "industries.healthcare_desc": "Mejore la atención al paciente y reduzca la carga administrativa con automatización específica para atención médica.",
    "industries.reservation_mgmt": "Gestión automatizada de reservas",
    "industries.review_monitoring": "Monitoreo y respuesta de reseñas de clientes",
    "industries.staff_scheduling": "Optimización de horarios del personal",
    "industries.inventory_tracking": "Seguimiento de inventario y alertas",
    "industries.loyalty_program": "Automatización de programa de lealtad del cliente",
    "industries.inventory_mgmt": "Gestión de inventario y reordenamiento",
    "industries.social_scheduling": "Programación de contenido de redes sociales",
    "industries.sales_analytics": "Análisis de ventas y pronósticos",
    "industries.appointment_scheduling": "Programación de citas y recordatorios",
    "industries.patient_intake": "Automatización de formularios de admisión de pacientes",
    "industries.followup_care": "Coordinación de atención de seguimiento",
    "industries.insurance_verification": "Flujos de trabajo de verificación de seguros",
    "industries.automation_examples": "Ejemplos Reales de Automatización",
    "industries.smart_scheduling": "Programación Inteligente",
    "industries.smart_scheduling_desc": "Sincronizar automáticamente citas entre plataformas, enviar recordatorios y manejar solicitudes de reprogramación.",
    "industries.customer_communication": "Comunicación con el Cliente",
    "industries.customer_communication_desc": "Chatbots impulsados por IA que manejan preguntas comunes y dirigen problemas complejos a su equipo.",
    "industries.performance_insights": "Insights de Rendimiento",
    "industries.performance_insights_desc": "Paneles diarios que muestran métricas clave y alertas automatizadas cuando se necesita atención.",
    "industries.dont_see_industry": "¿No Ve su Industria?",
    "industries.dont_see_desc": "Aunque nos especializamos en estas áreas, siempre estamos explorando nuevas industrias. Hablemos sobre cómo nuestra experiencia podría aplicarse a su negocio.",
    "industries.discuss_industry": "Discuta su Industria",

    // Contact Page
    "contact.title": "Comencemos la Conversación",
    "contact.subtitle": "¿Listo para optimizar sus operaciones? Elija la forma que mejor funcione para usted para comenzar.",
    "contact.book_discovery": "Reservar una Llamada de Descubrimiento",
    "contact.book_discovery_desc": "Programe una llamada gratuita de 15 minutos para discutir las necesidades de su negocio y explorar oportunidades de automatización.",
    "contact.chat_needs": "Chatee sobre sus Necesidades",
    "contact.chat_needs_desc": "Describa los desafíos de su negocio y obtenga insights instantáneos sobre cómo la automatización podría ayudar.",
    "contact.send_details": "Envíenos Detalles",
    "contact.send_details_desc": "¿Prefiere escribir? Envíenos su información y le responderemos dentro de 24 horas.",
    "contact.start_chatting": "Comenzar a Chatear",
    "contact.prefer_call_email": "¿Prefiere Llamar o Enviar un Correo?",
    "contact.response_time": "Típicamente respondemos dentro de 2-4 horas durante horario comercial (9 AM - 6 PM EST)",
    
    // Language Toggle
    "language.switch_to": "English"
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("ottermatic-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("ottermatic-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
