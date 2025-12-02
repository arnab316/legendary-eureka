import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaShare } from "react-icons/fa";
const ForgotPassword: React.FC = () => {
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
          <h1 className="text-5xl font-bold mb-4">Request New Password</h1>
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="hover:underline cursor-pointer">Home</a>
            <span>/</span>
            <span className="text-cyan-400">Request New Password</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-start px-4 py-12 max-w-5xl mx-auto">
        <div className="w-full max-w-2xl">
          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-xl font-bold  py-2 inline-block uppercase">
              Request New Password
            </h2>
            <div className="h-1 bg-[#089AD4] w-16 mt-1"></div>
          </div>

          <div className="space-y-6">
            
            {/* Username or Email */}
            <div className="space-y-1">
              <Label htmlFor="usernameOrEmail" className="text-sm text-gray-700 font-normal">
                Username or e-mail address <span className="text-red-600">*</span>
              </Label>
              <Input 
                id="usernameOrEmail" 
                className="border border-gray-300 bg-gray-100 rounded-sm h-10 px-3 w-full"
              />
            </div>

            {/* CAPTCHA Section */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-900 uppercase">
                CAPTCHA
              </h3>

              <p className="text-sm text-gray-700">
                This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.
              </p>

              {/* Captcha Display - Distorted Image Style */}
              <div className="flex flex-col gap-2">
                <div 
                  className="inline-block bg-white px-3 py-2 border border-gray-300"
                  style={{
                    width: 'fit-content'
                  }}
                >
                  <div
                    className="text-4xl font-bold select-none"
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontStyle: 'italic',
                      textDecoration: 'line-through',
                      textDecorationThickness: '2px',
                      textDecorationColor: '#333',
                      letterSpacing: '-0.05em',
                      color: '#000',
                      transform: 'skewX(-10deg)',
                      display: 'inline-block'
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
                  className="text-cyan-500 hover:underline text-sm w-fit"
                >
                  Generate a new captcha
                </a>
              </div>

              {/* Captcha Input */}
              <div className="space-y-1">
                <Label htmlFor="captchaInput" className="text-sm text-gray-700 font-normal">
                  What code is in the image? <span className="text-red-600">*</span>
                </Label>
                <Input 
                  id="captchaInput" 
                  className="border border-gray-300 bg-white rounded-sm h-10 px-3"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Enter the characters shown in the image.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-sm text-sm h-auto font-normal"
              >
                E-mail new password
              </Button>
            </div>

            {/* Back to Login Link */}
            <div className="pb-2  hover:no-underline ">
              <a
                href="/user/login"
                className="text-cyan-500 hover:text-black text-sm inline-flex items-center gap-1"
              >
                <span className="transform scale-x-[-1] text-md"><FaShare /></span>
                <span className="text-md">Back to Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ForgotPassword;