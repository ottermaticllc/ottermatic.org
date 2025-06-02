import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { trackEvent, getPageName } from "@/lib/analytics"
import { useRouter } from "next/router"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you learn about OtterMatic's automation solutions. What challenges is your business facing?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pageName = getPageName(router.pathname)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes("pricing") || message.includes("cost") || message.includes("price")) {
      return "Great question! We create custom pricing packages that fit your specific budget and needs. Every business is different, so we don't use one-size-fits-all pricing. Would you like to schedule a free discovery call to discuss your specific requirements?"
    }
    
    if (message.includes("restaurant") || message.includes("hotel") || message.includes("hospitality")) {
      return "Perfect! We specialize in hospitality automation. We can help with reservation management, customer review monitoring, staff scheduling, and inventory tracking. What specific challenges are you facing in your restaurant or hotel operations?"
    }
    
    if (message.includes("retail") || message.includes("shop") || message.includes("store")) {
      return "Excellent! We work with many retail businesses. Our solutions include customer loyalty programs, inventory management, social media automation, and sales analytics. What's your biggest operational challenge right now?"
    }
    
    if (message.includes("healthcare") || message.includes("dental") || message.includes("therapy") || message.includes("medical")) {
      return "We'd love to help! Our healthcare automation includes appointment scheduling, patient intake forms, follow-up coordination, and insurance verification. What administrative tasks are taking up most of your time?"
    }
    
    if (message.includes("automation") || message.includes("ai") || message.includes("integrate")) {
      return "That's exactly what we do! We help small businesses implement smart automation and AI solutions that save time and money. We focus on practical solutions that actually work for your specific industry. What processes would you like to automate?"
    }
    
    if (message.includes("discovery call") || message.includes("call") || message.includes("meeting")) {
      return "I'd be happy to help you schedule a discovery call! Our free 30-minute calls are no-pressure conversations where we learn about your business and explore how automation could help. You can book directly through our contact page or call us at +1 (703) 939-4175."
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Welcome to OtterMatic. We help small businesses streamline their operations with personalized AI and automation solutions. What industry is your business in?"
    }
    
    if (message.includes("help") || message.includes("support")) {
      return "I'm here to help! OtterMatic specializes in automation and AI solutions for small businesses, particularly restaurants, hotels, retail shops, and healthcare providers. What would you like to know more about?"
    }
    
    return "That's a great question! I'd love to connect you with our team who can give you detailed information specific to your business needs. Would you like to schedule a free discovery call or email us at info@ottermatic.org?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Track the user message
    trackEvent("chatbot_message", "Engagement", `User_Message_Page_${pageName}`)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
      
      // Track the bot response
      trackEvent("chatbot_response", "Engagement", `Bot_Response_Page_${pageName}`)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => {
            setIsOpen(true)
            trackEvent("button_click", "Chatbot", `Open_Chatbot_Page_${pageName}`)
          }}
          className="h-16 w-16 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 flex items-center justify-center relative"
          style={{ backgroundColor: "#1E90FF" }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}
        >
          <div className="w-10 h-10 relative">
            <Image
              src="/ottermatic-outline-no-background-mb7qeez7.png"
              alt="Chat with OtterMatic"
              fill
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </Button>
      )}

      {isOpen && (
        <Card className="w-80 h-96 shadow-xl border-2" style={{ borderColor: "#B3D9FF" }}>
          <CardHeader className="text-white rounded-t-lg p-4" style={{ backgroundColor: "#1E90FF" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/ottermatic-outline-no-background-mb7qeez7.png"
                    alt="OtterMatic"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <CardTitle className="text-sm font-medium">OtterMatic Assistant</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsOpen(false)
                  trackEvent("button_click", "Chatbot", `Close_Chatbot_Page_${pageName}`)
                }}
                className="text-white h-6 w-6 p-0"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs" style={{ color: "#B3D9FF" }}>Ask me about automation solutions!</p>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] p-3 rounded-lg text-sm",
                      message.sender === "user"
                        ? "text-white rounded-br-none"
                        : "bg-gray-100 text-gray-900 rounded-bl-none"
                    )}
                    style={{
                      backgroundColor: message.sender === "user" ? "#1E90FF" : "#F3F4F6"
                    }}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "bot" && (
                        <div className="w-4 h-4 relative mt-0.5">
                          <Image
                            src="/ottermatic-outline-no-background-mb7qeez7.png"
                            alt="OtterMatic"
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      {message.sender === "user" && (
                        <User className="h-4 w-4 mt-0.5" style={{ color: "#B3D9FF" }} />
                      )}
                      <span>{message.text}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 p-3 rounded-lg rounded-bl-none text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 relative">
                        <Image
                          src="/ottermatic-outline-no-background-mb7qeez7.png"
                          alt="OtterMatic"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about automation..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="text-white"
                  style={{ backgroundColor: "#1E90FF" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1873CC"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E90FF"}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
