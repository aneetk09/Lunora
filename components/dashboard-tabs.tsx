"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Activity } from "lucide-react"

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("journal")

  return (
    <div className="border-b border-gray-800">
      <div className="flex gap-2">
        <Button
          variant={activeTab === "journal" ? "default" : "ghost"}
          className={`rounded-t-lg rounded-b-none ${
            activeTab === "journal" ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("journal")}
        >
          <FileText className="h-5 w-5 mr-2" />
          Journal Entries
        </Button>
        <Button
          variant={activeTab === "activities" ? "default" : "ghost"}
          className={`rounded-t-lg rounded-b-none ${
            activeTab === "activities" ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("activities")}
        >
          <Activity className="h-5 w-5 mr-2" />
          Recommended Activities
        </Button>
      </div>
    </div>
  )
}

