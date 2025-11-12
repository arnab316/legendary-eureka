import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(() => generateCaptcha());

  function generateCaptcha(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 5 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  }

  const refreshCaptcha = (): void => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() !== captchaCode) {
      alert("CAPTCHA code is incorrect.");
      refreshCaptcha();
      return;
    }
    alert(`Logging in with username: ${username}`);
  };

  const displayCaptcha = useMemo(() => {
    const colors = ["#22c55e", "#3b82f6", "#eab308", "#10b981", "#8b5cf6"];
    return captchaCode.split("").map((char, i) => ({
      char,
      rotation: (Math.random() - 0.5) * 25,
      color: colors[i % colors.length],
      x: 15 + i * 28,
      y: 32,
    }));
  }, [captchaCode]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#8b9da9] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)",
      }}
    >
      <Card className="relative w-full max-w-sm shadow-xl border border-gray-200 rounded-xl bg-white px-8 py-8">
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
              <Label htmlFor="username">
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
              <Label htmlFor="password">
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
            <div className="pt-2">
              <Label htmlFor="captchaInput">
                CAPTCHA <span className="text-red-600">*</span>
              </Label>

              <div className="flex items-center gap-3 mb-2">
                <div className="border border-gray-300 rounded bg-white p-2">
                  <svg width="120" height="40">
                    {displayCaptcha.map(
                      ({ char, rotation, color, x, y }, i) => (
                        <text
                          key={i}
                          x={x}
                          y={y}
                          fontSize="24"
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
                      )
                    )}
                  </svg>
                </div>
                <Button
                  type="button"
                  variant="link"
                  className="text-cyan-600 text-xs p-0"
                  onClick={refreshCaptcha}
                >
                  Refresh
                </Button>
              </div>

              <Input
                id="captchaInput"
                type="text"
                placeholder="Enter CAPTCHA"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold mt-4"
            >
              LOG IN
            </Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>

      {/* Feedback button */}
      <div
        className="fixed right-0 top-1/2 bg-red-600 text-white px-4 py-2 rounded-l-md font-semibold text-sm shadow-lg hover:bg-red-700 cursor-pointer"
        style={{
          writingMode: "vertical-rl",
          letterSpacing: "1px",
          transform: "translateY(-50%)",
        }}
      >
        Feedback
      </div>
    </div>
  );
};

export default Login;
