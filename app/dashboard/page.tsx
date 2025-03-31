import { Header } from "@/components/header"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { EmotionDashboard } from "@/components/emotion-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <DashboardTabs />
        <div className="mt-8">
          <EmotionDashboard />
        </div>
      </div>
    </div>
  )
}

