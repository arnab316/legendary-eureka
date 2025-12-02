import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Register: React.FC = () => {
  const [captcha, setCaptcha] = useState(() => generateCaptcha())

  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    return Array.from({ length: 6 })
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha())
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-52 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/./Images/about-us-banner-img.avif')" }}
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Create New Account</h1>
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="hover:underline cursor-pointer">Home</a>
            <span>/</span>
            <span className="text-cyan-400">Create New Account</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="space-y-8">
            
            {/* Username */}
            <div className="space-y-1">
              <Label htmlFor="username" className="text-md text-gray-800 font-semibold">
                Username <span className="text-red-600">*</span>
              </Label>
              <Input 
                id="username" 
                className="border border-gray-300 rounded-sm h-10 px-3"
              />
              <p className="text-xs text-gray-600 mt-1">
                Spaces are allowed; punctuation is not allowed except for periods, hyphens, apostrophes, and underscores.
              </p>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-md text-gray-800 font-semibold">
                E-mail address <span className="text-red-600">*</span>
              </Label>
              <Input 
                id="email" 
                type="email" 
                className="border border-gray-300 rounded-sm h-10 px-3"
              />
              <p className="text-xs text-gray-600 mt-1">
                A valid email address. All emails from the system will be sent to this address. The e-mail address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by e-mail.
              </p>
            </div>

            {/* CAPTCHA Section */}
            <div className="space-y-3 pt-2">
              <h2 className="text-base font-bold text-gray-900 uppercase">
                CAPTCHA
              </h2>

              <p className="text-sm text-gray-700">
                This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.
              </p>

              {/* Captcha Display - Image Style */}
              <div className="flex flex-col gap-2">
                <div 
                  className="inline-block bg-white px-4 py-2 border border-gray-400"
                  style={{
                    width: 'fit-content'
                  }}
                >
                  <div
                    className="text-3xl font-bold tracking-wide select-none"
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontStyle: 'italic',
                      textDecoration: 'line-through',
                      textDecorationThickness: '1px',
                      letterSpacing: '0.1em',
                      color: '#000'
                    }}
                  >
                    {captcha}
                  </div>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    refreshCaptcha()
                  }}
                  className="text-blue-600 hover:underline text-sm w-fit"
                >
                  Generate a new captcha
                </a>
              </div>

              {/* Captcha Input */}
              <div className="space-y-1 pt-2">
                <Label htmlFor="captchaInput" className="text-md text-gray-800 font-semibold">
                  What code is in the image? <span className="text-red-600">*</span>
                </Label>
                <Input 
                  id="captchaInput" 
                  className="border border-gray-300 rounded-sm h-10 px-3"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Enter the characters shown in the image.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button 
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-sm text-sm h-auto"
              >
                Create new account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;