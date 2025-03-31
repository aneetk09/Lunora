"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Brain, Heart, MessageCircle, Smile, Mic, LineChart, Sparkles, PenTool } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Emotion Detection",
    description: "Advanced AI that recognizes and understands your emotions through conversational analysis.",
  },
  {
    icon: Heart,
    title: "Sentiment Analysis",
    description: "Track patterns in your emotional responses and identify negative thought cycles.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    description: "Responsive chatbot that provides immediate emotional support and insights.",
  },
  {
    icon: Smile,
    title: "Multiple Response Modes",
    description: "Choose between supportive, analytical, or humorous interactions based on your needs.",
  },
  {
    icon: Mic,
    title: "Voice & Text Support",
    description: "Communicate through voice or text, whichever feels most comfortable.",
  },
  {
    icon: LineChart,
    title: "Emotion Tracking Dashboard",
    description: "Visualize your emotional patterns over time with interactive graphs.",
  },
  {
    icon: Sparkles,
    title: "Mood-Based Recommendations",
    description: "Receive personalized coping strategies and activities based on your current mood.",
  },
  {
    icon: PenTool,
    title: "AI-Powered Journaling",
    description: "Guided journaling with AI insights to help process complex emotions.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" }) // Triggers when the section is scrolled into view

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How Lunora Helps You</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our emotional intelligence AI uses advanced technology to support your emotional well-being.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
