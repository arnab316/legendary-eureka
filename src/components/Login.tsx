import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { MdPerson2 } from "react-icons/md";
import { RiKey2Fill } from "react-icons/ri";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { login } from "@/api/authApi";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/feature/auth/authSlice";


const Login: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(() => generateCaptcha());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  function generateCaptcha(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 5 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  }

  const refreshCaptcha = (): void => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
    // Clear error when refreshing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    // CAPTCHA Validation - Case insensitive comparison
    const normalizedInput = captchaInput.trim().toUpperCase();
    const normalizedCode = captchaCode.trim().toUpperCase();

    console.log("Input:", normalizedInput, "Code:", normalizedCode); // Debug log

    if (normalizedInput !== normalizedCode) {
      setError("CAPTCHA code is incorrect.");
      refreshCaptcha();
      return;
    }

    // Additional validation for empty fields
    if (!username.trim()) {
      setError("Please enter your username.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    try {
      const response = await login({ username, password });
      
      if (response.status !== 200 || !response.user || !response.token) {
        setError(response.message || "Login failed. Please try again.");
        refreshCaptcha(); // Refresh CAPTCHA on login failure
      } else {
        // Set authentication cookie
        Cookies.set("token", response.token);
        
        Cookies.set("userId", btoa(String(response.user.id)));
        Cookies.set("userName", btoa(response.user.username));
         Cookies.set("roleId", btoa(String(response.user.role_id)));
         Cookies.set("emailId", btoa(String(response.user.email)));
        Cookies.set("name", btoa(response.user.firstname + ' ' + response.user.lastname));
         
        
          

        const { user, token } = response;
        
        // Dispatch auth state to Redux
        dispatch(setAuth({ user, token, isAuthenticated: true }));

        // Redirect after successful login
        navigate("/user/dashboard", { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      refreshCaptcha(); // Refresh CAPTCHA on error
    } finally {
      setLoading(false);
    }
  };

  // Fix: Generate rotation values once per captchaCode change
  const displayCaptcha = useMemo(() => {
    const colors = ["#22c55e", "#3b82f6", "#eab308", "#10b981", "#8b5cf6"];
    // Generate random rotations once when captchaCode changes
    const rotations = captchaCode.split("").map(() => (Math.random() - 0.5) * 25);
    
    return captchaCode.split("").map((char, i) => ({
      char,
      rotation: rotations[i],
      color: colors[i % colors.length],
      x: 15 + i * 28,
      y: 32,
    }));
  }, [captchaCode]);

  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col bg-[#8b9da9] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)",
      }}
    >
      <Card className="relative w-full max-w-sm shadow-xl border border-gray-200 rounded-xl bg-white px-0 py-0">
        {/* User Icon */}
        <div className="absolute -top-10 left-1/2 w-16 h-16 -translate-x-1/2 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg
            className="w-10 h-10 text-cyan-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <CardHeader className="mt-6">
          <CardTitle className="text-center text-cyan-500 font-bold text-2xl">
            USER LOGIN
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Username */}
            <div>
              <Label htmlFor="username" className="pb-2">
                Username <span className="text-red-600">*</span>
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="pb-2">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* CAPTCHA */}
            <div className="pt-1">
              <Label htmlFor="captchaInput" className="pb-1 mb-1 text-xl font-semibold border-b">
                CAPTCHA 
              </Label>
                <p className="text-gray-500 p-2">This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.</p>
              <div className="flex items-center gap-3 mb-2">
                <div className="border border-gray-300 rounded bg-white p-0">
  <svg width="150" height="40">
    {/* Add background and lines for better visibility */}
    <rect width="150" height="40" fill="#f9fafb" />
    <line x1="0" y1="0" x2="150" y2="40" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="0" y1="40" x2="150" y2="0" stroke="#e5e7eb" strokeWidth="1" />
    
    {displayCaptcha.map(({ char, rotation, color, x, y }, i) => (
      <text
        key={i}
        x={x}
        y={y}
        fontSize="22"
        fontWeight="bold"
        fill={color}
        transform={`rotate(${rotation} ${x} ${y})`}
        style={{
          fontFamily: "Arial, sans-serif",
          fontStyle: "italic",
        }}
      >
        {char}
      </text>
    ))}
  </svg>
</div>
                
                  <div>
                     <Button
                  type="button"
                  variant="link"
                  className="text-[#A3D8FF] text-md font-normal p-0"
                  onClick={refreshCaptcha}
                >
                  Generate a new captcha
                </Button>
                
                
                <div>
                <Label htmlFor="captchaInput" className="pb-1 mb-1 font-sm text-gray-500 font-normal">
                What code is in the image?<span className="text-red-600">*</span>
              </Label>
              <Input
                id="captchaInput"
                type="text"
                placeholder="Enter code"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
              </div>
              </div>
              </div>
              
            </div>
               
            {/* Debug info - Remove in production */}
            
            {/* Error message */}
            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5CB85C] hover:bg-green-600 text-white font-semibold mt-4 h-11"
            >
              {loading ? "Logging in..." : "LOG IN"}
            </Button>
          </form>
        </CardContent>
            
        <CardFooter></CardFooter>
        
      </Card>
       
    
      <div className="flex gap-27 w-full justify-center m-4 text-[#74D7FF]">
             <Link to="/user/register" className="flex items-center"><MdPerson2 size={20}/>Register Now</Link>
             <Link to="/user/password" className="flex items-center"><RiKey2Fill size={20}/>Forgot Password?</Link>
        </div>
    </div>
    
  );
};

export default Login;