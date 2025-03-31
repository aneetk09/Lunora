"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/firebase"
import { logOut } from "@/lib/auth"
import { onAuthStateChanged, User } from "firebase/auth"

export function Header({ hideAuthButtons = false }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    await logOut();
    router.push("/");
  };

  return (
    <header className="border-b border-gray-800 bg-[#0f0f1a]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Lunora Logo" className="h-14 md:h-16" />
          <span className="font-bold text-xl md:text-4xl">Lunora</span>
        </Link>

        {!hideAuthButtons && (
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <div className="relative flex items-center gap-3">
                {/* Profile Avatar with Initials */}
                <button 
                  className="h-10 w-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
                </button>

                {/* User Name */}
                <span className="text-white font-medium">{user.displayName || user.email}</span>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-10">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth">
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  Sign Up / Login
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
