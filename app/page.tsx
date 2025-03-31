"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { ChatPreview } from "@/components/chat-preview"
import { CallToAction } from "@/components/call-to-action"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Home() {
  const text = "Lunora"
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex(index + 1)
      }, 150) // Adjust typing speed here
      return () => clearTimeout(timeout)
    } else {
      // Wait before restarting animation
      setTimeout(() => {
        setDisplayText("")
        setIndex(0)
      }, 2000) // Adjust delay before restart
    }
  }, [index, text])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500) // Adjust blinking speed
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <main className="min-h-screen bg-[#0f0f1a] text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Image above text */}
          <div className="flex justify-center mb-4">
          <img
            src="/char.png"
            alt="Character"
            className="w-72 md:w-96 mb-4" // Adjust size as needed
          />
          </div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displayText}
            <span
              className={`transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`}
              style={{ fontSize: "0.8em", color: "#A855F7" }} // Purple color
            >
              |
            </span>
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              <Link href="/chat">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chatting
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-full px-8"
            >
              <Link href="#features">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Emotion bubbles */}
        <div className="absolute left-1/4 top-1/2 w-32 h-32 md:w-48 md:h-40 rounded-full bg-pink-500/20 blur-3xl"></div>
        <div className="absolute right-1/3 top-1/3 w-40 h-40 md:w-64 md:h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-24 h-24 md:w-40 md:h-40 rounded-full bg-cyan-500/20 blur-3xl"></div>

        
      </section>

      {/* Features Section */}
      <Features />

      {/* Chat Preview Section */}
      <ChatPreview />

      {/* Call to Action Section */}
      <CallToAction />

      <Footer />
    </main>
  )
}




// import { Button } from "@/components/ui/button"
// import { Footer } from "@/components/footer"
// import { Header } from "@/components/header"
// import { Features } from "@/components/features"
// import { ChatPreview } from "@/components/chat-preview"
// import { CallToAction } from "@/components/call-to-action"
// import Link from "next/link"
// import { ArrowRight, MessageCircle } from "lucide-react"


// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#0f0f1a] text-white flex flex-col">
//       <Header />

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 relative overflow-hidden">
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">Lunora</h1>
//           {/* <h1 className="text-6xl md:text-8xl font-bold mb-6 font-pixel">Lunora</h1> */}


//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
//               <Link href="/chat">
//                 <MessageCircle className="mr-2 h-5 w-5" />
//                 Start Chatting
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-full px-8"
//             >
//               <Link href="#features">
//                 Explore Features
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>

//         {/* Emotion bubbles */}
//         <div className="absolute left-1/4 top-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-pink-500/20 blur-3xl"></div>
//         <div className="absolute right-1/3 top-1/3 w-40 h-40 md:w-64 md:h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
//         <div className="absolute right-1/4 bottom-1/4 w-24 h-24 md:w-40 md:h-40 rounded-full bg-cyan-500/20 blur-3xl"></div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 border border-purple-500 rounded-full p-2 animate-bounce">
//           <div className="w-6 h-10 rounded-full border-2 border-purple-500 flex justify-center">
//             <div className="w-1 h-3 bg-purple-500 rounded-full mt-1"></div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <Features />

//       {/* Chat Preview Section */}
//       <ChatPreview />

//       {/* Call to Action Section */}
//       <CallToAction />

//       <Footer />
//     </main>
//   )
// }

