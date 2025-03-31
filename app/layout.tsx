import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StarBackground } from "@/components/star-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lunora - Emotional Intelligence AI Companion",
  description:
    "Your emotional intelligence companion, helping you navigate your emotional journey with insight and empathy.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <StarBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'