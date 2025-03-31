"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { useRouter } from "next/navigation"
import { signUp, logIn } from "@/lib/auth"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged } from "firebase/auth"

export default function AuthForm() {
  const router = useRouter()
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })
  const [errors, setErrors] = useState({ name: "", email: "", password: "" })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard")
      }
    })
    return () => unsubscribe()
  }, [])

  const toggleAuthMode = () => setIsSignUp(!isSignUp)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    let newErrors = { name: "", email: "", password: "" }
    let valid = true

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        if (isSignUp) {
          await signUp(formData.email, formData.password)
        } else {
          await logIn(formData.email, formData.password)
        }
        router.push("/dashboard")
      } catch (error) {
        setErrors({ ...errors, email: error.message })
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <Header hideAuthButtons={true} />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 bg-gray-900/50 border border-gray-800 rounded-lg shadow-lg"
        >
          <motion.h2 
            key={isSignUp ? "sign-up" : "login"} 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-center mb-6"
          >
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </motion.h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2">
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button onClick={toggleAuthMode} className="text-purple-400 hover:underline">
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  )
}










// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { motion } from "framer-motion"
// import { Header } from "@/components/header"

// export default function AuthForm() {
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" })
//   const [errors, setErrors] = useState({ name: "", email: "", password: "" })

//   const toggleAuthMode = () => setIsSignUp(!isSignUp)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const validateForm = () => {
//     let newErrors = { name: "", email: "", password: "" }
//     let valid = true

//     if (isSignUp && !formData.name.trim()) {
//       newErrors.name = "Name is required"
//       valid = false
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//       valid = false
//     }
//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required"
//       valid = false
//     }

//     setErrors(newErrors)
//     return valid
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (validateForm()) {
//       console.log("Form submitted successfully!", formData)
//       // Add authentication logic here
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#0f0f1a] text-white">
//       <Header hideAuthButtons={true} />
//       <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-md p-8 bg-gray-900/50 border border-gray-800 rounded-lg shadow-lg"
//         >
//           <motion.h2 
//             key={isSignUp ? "sign-up" : "login"} 
//             initial={{ opacity: 0, y: -10 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.3 }}
//             className="text-3xl font-bold text-center mb-6"
//           >
//             {isSignUp ? "Create an Account" : "Welcome Back"}
//           </motion.h2>
//           <form onSubmit={handleSubmit}>
//             {isSignUp && (
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Name</label>
//                 <Input name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//               </div>
//             )}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Email</label>
//               <Input name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm font-medium mb-1">Password</label>
//               <Input name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
//               {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//             </div>
//             <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2">
//               {isSignUp ? "Sign Up" : "Login"}
//             </Button>
//           </form>
//           <p className="text-center text-gray-400 mt-4">
//             {isSignUp ? "Already have an account? " : "Don't have an account? "}
//             <button onClick={toggleAuthMode} className="text-purple-400 hover:underline">
//               {isSignUp ? "Login" : "Sign Up"}
//             </button>
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   )
// }
