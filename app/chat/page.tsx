import { Header } from "@/components/header"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] flex flex-col">
      <Header />
      <ChatInterface />
    </div>
  )
}

