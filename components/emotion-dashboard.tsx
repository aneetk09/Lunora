import { Button } from "@/components/ui/button"
import { FileText, ChevronRight, PlusCircle } from "lucide-react"

const journalEntries = [
  {
    id: "1",
    title: "Morning Reflection",
    date: "2023-06-12",
    preview: "I woke up feeling motivated today. My anxiety levels seem lower than yesterday...",
  },
  {
    id: "2",
    title: "Work Challenges",
    date: "2023-06-10",
    preview: "The project deadline is causing some stress, but I'm managing my reactions better...",
  },
  {
    id: "3",
    title: "Evening Thoughts",
    date: "2023-06-08",
    preview: "After meditation, I noticed a significant improvement in my emotional state...",
  },
]

export function EmotionDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-gray-900/50 rounded-lg border border-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">Recent Journal Entries</h2>
            <p className="text-gray-400 text-sm">Review and reflect on your past thoughts and feelings</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <PlusCircle className="h-5 w-5 mr-2" />
            New Entry
          </Button>
        </div>

        <div className="space-y-4">
          {journalEntries.map((entry) => (
            <div
              key={entry.id}
              className="border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex gap-4">
                <div className="bg-purple-900/30 rounded-full p-2 h-10 w-10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{entry.title}</h3>
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  </div>
                  <p className="text-sm text-gray-500">{entry.date.split("-").slice(1).join("-")}</p>
                  <p className="text-sm text-gray-400 mt-2">{entry.preview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
        <h2 className="text-xl font-bold mb-2">AI Insights</h2>
        <p className="text-gray-400 text-sm mb-6">Personalized observations based on your emotional data</p>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <div className="bg-purple-600 rounded-full h-4 w-4 mt-1"></div>
            <p className="text-gray-300">Your joy levels tend to peak on weekends and drop mid-week.</p>
          </li>
          <li className="flex gap-3">
            <div className="bg-purple-600 rounded-full h-4 w-4 mt-1"></div>
            <p className="text-gray-300">Anxiety appears to correlate with work-related discussions.</p>
          </li>
          <li className="flex gap-3">
            <div className="bg-purple-600 rounded-full h-4 w-4 mt-1"></div>
            <p className="text-gray-300">
              Meditation sessions have shown to increase your calm scores by an average of 30%.
            </p>
          </li>
          <li className="flex gap-3">
            <div className="bg-purple-600 rounded-full h-4 w-4 mt-1"></div>
            <p className="text-gray-300">
              Morning journaling is associated with better emotional regulation throughout the day.
            </p>
          </li>
        </ul>
      </div>

      <div className="lg:col-span-3 bg-gray-900/50 rounded-lg border border-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">Emotional Trends</h2>
            <p className="text-gray-400 text-sm">Track your emotional patterns over time</p>
          </div>
          <Button variant="outline" className="border-gray-700">
            This Week
          </Button>
        </div>

        <div className="h-64 relative">
          {/* Chart grid */}
          <div className="absolute inset-0 grid grid-cols-7 grid-rows-4">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="border-r border-t border-gray-800 border-dashed"></div>
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
            <span>12</span>
            <span>9</span>
            <span>6</span>
            <span>3</span>
            <span>0</span>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-gray-500 pt-2">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

          {/* Chart lines */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 300" preserveAspectRatio="none">
            {/* Joy line */}
            <path
              d="M50,100 L150,150 L250,170 L350,130 L450,90 L550,70 L650,110"
              fill="none"
              stroke="#FFD700"
              strokeWidth="2"
            />

            {/* Calm line */}
            <path
              d="M50,140 L150,160 L250,180 L350,150 L450,120 L550,100 L650,120"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="2"
            />

            {/* Anxiety line */}
            <path
              d="M50,200 L150,150 L250,130 L350,180 L450,220 L550,240 L650,230"
              fill="none"
              stroke="#FF5252"
              strokeWidth="2"
            />

            {/* Sadness line */}
            <path
              d="M50,220 L150,200 L250,210 L350,230 L450,240 L550,250 L650,240"
              fill="none"
              stroke="#9E9E9E"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-4 bg-yellow-400"></div>
            <span className="text-sm">joy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-4 bg-gray-400"></div>
            <span className="text-sm">sadness</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-4 bg-red-400"></div>
            <span className="text-sm">anxiety</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-4 bg-green-400"></div>
            <span className="text-sm">calm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

