"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Send, Calendar, Settings, FileText, PlusCircle, MessageCircle } from "lucide-react"

type Message = {
  id: string
  sender: "user" | "ai"
  text: string
  timestamp: string
}

type Conversation = {
  id: string
  title: string
  date: string
  preview: string
}

export function ChatInterface() {
  // Start with empty conversations
  const [conversations, setConversations] = useState<Conversation[]>([])

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello! I'm Lunora, your emotional intelligence companion. How are you feeling today?",
      timestamp: "04:16 PM",
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [activeConversation, setActiveConversation] = useState<string | null>(null)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])

    // Create a new conversation if this is the first message
    if (!activeConversation) {
      const newConversationId = Date.now().toString()
      const newConversation: Conversation = {
        id: newConversationId,
        title: inputValue.length > 20 ? `${inputValue.substring(0, 20)}...` : inputValue,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        preview: inputValue,
      }

      setConversations([newConversation, ...conversations])
      setActiveConversation(newConversationId)
    }

    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "Thank you for sharing. It sounds like you're experiencing a mix of emotions. Would you like to explore this further or would you prefer some coping strategies?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const startNewChat = () => {
    setMessages([
      {
        id: "new",
        sender: "ai",
        text: "Hello! I'm Lunora, your emotional intelligence companion. How are you feeling today?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ])
    setActiveConversation(null)
  }

  return (
    <div className="flex flex-1 h-[calc(100vh-73px)]">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-800 bg-gray-900/50 hidden md:flex flex-col">
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="font-semibold text-lg">Conversations</h2>
          <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300" onClick={startNewChat}>
            <PlusCircle className="h-5 w-5 mr-1" />
            New Chat
          </Button>
        </div>

        <div className="flex-1 overflow-auto">
          {conversations.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <div className="bg-purple-600/20 rounded-full p-3 mb-4">
                <MessageCircle className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-gray-400 mb-2">No conversations yet</p>
              <p className="text-sm text-gray-500">Start a new chat to begin your emotional intelligence journey</p>
            </div>
          ) : (
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer ${
                  activeConversation === conversation.id ? "bg-gray-800/70" : ""
                }`}
                onClick={() => setActiveConversation(conversation.id)}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium">{conversation.title}</h3>
                  <span className="text-xs text-gray-500">{conversation.date}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{conversation.preview}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="font-semibold">L</span>
            </div>
            <div>
              <h3 className="font-medium">Lunora AI</h3>
              <p className="text-xs text-gray-400">Emotional Intelligence Assistant</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <FileText className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Calendar className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              {message.sender === "ai" && (
                <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center mr-2 mt-1">
                  <span className="font-semibold">L</span>
                </div>
              )}

              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user" ? "bg-purple-600/30 text-white" : "bg-gray-800/70 text-white"
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs text-gray-400 block text-right mt-1">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-800 flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type your message..."
            className="bg-gray-800/50 border-gray-700"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-full" onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

