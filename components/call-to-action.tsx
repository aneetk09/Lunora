import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Start Your Emotional Intelligence Journey Today</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Join thousands of users who are discovering new insights about their emotional patterns and developing greater
          self-awareness.
        </p>

        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">
          <Link href="/chat">
            <Star className="mr-2 h-5 w-5" />
            Get Started Now
          </Link>
        </Button>
      </div>
    </section>
  )
}

