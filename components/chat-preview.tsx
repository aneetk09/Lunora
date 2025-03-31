import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function ChatPreview() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f1a] to-[#141428]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience Real-Time Emotional Support</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {user ? "Start chatting with Lunora for real-time emotional support." : "Try a conversational preview of Lunora's AI chat interface designed for emotional intelligence."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-4 bg-gray-800/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center">
                <span className="font-semibold">L</span>
              </div>
              <div>
                <h3 className="font-medium">Lunora AI</h3>
                <p className="text-xs text-gray-400">Your emotional intelligence companion</p>
              </div>
            </div>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/chat">Full Chat</Link>
            </Button>
          </div>

          <div className="p-6 min-h-[300px] flex flex-col relative">
            {/* Small Character Above Input Box */}
            <div className="absolute -top-10 left-4">
              <img src="/Character.png" alt="Lunora Character" className="h-10 w-10" />
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 max-w-[80%] mb-4">
              <p>Hello! How are you feeling today?</p>
              <span className="text-xs text-gray-500 mt-1 block text-right">15:57</span>
            </div>

            <div className="mt-auto text-center">
              <p className="text-gray-400 mb-4">{user ? "Continue your conversation with Lunora" : "Login to continue the conversation"}</p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href={user ? "/chat" : "/auth"}>{user ? "Start Chatting" : "Login"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
